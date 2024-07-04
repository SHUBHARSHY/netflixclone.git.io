import React from 'react'
import { useSelector } from 'react-redux'
import VedioTitle from './VedioTitle'
import VedioBackground from './VedioBackground'
import "./MainContaine.css"
const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    if(movies === null) return;

    const mainMovie = movies[0]
    const {original_title,overview,id,poster_path}= mainMovie
  return (
    <div className='Main '>
    <VedioTitle title={original_title} overview={overview} MovieID={id}/>
    <VedioBackground MovieID={id} poster={poster_path} />
    </div>
  )
}

export default MainContainer