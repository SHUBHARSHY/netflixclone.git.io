import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_OPTIONS, IMG_CDN_URL, NEW_API_OPTIONS, TOP_RATED } from './constant'
import { useSelector } from 'react-redux'
import "./MovieDetailCard.css"
import Aos from 'aos'



const MovieDetailCard = () => {
const[movies,setMovies]= useState(null)
const navigate = useNavigate()

const  {movieResults, movieNames} = useSelector(store=> store.gpt)


    const getNowPlayingMovies = async ()=>{
try {
    const data4 = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json4 = await data4.json()

    //data1

    const data1 = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', NEW_API_OPTIONS)

    const json1 = await data1.json()
  

 //data2

 const data2 = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', TOP_RATED)
 const json2 = await data2.json() 

 
 //data3

 const data3 = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
 const json3 = await data3.json();


const [item1,item2,item3,item4]  = await Promise.all([json1?.results,json2?.results,json3?.results,json4?.results]);
const data = await [item1,item2,item3,item4] 
          setMovies(data)
 
 
} catch (error) {
    console.log(error)
}
       

    }   
    useEffect(()=>{
       getNowPlayingMovies()
    },[])

    

    const {id}  = useParams()
   
    
        console.log(id)

       console.log(movies)
        if (!movies && !movieNames) return 
      

const getObjectById = (id,data) => {
    for (let i = 0; i < data.length; i++) {
       console.log(data[i])
        const foundObject = data[i].find(obj => obj.id == id);
        if (foundObject) {
            return foundObject;
        }
    }
    return null; // Return null if no object with the given id is found
};


const result = movieResults ? getObjectById(id,movieResults) : getObjectById(id,movies)

console.log(result)
const {original_title,overview,poster_path,release_date,vote_average}= result



const playVideo=()=>{
  navigate("/tmdb/"+id)   
  Aos.init()
}
  return (
    <div >
  
<div>
<div className='theme'>

</div>
        <img
        src={IMG_CDN_URL+poster_path}// Replace with the path to your image
        alt="Responsive Image"
        className="responsive-image"
        
        />

<div className='netflix'>
<div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

<div className='inr-netflix'>
<div class="upr-para-card">
<img src={require("../image/netflix.png")} style={{height:"30px"}}/>
<p className='card-para'>FILM</p>
</div>
<h1 className='card-Head'> {original_title}</h1>
<div className='title-bar-btn'>
<button className='play-btn play-btn px-4 md:px-6 py-[5px] font-bold text-md bg-white text-black rounded-[4px] flex items-center justify-center gap-2 hover:bg-opacity-80' onClick={playVideo}><i className="fa-solid fa-play"></i>play</button>
<div className='more-btn'> +</div>
<div className='more-btn'>
<i class="fa-regular fa-thumbs-up"></i>
</div>
</div>
</div>
</div>
</div>

</div>


<div className='details-upr-container'>

<div className='detail-inr-card' >
<div className='right-first-card'>
<h5 style={{color:"#46d369",fontWeight:"500"}}> 83% Match</h5>

<div className='rt-1st-inr-card'>
<p style={{color:"#bcbcbc"}}>2022</p>
<p style={{color:"#bcbcbc"}}>2 hr 40 min</p>
<p className='hd'>HD</p>
<div>
<i class="fa-regular fa-message"></i>
</div>
</div>
</div>

<div className='rt-2nd-inr-card'>
<p style={{border:"1px solid white",borderRadius:"4px"}}>U/A 14+</p>
<p style={{fontWeight:"500",fontSize:"large"}}>mild themes</p>
</div>
<div className='rt-3rd-inr-card'>
<div style={{height:"25px",background:"red",borderRadius:"4px",width:"25px", display:'flex',alignItems:"center",justifyContent:"center"}}>
<i className="fa-solid fa-thumbs-up">
</i>
</div>
<p style={{fontSize:"x-large",fontWeight:"700"}}>Most Liked</p>
</div>

<p className='rt-4th-inr-card'>
{overview}
</p>

</div>



<div className='detail-inr-card' >
<div className='rt-5th-inr-card'>
<img src={require("../image/imdb.png")} style={{height:"30px"}}/>
<p style={{fontSize:"large",fontWeight:"500"}}>⭐ {vote_average}</p>
</div>
<p className='left-1st-inr-card'><span style={{color:'#777'}}>Genres:</span> Children Family Movies</p>
<p className='left-1st-inr-card'>Nature & Ecology Documentaries</p>
<p className='left-1st-inr-card'><span style={{color:'#777'}}>this movie is :</span> heartfelt</p>
<p className='left-1st-inr-card'><span style={{color:'#777'}}>Release Date :</span> {release_date}</p>
</div>

</div>
    </div>
  )
}

export default MovieDetailCard