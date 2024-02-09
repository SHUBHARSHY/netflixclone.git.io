import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SearchMovieSuggetions = () => {
  const  {movieResults, movieNames} = useSelector(store=> store.gpt)
  
 if (!movieNames)return null;

  return (
    <div className='text-white p-4 m-4 bg-black bg-opacity-80'>
   
    {movieNames.map((movieNames,index)=><MovieList key={movieNames} title={movieNames} movies={movieResults[index]}/>)}
    
    </div>
  )
}

export default SearchMovieSuggetions