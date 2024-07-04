import React from 'react'
 import { IMG_CDN_URL } from './utils/constant'
import "./MovieCard.css"
import { useNavigate } from 'react-router-dom'

const MovieCard = ({posterPath}) => {
  const {poster_path,id}=posterPath
 const navigate = useNavigate()
const showVedio =()=>{
  //  navigate("/tmdb/"+id)
  navigate("/browse/MovieDetails/"+id)
  
}

// const text= "hello world"
// let abc = new SpeechSynthesisUtterance(text)
// window.speechSynthesis.speak(abc)
  if (!poster_path) return null
  return (
    <div
    //  className='w-[9rem] pr-4'
    className="zooming-card"
    >
    <img alt='zooming-image' className='zooming-image' src={IMG_CDN_URL + poster_path} onClick={showVedio}/>
    </div>
  )
}

export default MovieCard

