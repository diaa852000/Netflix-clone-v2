import React, { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContext";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '../lib/schema';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FooterContainer } from "../containers";
import authTexts from '../fixtures/authText'


export default function UseAuthHook({ authMethod }) {
    const [email, setEmail] = useState();
    const { logIn, signUp } = useAuth();
    const navigateTo = useNavigate();

    const inputClass = "rounded-[4px] p-3 w-full md:col-span-2 border-slate-400 border outline-none placeholder:capitalize placeholder:text-slate-300 text-white bg-gray-500/30"


    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });

    const handleAuth = async (data) => {
        if (authMethod === "login") {
            try {
                await logIn(data.email, data.password);
                navigateTo('/home')
            } catch (error) {
                console.error("SignUp error has occured", error)
            }
        } else if (authMethod === "signup") {
            try {
                await signUp(data.email, data.password);
                navigateTo('/home')
            } catch (error) {
                console.error("SignUp error has occured", error)
            }
        }
    }

    useEffect(() => {
        if (authMethod === "signup") {
            let savedEmail = window.localStorage.getItem('email');
            if (savedEmail && savedEmail != null) {
                setEmail(savedEmail);
            }
        }
    }, [])


    return (
        <form
            onSubmit={handleSubmit(handleAuth)}
            className={`w-full h-full p-2 md:p-10 flex flex-col items-center md:justify-start gap-2`}
        >
            <h1 className='text-3xl self-start p-1 font-semibold capitalize my-4 text-white'>
                {authMethod === "signup" ? authTexts.signup.title : authTexts.login.title}
            </h1>
            <div className='flex flex-col gap-3 w-full'>
                <input
                    type='email'
                    id='email_user'
                    placeholder='email address'
                    className={inputClass}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                {authMethod === "signup" ? authTexts.signup.btnText : authTexts.login.btnText}
            </button>
            
            <TextComponent/>

            <div className='block md:hidden'>
                <FooterContainer />
            </div>
        </form >
    );
}


const TextComponent = ({authMethod}) => {
    return (
        <>
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

            <p className='text-[#8c8c8c] self-start md:text-sm'>
                {authMethod === "signup" ? authTexts.signup.isUser : authTexts.login.isUser}
                <Link
                    to={authMethod === "signup" ? authTexts.signup.linkTo : authTexts.login.linkTo}
                    className='text-white ml-1 capitalize'
                >
                    {authMethod === "signup" ? authTexts.signup.isUserLink : authTexts.login.isUserLink}
                </Link>
            </p>
            <p className='text-[13px] md:text-sm text-[#b3b3b3] md:mb-24 lg:mb-28'>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className='text-blue-700'>Learn more.</Link>
            </p>

        </>
    )
}