import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useMovieTrailer from './hooks/useMovieTrailer'

const VedioTrailer = () => {

    const {id}  = useParams()
    console.log(id)
    
//   const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
//   if(movies === null) return;

//   const mainMovie = movies[0]
// console.log(mainMovie)
    // const trailerVedio = mainMovie.find((name) => name.id === parseInt(id, 10));

    // console.log(trailerVedio)

    useMovieTrailer(id)

    const trailerVedio = useSelector(store=> store.movies?.trailerVedio)
// const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
// console.log("trailerVedio: ",trailerVedio)
console.log("trailer2",trailerVedio)

  return (
    <div><div className="">
    <iframe
className="w-screen aspect-video"
      src={"https://www.youtube.com/embed/"+trailerVedio?.key+"?&autoplay=1&loop=2&controls=0&cc_load_policy=1"}
      title="YouTube video player"
     
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     
    ></iframe>
  </div></div>
  )
}

export default VedioTrailer