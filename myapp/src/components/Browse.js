import React, { useEffect, useState } from 'react'
import Header from './Header';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from './hooks/usePopularMovies';
import useTopRated from './hooks/useTopRated';
import useUpcoming from './hooks/useUpcoming';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import IntroPage from './IntroPage';

const Browse = () => {

const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRated()
  useUpcoming()
  

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide the intro page after 3 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4300);

    // Clean up timer on component unmount or reload
    return () => clearTimeout(timer);
  }, []);



  return (
  <>


  {showIntro ? <IntroPage /> : 
  <div >
  <Header/>
  {showGptSearch? <GptSearch/>: <>
  <MainContainer/>
  <SecondaryContainer/>
  </>
}
</div>}
</>
  )
}

export default Browse