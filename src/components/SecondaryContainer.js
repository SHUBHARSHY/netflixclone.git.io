import React from 'react'
import MovieList from './MovieList'
import MovieNumList from './MovieNumList'
import {useSelector} from 'react-redux'
import './SecondaryContainer.css'
const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies)
  if(movies === null) return;
  // console.log(movies.nowPlayingMovies)
  return (
    <div 
    // className='bg-[#141414]'
    className='list-box'
    >
      <div
      className='inr-listbox'
      // className='second -mt-52 relative z-20 pl-9'
      > 
    <MovieList title={"Trending Now"} movies={movies?.nowPlayingMovies}/>
    <MovieNumList title={"Bingeworthy TV Action & Adventure"} movies={movies?.topRated}/>
    <MovieList title={"Top 10 Movies in India Today"} movies={movies?.PopularMovies}/>
    <MovieNumList title={"Bollywood Movies"} movies={movies?.Upcoming}/>
    <MovieList title={"Bingeworthy TV Shows"} movies={movies?.nowPlayingMovies}/>
    </div>
    </div>
    )
  
}

export default SecondaryContainer