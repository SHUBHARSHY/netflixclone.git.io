import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_OPTIONS } from './utils/constant'

const TmdbTrailer = () => {
const [tmdb,setTmdb]= useState(null)
    const {id}  = useParams()
    console.log(id)
     const getMovieVedios = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
setTmdb(trailer)
    console.log("hook:",trailer);

   
  };

  useEffect(() => {
 getMovieVedios();
  }, []);


console.log("trailer2",tmdb)

  return (
    <div><div className="">
    <iframe
className="w-screen aspect-video"
      src={"https://www.youtube.com/embed/"+tmdb?.key+"?&autoplay=1&loop=2&controls=0&cc_load_policy=1"}
      title="YouTube video player"
     
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     
    ></iframe>
  </div></div>
  )
}

export default TmdbTrailer