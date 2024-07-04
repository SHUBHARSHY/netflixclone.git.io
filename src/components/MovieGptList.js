import MovieCard from './MovieCard'
import './MovieGptList.css'

const MovieGptList = ({ title, movies }) => {

    return (
        <div className=''>
      
        <h1 style={{color:"white",margin:"5px",fontSize:"large"}}>{title}</h1>
     
            <div className='flex overflow-x-scroll'>
                <div className='flex abcd'>
                    {movies?.map((item, index) => (
                        <>
                            <MovieCard key={item.id} posterPath={item} />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieGptList;