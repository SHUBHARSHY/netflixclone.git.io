import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MovieNumList'

const MovieList = ({title,movies}) => {

  if(movies === null) return;
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 8,
          slidesToScroll:1 ,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
   

    <h1 style={{color:"white",margin:"5px",fontSize:"large"}}>{title}</h1>
    <Slider {...settings}>
    {movies.map((item) => (
      <MovieCard key={item.id} posterPath={item}/>
      ))}
      </Slider>
     
      </>
  );
};

// export default ImageCarousel;


export default MovieList