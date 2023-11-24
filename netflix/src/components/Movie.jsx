import React, {useState} from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import _handleStrHook from '../hooks/stringHooks';
import { imageW500 } from '../api/Requests';

const Movie = ({movie}) => {
    const [like, setLike] = useState(false);

    const handleMovieImg = movie?.backdrop_path !== null ? imageW500(movie?.backdrop_path) : null;
    return (
        <>
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img 
                    src={handleMovieImg} 
                    alt={movie.title} 
                    className='w-full h-auto block' 
                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white transition-all duration-300 ease-in-out'>
                    <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                        {_handleStrHook(movie?.title, 3)}
                    </p>
                    <button>
                        {like 
                            ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> 
                            : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                        }
                    </button>
                </div>
            </div>

        </>
    )
}

export default Movie