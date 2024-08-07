import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import {  addPopularMovies } from '../utils/movieSlice';
import { API_OPTIONS, NEW_API_OPTIONS } from '../utils/constant';


const usePopularMovies =()=>{  

    const dispatch = useDispatch()
const PopularMovies = useSelector(store => store.movies.PopularMovies)
    const getPopularMovies = async ()=>{
    // const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    // const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', NEW_API_OPTIONS)

    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', NEW_API_OPTIONS)

    const json = await data.json()
  
    dispatch(addPopularMovies(json.results))
 
}


useEffect(()=>{
    
   !PopularMovies && getPopularMovies()
},[])
}

export default usePopularMovies