import React, { useEffect, useRef, useState } from 'react'
import Movie from './Movie';
import _requests from '../api/Requests';

import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([]);
    const sliderRef = useRef();

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

    const handleSlideRight = () => {
        if (sliderRef.current){
            sliderRef.current.scrollLeft = sliderRef.current.scrollLeft +  500;
        }
    }
    
    const handleSlideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500;
        }
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl pt-4 px-4 pb-1 mb-2'>{title}</h2>
            <div className='slider-container relative flex items-center group'>
                <MdChevronLeft 
                    className=' bg-white rounded-full absolute left-1 opacity-50 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block' 
                    size={40}
                    onClick={handleSlideRight}
                />
                <div ref={sliderRef} id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative overflow-y-clip'>
                    {movies.length > 0 ? movies.map((movie) => <Movie key={movie.id} movie={movie}/>) : ''}
                </div>
                <MdChevronRight 
                    className=' bg-white rounded-full absolute right-1 opacity-50 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block' 
                    size={40}
                    onClick={handleSlideLeft}
                />
            </div>
        </>
    )
}

export default Row