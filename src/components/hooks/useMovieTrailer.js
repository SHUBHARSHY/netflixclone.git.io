import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVedio } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieID)=>{

    const dispatch = useDispatch()
    const trailerVedio = useSelector(store=>store.movies.trailerVedio)
     const getMovieVedios = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    console.log("hook:",trailer);

    dispatch(addTrailerVedio(trailer))
  };

  useEffect(() => {
   !trailerVedio && getMovieVedios();
  }, []);
}

export default useMovieTrailer