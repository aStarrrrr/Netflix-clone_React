import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../Axios';
import { API_KEY, imageUrl } from '../../Constants/Constants';
import Youtube from 'react-youtube';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  const handlePlay = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log('No video available for this movie');
        }
      });
  };

  const handleClosePlayer = () => {
    setUrlId('');
  };

  const currentMovie = movies[currentMovieIndex];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            currentMovie ? imageUrl + currentMovie.backdrop_path : ''
          })`,
        }}
        className="banner"
      >
        <div className="content">
          <h1 className="title">
            {currentMovie ? currentMovie.title || currentMovie.name : ''}
          </h1>
          <div className="banner_button">
            <button className="button" onClick={() => handlePlay(currentMovie?.id)}><i class="fa-solid fa-play"></i> Play</button>
            <button className="button">My List</button>
          </div>
          <h1 className="description">
            {currentMovie ? currentMovie.overview : ''}
          </h1>
        </div>
        <div className="fade_bottum"></div>
      </div>
      {urlId && (
        <div className="videoPlayer">
          <Youtube opts={opts} videoId={urlId.key} />
          <button className="closeButton" onClick={handleClosePlayer}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default Banner;
