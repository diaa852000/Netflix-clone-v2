import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useAuth } from '../context/AuthContext'

const Navbar = ({ ClassName }) => {
    const { user, logOut } = useAuth()
    const navigateTo = useNavigate();
    const isAuthPage = window.location.pathname === "/signup" || window.location.pathname === "/login";

    const handleLogOut = async () => {
        try {
            await logOut();
            navigateTo('/login')
        } catch (error) {
            console.error("there's an error in logout proccess", error)
        }
    }

    return (
        <div className={`text-white flex items-center justify-between py-2 px-4 w-full z-50  ${ClassName} h-16`}>
            <Link to={'/'}>
                <img src={logo} alt="logo" className='h-16' />
            </Link>
            {isAuthPage ? (
                null
            )
                : (user?.email ? (
                    <div className='flex gap-1.5 sm:gap-2'>
                        <Link to={'/account'}>
                            <button className='text-white px-4 py-1 lg:px-5 lg:py-2 rounded capitalize font-semibold'>account</button>
                        </Link>

                        <button 
                            onClick={handleLogOut}
                            className='bg-red-600 px-4 py-1 lg:px-5 lg:py-2 rounded cursor-pointer text-white capitalize font-semibold'
                        >
                            log out
                        </button>
                    </div>
                )
                    : (<div className='flex gap-1.5 sm:gap-2'>
                        <Link to={'/login'}>
                            <button className='text-white px-4 py-1 lg:px-5 lg:py-2 rounded capitalize font-semibold'>sign in</button>
                        </Link>

                        <Link to={'/signup'}>
                            <button className='bg-red-600 px-4 py-1 lg:px-5 lg:py-2 rounded cursor-pointer text-white capitalize font-semibold'>
                                sign up
                            </button>
                        </Link>
                    </div>
                    ))}
        </div>
    )
}

export default Navbar