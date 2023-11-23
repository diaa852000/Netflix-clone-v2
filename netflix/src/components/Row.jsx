import React, { useEffect, useState } from 'react'
import _requests from '../api/Requests';
import { imageOriginal } from '../api/Requests';


const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetchURL();
                if (response && response.data) {
                    setMovies(response.data.results)
                }
            } catch (err) {
                console.error("Error fetching movies", err);
            }
        }

        fetchMovies()
    },[fetchURL])
    


    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center'>
                <div id='slider'>
                    {movies.length > 0 
                    ? movies.map((item, id) => (
                        <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img className='w-full h-auto block' src={imageOriginal(item?.backdrop_path)} alt={item.title} />
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white transition-all duration-300 ease-in-out'>
                                <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>

                            </div>
                        </div>
                        
                    
                    )) : ''}

                </div>
            </div>
        </>
    )
}

export default Row