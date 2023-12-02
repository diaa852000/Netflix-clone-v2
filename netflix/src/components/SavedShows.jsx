import React, { useState, useEffect } from 'react'
import { db } from '../lib/firebase'
import { updateDoc, doc, onSnapshot, getDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import {useHandleString} from '../helpers/stringHooks'
import { AiOutlineClose } from 'react-icons/ai'

const SavedShows = () => {
    const [movies, setMovies] = useState([]);
    const { user } = useAuth();
    
    const movieRef = doc(db, 'users', `${user?.email}`);

    useEffect(() => {
        onSnapshot( movieRef, (doc) => {
            setMovies(doc.data()?.savedShows)
        })
    }, [user?.email])


    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter(movie => movie.id !== passedID);
            await updateDoc( movieRef, {
                savedShows: result,
            })
        } catch (error) {
            console.log("Error in deleteShow function", error)
        }
    }


    return (
        <>
            {movies.map(movie => (
                <div  key={movie.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.img}`}
                        alt={movie.title}
                        className='w-full h-auto block'
                    />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white transition-all duration-300 ease-in-out'>
                        <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                            {useHandleString(movie?.title, 3)}
                        </p>
                        <button onClick={()=> deleteShow(movie.id)} className='absolute text-gray-300 top-4 right-4'>
                            <AiOutlineClose/>
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SavedShows