// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { API_OPTIONS } from './utils/constant'
// import IntroPage from './IntroPage'

// const TmdbTrailer = () => {
// const [tmdb,setTmdb]= useState(null)



// const [showIntro, setShowIntro] = useState(true);

//   useEffect(() => {
//     // Hide the intro page after 3 seconds
//     const timer = setTimeout(() => {
//       setShowIntro(false);
//     }, 4300);

//     // Clean up timer on component unmount or reload
//     return () => clearTimeout(timer);
//   }, []);





//     const {id}  = useParams()
//     console.log(id)
//      const getMovieVedios = async () => {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
//       API_OPTIONS
//     );
//     const json = await data.json();
//     const filterData = json.results.filter((video) => video.type === "Trailer");
//     const trailer = filterData.length ? filterData[0] : json.results[0];
// setTmdb(trailer)
//     console.log("hook:",trailer);

   
//   };

//   useEffect(() => {
//  getMovieVedios();
//   }, []);


// console.log("trailer2",tmdb)

//   return (
//     <div>
    
//     {
// showIntro? <IntroPage/>:
//       <div className="">
//       <iframe
//       className="w-screen aspect-video"
//       src={"https://www.youtube.com/embed/"+tmdb?.key+"?&autoplay=1&loop=2&controls=0&cc_load_policy=1"}
//       title="YouTube video player"
      
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      
//       ></iframe>
//       </div>
//     }
//       </div>
//   )
// }

// export default TmdbTrailer







import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_OPTIONS } from './utils/constant';
import IntroPage from './IntroPage';
import audioFile from './image/Netflix-Intro-Sound-Effect.mp3'; // Import your audio file
import './TmdbTrailer.css'

const TmdbTrailer = () => {
  const [tmdb, setTmdb] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const { id } = useParams();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTmdb(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  useEffect(() => {
    // Play audio when IntroPage is shown for the first time
    const audio = new Audio(audioFile);
    const playAudio = () => {
      audio.play();
    };

    // Hide the intro page after 3 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
      playAudio();
    }, 4300);

    // Clean up timer and audio on component unmount or reload
    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);




  return (
    <div>
      {showIntro ? 
        <IntroPage />
       : 
        <div className="vedio">
          <iframe
         
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${tmdb?.key}?&autoplay=1&loop=2&controls=0&cc_load_policy=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      }
    </div>
  );
};

export default TmdbTrailer;






// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { API_OPTIONS } from './utils/constant';
// import IntroPage from './IntroPage';
// import audioFile from './image/Netflix-Intro-Sound-Effect.mp3'; // Import your audio file

// const TmdbTrailer = () => {
//   const [tmdb, setTmdb] = useState(null);
//   const [showIntro, setShowIntro] = useState(true);
//   const { id } = useParams();

//   const getMovieVideos = async () => {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
//       API_OPTIONS
//     );
//     const json = await data.json();
//     const filterData = json.results.filter((video) => video.type === "Trailer");
//     const trailer = filterData.length ? filterData[0] : json.results[0];
//     setTmdb(trailer);
//   };

//   useEffect(() => {
//     // Play audio when IntroPage is shown for the first time
//     const audio = new Audio(audioFile);
//     audio.play();

//     // Hide the intro page after 3 seconds
//     const timer = setTimeout(() => {
//       setShowIntro(false);
//     }, 4300);

//     // Clean up timer and audio on component unmount or reload
//     return () => {
//       clearTimeout(timer);
//       audio.pause();
//       audio.currentTime = 0;
//     };
//   }, []);


 
  

//   useEffect(() => {
//     getMovieVideos();
//   }, []);

//   return (
//     <div>
//       {showIntro ? (
//         <IntroPage />
//       ) : (
//         <div className="">
//           <iframe
//             className="w-screen aspect-video"
//             src={`https://www.youtube.com/embed/${tmdb?.key}?&autoplay=1&loop=2&controls=0&cc_load_policy=1`}
//             title="YouTube video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TmdbTrailer;

