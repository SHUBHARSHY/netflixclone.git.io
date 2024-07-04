import React from 'react'
import './VedioTitle.css'
import { useNavigate } from 'react-router-dom'

const VedioTitle = ({title,overview,MovieID}) => {

  const navigate = useNavigate()
  const playVideo=()=>{
    navigate("/trailer/"+MovieID)   
  }

  return (
    <div 
    className='z-10 v-Container absolute text-[#e5e5e5] bg-gradient-to-r  aspect-video title'  >
    <div className='Text-btn'>
    <div className='Text-wrap'>
    <h1 className='Txt-head'>{title}</h1>
    <p className='Txt-para'>{overview.split(" ").slice(0, 20).join(" ")+"..." || overview}</p>
    </div>
    
    <div className='action flex gap-3 mt-4 btn-wrap'>
    <button className='play-btn play-btn px-4 md:px-6 py-[5px] font-bold text-md bg-white text-black rounded-[4px] flex items-center justify-center gap-2 hover:bg-opacity-80' onClick={playVideo}><i className="fa-solid fa-play"></i>play</button>
    <button className="play-btn info-btn px-4 md:px-6 py-[5px] font-bold text-md rounded-[4px] flex items-center justify-center gap-2 bg-gray-500 text-white bg-opacity-50"><i className="fa-solid fa-circle-info"></i>More Info</button>
    </div>

    </div>


    
    </div>



    
    )
}

export default VedioTitle
