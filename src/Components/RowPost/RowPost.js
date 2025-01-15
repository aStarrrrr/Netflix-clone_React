import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../Axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'

function RowPost() {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network error')
    })
  },[])
  return (
    <div className='row'>
      <h2>Netflix Originals</h2>
      <div className="posters">
        {movies.map((obj)=>
          <img className='poster' src={`${imageUrl + obj.backdrop_path}`} alt="Poster" />
        )}
      </div>
    </div>
  )
}

export default RowPost
