import { useEffect, useState } from 'react';
import {LiaAngleRightSolid} from 'react-icons/lia'
import { useNavigate } from 'react-router-dom';


const OptForm = ({text, ClassName}) => {
    const [email, setEmail] = useState('');
    const navigateTo = useNavigate();

    const handleGetStarted = () => {
        window.localStorage.setItem('email', email)
        navigateTo('/signup')
    };

    return (
        <div className={`flex flex-col md:flex-row gap-2 p-1 w-full sm:w-2/3 md:w-auto ${ClassName}`}>
        <input 
            type="email" 
            placeholder="Email address" 
            className="rounded-[4px] w-full md:w-[400px] py-3.5 px-3 text-white outline-none outline-0 border border-[#505050]
            bg-[rgba(0,0,0,0.5)] filter brightness-200 placeholder-[#505050]"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <button 
            type="button"
            onClick={handleGetStarted}
            className="capitalize w-full md:w-auto mx-auto md:mx-0 bg-[#e50914] p-2 md:py-2 md:px-4 rounded-[4px] text-white text-2xl flex items-center justify-center gap-2"
        >
            {text}
            <span>
                <LiaAngleRightSolid/>
            </span>
        </button>
    </div>
    )
};

export default OptForm