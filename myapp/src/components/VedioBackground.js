import React, { useEffect } from "react";
import { API_OPTIONS } from "./utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "./utils/movieSlice";

const VedioBackground = ({ movieID }) => {
  // fetch trailer vedios && updating the store with trailer vedio data

const trailerVedio = useSelector(store=> store.movies?.trailerVedio)
  const dispatch = useDispatch()
  const getMovieVedios = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/695721/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
dispatch(addTrailerVedio(trailer))
  };

  useEffect(() => {
    getMovieVedios();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVedio?.key}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      ></iframe>
    </div>
  );
};

export default VedioBackground;
