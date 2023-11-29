import React from 'react'
import bg from '../assets/bg.jpg'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '../lib/schema';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import { FooterContainer } from '../containers';

const Login = () => {
    return (
        <>
            <div className='relative'>
                <img className='h-screen w-full object-cover' src={bg} alt="bg" />
                <div className="absolute top-0 left-0 bg-black/50 h-full w-full">
                    <Navbar ClassName="hidden md:block" />
                    <div className='flex flex-col justify-start items-center p-1 md:p-2'>
                        <div className='absolute top-0 left-0 md:static h-full w-full bg-black px-2 md:flex justify-center rounded-md md:bg-black/90 
                            md:w-1/2 md:h-[80%] lg:w-2/5 lg:h-4/5 xl:w-[28%] 2xl:w-[24%]'
                        >
                            <img src={logo} alt="logo" className='w-24 md:hidden self-start' />
                            <Form />
                        </div>
                    </div>
                </div>
                
                <div className='hidden md:block'>
                    <FooterContainer />
                </div>
            </div>
        </>
    )
}

const Form = () => {
    const { logIn } = useAuth();
    const navigateTo = useNavigate();
    const inputClass = "rounded-[4px] p-3 w-full md:col-span-2 border-slate-400 border  outline-none placeholder:capitalize placeholder:text-slate-300 text-white bg-gray-500/30"

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });

    const handleLogin = async (data) => {
        try {
            await logIn(data.email, data.password);
            navigateTo('/home')
        } catch (error) {
            console.error("SignUp error has occured", error)
        }
    }
    return (
        <form
            onSubmit={handleSubmit(handleLogin)}
            className={`w-full h-full p-2 md:p-10 flex flex-col items-center md:justify-start gap-2`}
        >

            <h1 className='text-3xl self-start p-1 font-semibold capitalize my-4 text-white'>Login</h1>

            <div className='flex flex-col gap-3 w-full'>
                <input
                    type='email'
                    id='email_user'
                    placeholder='email address'
                    className={inputClass}
                    {...register("email")}
                />
                {errors.email && <span className='text-red-600 text-sm'>{errors.email.message}</span>}

                <input
                    type='password'
                    id='password_user'
                    placeholder='password'
                    className={inputClass}
                    {...register("password")}
                />
                {errors.password && <span className='text-red-600 text-sm'>{errors.password.message}</span>}

            </div>

            <button className={`rounded-[4px] bg-[#e50914] font-semibold text-[1.05rem] md:text-lg border-none border-0 
                capitalize w-full text-white flex items-center justify-center gap-3 py-2 mt-8 mb-6`}>
                login
            </button>

            <div className='flex justify-between items-center w-full text-[#b3b3b3] mb-5 md:mb-10'>
                <div>
                    <input
                        type="checkbox"
                        className='mx-1 cursor-pointer'
                        name="remember_me"
                        id="rember_me"
                    />
                    <label htmlFor="rember_me" className='text-sm cursor-pointer'>Remember me</label>
                </div>
                <Link to="/" className='text-sm'>Need help?</Link>
            </div>
            <p className='text-[#8c8c8c] self-start md:text-sm'>Don't have an account? <Link to={'/signup'} className='text-white'>sign up.</Link></p>
            <p className='text-[13px] md:text-sm text-[#b3b3b3] md:mb-24 lg:mb-28'>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className='text-blue-700'>Learn more.</Link>
            </p>

            <div className='block md:hidden'>
                <FooterContainer />
            </div>
        </form>
    )
}


export default Login