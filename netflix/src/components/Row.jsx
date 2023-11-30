import React, { useEffect, useRef, useState } from 'react'
import Movie from './Movie';
import _requests from '../api/Requests';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([]);
    const sliderRef = useRef();

    const slideWidht = 280;

    const handleSlideRight = () => {
        if (sliderRef.current){
            sliderRef.current.scrollLeft = sliderRef.current.scrollLeft +  slideWidht;
            
        }
    }
    
    const handleSlideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - slideWidht;
        }
    }
    
    const handleAutoSliding = () => {
        const sliderElement = sliderRef.current;
        
        if (sliderElement) {
            if(
                sliderElement.scrollLeft + sliderElement.clientWidth >= 
                sliderElement.scrollWidth
            ) {
                sliderElement.scrollLeft = 0;
            } else {
                sliderElement.scrollLeft = sliderElement.scrollLeft + slideWidht;            
            }
        }
    }

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetchURL();
                if (response && response.data) {
                    let moviesList = response.data.results; 
                    let moviesWithImg = moviesList.filter(movie => movie?.backdrop_path !== null)
                    setMovies(moviesWithImg);
                }
            } catch (err) {
                console.error("Error fetching movies", err);
            }
        }

        fetchMovies()
    },[fetchURL]);


    // useEffect(() => {
    //     let intervalId = setInterval(() => {
    //         handleAutoSliding();
    //     }, 2000);

    //     const sliderElement = sliderRef.current;

    //     const handleMouseEnter = () => clearInterval(intervalId);
        
    //     const handleMouseLeave = () => {
    //         intervalId = setInterval(() => {
    //             handleAutoSliding();
    //         }, 1500);
    //     }
    //     if (sliderElement) {
    //         sliderElement.addEventListener('mouseenter', handleMouseEnter);
    //         sliderElement.addEventListener('mouseleave', handleMouseLeave);
    //     }
        
    //     return () => {
    //         if (sliderElement){
    //             sliderElement.removeEventListener('mouseenter', handleMouseEnter);
    //             sliderElement.removeEventListener('mouseleave', handleMouseLeave);
    //         }

    //         clearInterval(intervalId)
    //     }
    // },[])

    return (
        <>
            <h2 className='text-white font-bold md:text-xl pt-4 px-4 pb-1 mb-2'>{title}</h2>
            <div className='slider-container relative flex items-center group'>
                <MdChevronLeft 
                    className=' bg-white rounded-full absolute left-1 opacity-50 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block' 
                    size={40}
                    onClick={handleSlideLeft}
                />
                <div ref={sliderRef} id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative overflow-y-clip'>
                    {movies.length > 0 ? movies.map((movie) => <Movie key={movie.id} movie={movie}/>) : ''}
                </div>
                <MdChevronRight 
                    className=' bg-white rounded-full absolute right-1 opacity-50 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block' 
                    size={40}
                    onClick={handleSlideRight}
                />
            </div>
        </>
    )
}

export default Row