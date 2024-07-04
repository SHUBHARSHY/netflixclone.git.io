import MovieCard from './MovieCard'
import './MovieNumList.css'

const MovieNumList = ({ title, movies }) => {

    return (
        <div className=''>
      
        <h1 style={{color:"white",margin:"5px",fontSize:"large"}}>{title}</h1>
     
            <div className='flex overflow-x-scroll'>
                <div className='flex abcd'>
                    {movies?.map((item, index) => (
                        <>
                            <h1 className='abcdefghi'>{index+1}</h1>
                            <MovieCard key={item.id} posterPath={item} />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieNumList;