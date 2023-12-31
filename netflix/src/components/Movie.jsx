import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import useHandleString from '../helpers/stringHooks'
import { imageW500 } from '../api/Requests'
import { useAuth } from '../context/AuthContext'
import { db } from '../lib/firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'


const Movie = ({ movie }) => {
    const [isLike, setIsLike] = useState(false);
    // const [saved, setSaved] = useState();
    const { user } = useAuth();

    const handleMovieImg = movie?.backdrop_path !== null ? imageW500(movie?.backdrop_path) : null;

    const movieRef = doc(db, 'users', `${user?.email}`);

    const saveShows = async () => {
        if (user?.email) {
            setIsLike(prev => !prev);
            if (movie.id && movie.title && movie.backdrop_path) {
                const isSavedMovie = user.savedShows && user.savedShows.some(savedMovie => savedMovie.id === movie.id);
                if (!isSavedMovie) {
                    await updateDoc(movieRef, {
                        savedShows: arrayUnion({
                            id: movie.id,
                            title: movie.title,
                            img: movie.backdrop_path
                        }),
                    });
                }
            }
        } else {
            alert('please log in to save movie');
        }
    }


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
                        {useHandleString(movie?.title, 3)}
                    </p>
                    <LikeButton like={isLike} saveShows={saveShows} />
                </div>
            </div>
        </>
    )
}


const LikeButton = ({ like, saveShows }) => {
    const Icon = like ? FaHeart : FaRegHeart;
    return <button onClick={saveShows}><Icon className='absolute top-4 left-4 text-gray-300' /></button>;
};


export default Movie