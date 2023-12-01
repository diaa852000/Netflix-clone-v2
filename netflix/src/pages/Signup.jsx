import bg from '../assets/bg.jpg'
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar';
import { FooterContainer } from '../containers';
import {Auth} from '../components';



const Signup = () => {
    return (
        <>
            <div className='relative'>
                <img className='h-screen w-full object-cover' src={bg} alt="bg" />
                <div className="absolute top-0 left-0 bg-black/50 h-full w-full">
                    <Navbar ClassName="hidden md:block" />
                    <div className='flex flex-col justify-start items-center p-1 md:p-2'>
                        <div className='absolute top-0 left-0 md:static h-full w-full bg-black px-2 md:flex justify-center rounded-md 
                        md:bg-black/90 md:w-1/2 md:h-[80%] lg:w-2/5 lg:h-4/5 xl:w-[28%] 2xl:w-[24%]'
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
};


const Form = () => {
    return <Auth authMethod={"signup"}/>
}



export default Signup