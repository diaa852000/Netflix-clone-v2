import React, { useEffect, useState } from 'react'
import _requests, { imageOriginal } from '../api/Requests';

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];
    
    const handleBackdrop = movie?.backdrop_path ? imageOriginal(movie?.backdrop_path) : null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await _requests.requestPopular;
                if (response.data.results) {
                    setMovies(response.data.results)
                }
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        }
        
        fetchData();
    }, []);

    const truncateString = (overview, num) => {
        if (overview && overview.length > 0) {            
            if (overview?.length <= num) {
                return overview
            } else {
                let wordsArray = overview?.split(" ");
                return wordsArray.slice(0, num).join(" ")
            }
        }
    };


    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black' />

                <img className='w-full h-full object-cover object-top' src={handleBackdrop} alt={movie?.title} />
                
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className='border capitalize bg-gray-300 text-black border-gray-300 py-2 px-5'>play</button>
                        <button className='border capitalize text-white border-gray-300 py-2 px-5 ml-4'>watch later</button>
                    </div>
                    <p className='capitalize text-gray-400 text-sm font-semibold'>
                        relased: <span className='ml-1'>{movie?.release_date}</span>
                    </p>
                    <p className='w-full md:max-w-[70%] lg:max-w-1/2 xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview, 250)}</p>
                </div>

            </div>
        </div>
    )
}

export default Main