import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='text-white flex items-center justify-between p-4 sticky w-full z-50 bg-transparent'>
            <Link
                to={'/'}
                className='uppercase text-red-600 text-2xl sm:text-4xl font-bold cursor-pointer'
            >
                netflix
            </Link>
            <div className='flex gap-1.5 sm:gap-2'>
                <button className='text-white px-4 py-1 lg:px-5 lg:py-2 rounded capitalize font-semibold'>sign in</button>
                <button
                    className='bg-red-600 px-4 py-1 lg:px-5 lg:py-2 rounded cursor-pointer text-white capitalize font-semibold'
                >
                    sign up
                </button>
            </div>
        </div>
    )
}

export default Navbar