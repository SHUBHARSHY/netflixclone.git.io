import React from 'react'
import './VedioTitle.css'

const VedioTitle = ({title,overview}) => {
  return (
    <div className='v-Container ' >
    <div className='Text-btn'>
    <div className='Text-wrap'>
    <h1 className='Txt-head'>{title}</h1>
    <p className='Txt-para'>{overview}</p>
    </div>
    
    <div className='action flex gap-3 mt-4 btn-wrap'>
    <button className=' play-btn px-4 md:px-6 py-[5px] font-bold text-md bg-white text-black rounded-[4px] flex items-center justify-center gap-2'><i class="fa-solid fa-play"></i>play</button>
    <button className="info-btn px-4 md:px-6 py-[5px] font-bold text-md rounded-[4px] flex items-center justify-center gap-2"><i class="fa-solid fa-circle-info"></i>More Info</button>
    </div>
    </div>


    <div className='px-4 md:px-12 w-full xl:w-1/2 text-white pt-[0px]'>
    
    </div>
    </div>



    
    )
}

export default VedioTitle
