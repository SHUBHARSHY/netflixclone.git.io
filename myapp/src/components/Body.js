import React from 'react'
import Login from './Login'
import Browse from './Browse'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import VedioTrailer from './VedioTrailer'
import TmdbTrailer from './TmdbTrailer'
import MovieDetailCard from './utils/MovieDetailCard'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
            
        },
        {
            path:"/browse",
            element:<Browse/>
            
        },
        {
            path:"/trailer/:id",
            element:<VedioTrailer/>
            
        },
        {
            path:"/tmdb/:id",
            element:<TmdbTrailer/>
            
        },
        {
            path:"/MovieDetails/:id",
            element:<MovieDetailCard/>
            
        }
    ])
  return (
    <div>
<RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body