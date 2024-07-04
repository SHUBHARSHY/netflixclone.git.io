import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { addTopRated } from '../utils/movieSlice';
import { TOP_RATED } from '../utils/constant';


const useTopRated =()=>{  

    const dispatch = useDispatch()

    const getTopRated = async ()=>{

    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', TOP_RATED)

    const json = await data.json()
    //  console.log(json)
    dispatch(addTopRated(json.results))
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
}


useEffect(()=>{
    getTopRated()
},[])
}

export default useTopRated