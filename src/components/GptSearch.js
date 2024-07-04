import React from 'react'
import SearchBar from './SearchBar'
import { BG_URL } from './utils/constant'
import SearchMovieSuggetions from './SearchMovieSuggetions'
import "./GptSearch.css"
import BackgroundImage from './utils/backgroundImage'

const GptSearch = () => {
  return (
    <div style={{backgroundColor:"rgb(0,0,0,0.3)"}}>
    <BackgroundImage>
    {/*
    <div 
    // className=" absolute -z-10"
    className='gpt'
    > 
    <img 
    className="gpt-img"
    className='h-screen object-cover'
    src={BG_URL}
    alt="photo"
  />      

  </div>
*/}
    <div className='gpt-parent' >
    <SearchBar/>
    </div>
    <SearchMovieSuggetions/> 
    </BackgroundImage>
    </div>
  )
}

export default GptSearch