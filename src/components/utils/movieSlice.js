import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVedio:null,
        PopularMovies:null,
        topRated:null,
        Upcoming: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
            // console.log(state.nowPlayingMovies)
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies = action.payload
            // console.log(state.PopularMovies)
        },
        addTrailerVedio:(state,action)=>{
            state.trailerVedio=action.payload
            // console.log(state.trailerVedio)
        },
        
        addTopRated:(state,action)=>{
            state.topRated=action.payload
            // console.log("state")
        },
        addUpcoming:(state,action)=>{
            state.Upcoming=action.payload
        }

    }
})

export const {addNowPlayingMovies,addTrailerVedio,addPopularMovies,addTopRated,addUpcoming} =movieSlice.actions;
export default movieSlice.reducer
