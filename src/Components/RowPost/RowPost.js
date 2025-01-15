import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../Axios';
import { imageUrl, API_KEY } from '../../Constants/Constants';
import Youtube from 'react-youtube';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  
  useEffect(() => {
    axios.get(props.url).then((response) => {
        setMovies(response.data.results);
      }).catch((err) => {
        alert('Network error');
      });
  }, [props.url]);

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

  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log('No items to show');
        }
      });
  };

  const handleClosePlayer = () => {
    setUrlId('');
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="Poster"/>
        ))}
      </div>
      {urlId && (
        <div className="videoPlayer">
          <Youtube opts={opts} videoId={urlId.key} />
          <button className="closeButton" onClick={handleClosePlayer}>✕</button>
        </div>
      )}
    </div>
  );
}

export default RowPost;
