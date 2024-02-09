import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_OPTIONS, NEW_API_OPTIONS, TOP_RATED } from './constant'
import { useSelector } from 'react-redux'
import { ChatCompletionStreamingRunner } from 'openai/lib/ChatCompletionStreamingRunner'
import VedioTitle from '../VedioTitle'
import VedioBackground from '../VedioBackground'




const MovieDetailCard = () => {
const[nowPlaying,setNowPlaying]= useState(null)
const[popular,setPopular]= useState(null)
const[topRated,setTopRated]= useState(null)
const[upcoming,setUpcoming]= useState(null)


const  {movieResults, movieNames} = useSelector(store=> store.gpt)

    const getNowPlayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json()
       
        setNowPlaying(json)
    }   
    useEffect(()=>{
       getNowPlayingMovies()
    },[])

    const getPopularMovies = async ()=>{
         const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', NEW_API_OPTIONS)
    
        const json = await data.json()
     setPopular(json)
    }   
    useEffect(()=>{
        
     getPopularMovies()
    },[])

    const getTopRated = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', TOP_RATED)
        const json = await data.json() 
        setTopRated(json) 
    }
    
    useEffect(()=>{
        getTopRated()
    },[])


    const getMovieVedios = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        setUpcoming(json)
      };
    
      useEffect(() => {
        getMovieVedios();
      }, []);

    const {id}  = useParams()

  
   const movies =[
    nowPlaying?.results,
    popular?.results,
    topRated?.results,
    upcoming?.results
   ]
        console.log(id)

if (!nowPlaying && !popular && !topRated && !upcoming && !movieNames) return 

console.log(movies)


const getObjectById = (id,data) => {
    for (let i = 0; i < data.length; i++) {
       
        const foundObject = data[i].find(obj => obj.id == id);
        if (foundObject) {
            return foundObject;
        }
    }
    return null; // Return null if no object with the given id is found
};


const result = movieResults ? getObjectById(id,movieResults) : getObjectById(id,movies)

console.log(result)
const {original_title,overview,poster_path}= result
  return (
    <div>
    <VedioTitle title={original_title} overview={overview} MovieID={id}/>
    <VedioBackground MovieID={id} poster={poster_path} />
    </div>
  )
}

export default MovieDetailCard