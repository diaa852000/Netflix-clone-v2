import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '../../lib/schema';
import { useNavigate } from "react-router-dom";


export default function WithAuth(AuthComponent, authMethod) {
    return function AuthHOC() {
        const [email, setEmail] = useState();
        const { logIn, signUp } = useAuth();
        const navigateTo = useNavigate();

        const { 
            handleSubmit,
            register,
            formState: { errors }
        } = useForm({resolver: zodResolver(schema)});

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
        }, []);

        return (
            <AuthComponent 
                OnValidSubmit={handleSubmit(handleAuth)}  
                register={register} 
                authMethod={authMethod} 
                errors={errors}
                email={email}
            />
        )
    };

    

}


