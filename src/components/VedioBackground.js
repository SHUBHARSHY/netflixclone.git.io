
import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";
import React, { useState, useEffect } from 'react';
import { IMG_CDN_URL } from "./utils/constant";



const VedioBackground = ({MovieID,poster}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// fetch trailer vedios && updating the store with trailer vedio data
const trailerVedio = useSelector(store=> store.movies?.trailerVedio)
  useMovieTrailer(MovieID)

   
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


// css styled variable


const getStyles = () => {
  if (windowWidth < 480) {
    return {
      backgroundImage: `url(${IMG_CDN_URL+ poster})`, // Replace with the path to your image
  backgroundSize: 'cover',
  filter: 'blur(10px)', // Adjust the blur amount as needed
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
    };
  } else if (windowWidth < 768) {
    return {
      backgroundImage: `url(${IMG_CDN_URL+ poster})`, // Replace with the path to your image
      backgroundSize: 'cover',
      filter: 'blur(10px)', // Adjust the blur amount as needed
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    };
  } else {
    return {
      backgroundImage: `url(${IMG_CDN_URL+ poster})`, // Replace with the path to your image
      backgroundSize: 'cover',
      filter: 'blur(10px)', // Adjust the blur amount as needed
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    };
  }
};

const styles = getStyles();


const centeredImageStyle = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Adjust the size of the centered image as needed
  height: 'auto',
  zIndex: 1, // Ensure the centered image is on top of the background
  border:"1px solid wheat",
  borderRadius: "10px"
  
};



  return (
    <div className="app-container" style={{border:"1px solid white"}}>
      {windowWidth < 720 ? (
        <>
       <div style={styles}></div>
        <img
        src={IMG_CDN_URL+poster}// Replace with the path to your image
        alt="Responsive Image"
        className="responsive-image"
        style={centeredImageStyle}
        />
        </>
      ) : (
        <div className="">
      <iframe
className="w-[100%] aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVedio?.key+"?&autoplay=1&mute=1&loop=2&controls=0&cc_load_policy=1"}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      ></iframe>
    </div>
      )}
    </div>
  );
};

export default VedioBackground;




// const VedioBackground = ({MovieID}) => {
//   // fetch trailer vedios && updating the store with trailer vedio data
// const trailerVedio = useSelector(store=> store.movies?.trailerVedio)
//   useMovieTrailer(MovieID)
//   return (
//     <div className="">
//       <iframe
// className="w-screen aspect-video"
//         src={"https://www.youtube.com/embed/"+trailerVedio?.key+"?&autoplay=1&mute=1&loop=2&controls=0&cc_load_policy=1"}
//         title="YouTube video player"
       
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
//       ></iframe>
//     </div>
//   );
// };

// export default VedioBackground;
