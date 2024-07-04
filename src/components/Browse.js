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

const Browse = () => {

const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRated()
  useUpcoming()
  
  return (
  <>
  <div >
  <Header/>
  {showGptSearch? <GptSearch/>: <>
  <MainContainer/>
  <SecondaryContainer/>
  </>
}
</div>
</>
  )
}

export default Browse

// import React, { useEffect, useState } from 'react';
// import Header from './Header';
// import useNowPlayingMovies from './hooks/useNowPlayingMovies';
// import MainContainer from './MainContainer';
// import SecondaryContainer from './SecondaryContainer';
// import usePopularMovies from './hooks/usePopularMovies';
// import useTopRated from './hooks/useTopRated';
// import useUpcoming from './hooks/useUpcoming';
// import GptSearch from './GptSearch';
// import { useSelector } from 'react-redux';
// import IntroPage from './IntroPage';
// import audioFile from './image/Netflix-Intro-Sound-Effect.mp3'; // Import your audio file

// const Browse = () => {
//   const showGptSearch = useSelector(store => store.gpt.showGptSearch);
//   useNowPlayingMovies();
//   usePopularMovies();
//   useTopRated();
//   useUpcoming();

//   const [showIntro, setShowIntro] = useState(true);

//   useEffect(() => {
//     // Play audio when IntroPage is shown for the first time
//     const audio = new Audio(audioFile);
//     const playAudio = () => {
//       audio.play();
//     };

//     // Hide the intro page after 3 seconds
//     const timer = setTimeout(() => {
//       setShowIntro(false);
//       playAudio();
//     }, 4300);

//     // Clean up timer and audio on component unmount or reload
//     return () => {
//       clearTimeout(timer);
//       audio.pause();
//       audio.currentTime = 0;
//     };
//   }, [showIntro]); // Dependency on showIntro ensures audio playback when IntroPage is shown

//   return (
//     <>
//       {showIntro ? (
//         <IntroPage />
//       ) : (
//         <div>
//           <Header />
//           {showGptSearch ? (
//             <GptSearch />
//           ) : (
//             <>
//               <MainContainer />
//               <SecondaryContainer />
//             </>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default Browse;
