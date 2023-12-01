import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useAuth } from '../context/AuthContext'
import { MdLogout } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";


const Navbar = ({ ClassName }) => {
    const {user} = useAuth();
    const isAuthPage = window.location.pathname === "/signup" || window.location.pathname === "/login";


    return (
        <div className={`text-white flex items-center justify-between py-2 px-4 w-full z-50 h-16 bg-transparent ${ClassName}`}>
            <Link to={'/'} className='w-28 h-16 block'>
                <img src={logo} alt="logo" className='w-full h-full' />
            </Link>
            {isAuthPage ? null : user?.email && <AuthorizedUser />}
        </div >
    )
}


const AuthorizedUser = () => {
    const { logOut } = useAuth()
    const navigateTo = useNavigate();

    const handleLogOut = async () => {
        try {
            await logOut();
            navigateTo('/');
        } catch (error) {
            console.error("there's an error in logout proccess", error)
        }
    }

    return (
        <div className='flex gap-1.5 sm:gap-px'>
            <Link to={'/account'}>
                <button className='p-2 rounded capitalize font-semibold'>
                    <RxAvatar size={22} />
                </button>
            </Link>

            <button
                onClick={handleLogOut}
                className='p-2 rounded cursor-pointer text-white capitalize font-semibold'
            >
                <MdLogout size={22} />
            </button>
        </div>
    )
}

// const UnAuthorizedUser = () => {
//     return (
//         <div className='flex gap-1.5 sm:gap-2'>
//             <Link to={'/login'}>
//                 <button className='text-white px-4 py-1 lg:px-5 lg:py-2 rounded capitalize font-semibold'>login</button>
//             </Link >

//             <Link to={'/signup'}>
//                 <button className='bg-red-600 px-4 py-1 lg:px-5 lg:py-2 rounded cursor-pointer text-white capitalize font-semibold'>
//                     sign up
//                 </button>
//             </Link>
//         </div >
//     )
// }

export default Navbar