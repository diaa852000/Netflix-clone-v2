import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = ({authPage, ClassName}) => {
    return (
        <div className={`text-white flex items-center justify-between p-4 sticky w-full z-50 bg-transparent ${ClassName}`}>
            <Link to={'/'}>
                <img src={logo} alt="logo" className='h-20'/>
            </Link>
            {!authPage  && 
                <div className='flex gap-1.5 sm:gap-2'>
                    <Link to={'/login'}>
                        <button className='text-white px-4 py-1 lg:px-5 lg:py-2 rounded capitalize font-semibold'>sign in</button>
                    </Link>

                    <Link to={'/signup'}>
                        <button
                            className='bg-red-600 px-4 py-1 lg:px-5 lg:py-2 rounded cursor-pointer text-white capitalize font-semibold'
                        >
                            sign up
                        </button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Navbar