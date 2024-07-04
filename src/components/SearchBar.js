import React, { useRef } from 'react'
import lang from './utils/LanguageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from './utils/OpenAI'
import { API_OPTIONS } from './utils/constant'
import { addGptMovieResults } from './utils/gptSlice'
import './SearchBar.css'

const SearchBar = () => {
    const dispatch = useDispatch()
    const langKey = useSelector(store=>store.config.lang)
    const searchText = useRef(null)

const searchMovieTmdb =  async(movies)=>{
 
  const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movies+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
  const json = await data.json()

  return json.results
}

 const handleGPTSearchClick = async ()=>{
      // console.log( searchText.current.value)
try{
  const gptQuery = "Act as a Movie Recomendation system and suggest some movies for the Query "+ searchText.current.value + " only give me names of 5 movies, comma seperated  like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"
  const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });
  if(!gptResults.choices){

  }
  const gptMovies =gptResults?.choices?.[0]?.message?.content.split(",")
  const promiseArray = gptMovies.map((movie)=>searchMovieTmdb(movie))
  // console.log(gptMovies)
  const tmdbResults = await Promise.all(promiseArray)
  dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}))
  // console.log(tmdbResults)
}catch(err){
console.log(err)
}
      
    }
    return (
    <div 
    // className='pt-[35%] md:pt-[10%] flex justify-center'
    className=" search-bar"
    >
    <h1 className='heading'>Let AI be your Movie Guru!</h1>
    <p className='para'>Discover Family-Friendly Flicks for a Perfect Movie Night</p>
    <form 
    // className='w-full md:w-1/2 bg-black grid grid-cols-12' 
    className="search-form"
    onSubmit={(e)=>e.preventDefault()}>
    <input
    //  className='p-4 m-4 col-span-9'
    className='input-gpt'
     placeholder={lang[langKey].placeholder} ref={searchText}/>
    <button 
    // className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' 
    className="search-btn"
    onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
    </form>
   
    </div>
  )
}

export default SearchBar