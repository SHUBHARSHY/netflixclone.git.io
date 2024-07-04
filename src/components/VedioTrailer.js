import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useMovieTrailer from './hooks/useMovieTrailer'
import './VedioTrailer.css'
import IntroPage from './IntroPage'
import audioFile from './image/Netflix-Intro-Sound-Effect.mp3'

const VedioTrailer = () => {

  const [showIntro, setShowIntro] = useState(true);
    const {id}  = useParams()
    console.log(id)
    


    useMovieTrailer(id)

    const trailerVedio = useSelector(store=> store.movies?.trailerVedio)


    // useEffect(() => {
    //   // Play audio when IntroPage is shown for the first time
    //   const audio = new Audio(audioFile);
    //   const playAudio = () => {
    //     audio.play();
    //   };
  
      // Hide the intro page after 3 seconds
      const timer = setTimeout(() => {
        setShowIntro(false);
        // playAudio();
      }, 4300);
  
    //   // Clean up timer and audio on component unmount or reload
    //   return () => {
    //     clearTimeout(timer);
    //     audio.pause();
    //     audio.currentTime = 0;
    //   };
    // }, []);

  return (
    
    <div>
    {showIntro? <IntroPage/>:
    <div className="vedio">
    <iframe
className="w-screen aspect-video"
      src={"https://www.youtube.com/embed/"+trailerVedio?.key+"?&autoplay=1&loop=2&controls=0&cc_load_policy=1"}
      title="YouTube video player"
     
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     
    ></iframe>
  </div>
  }
    
  
  </div>
  )
}

export default VedioTrailer