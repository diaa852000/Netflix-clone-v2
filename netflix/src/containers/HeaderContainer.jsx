import { Header, OptForm } from "../components/landingPage"
import logo from '../assets/logo.png'

const HeaderContainer = () => {
    return (
        <Header className="relative">
            <div className="absolute top-0 h-[694px] w-full bg-gradient-to-b from-black via-transparent via-30% to-black bg-black/40" />
            <Header.Frame className="z-10">
                <Header.Logo to={'/'} src={logo} alt="netflix.logo" />
                <Header.Button to={'/login'}>Sign In</Header.Button>
            </Header.Frame>
            <div className="flex-grow flex flex-col items-center justify-center gap-3 z-10">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-extrabold">Unlimited movies, TV shows, and more</h1>
                    <h5 className="text-2xl mt-6">Watch anywhere. Cancel anytime.</h5>
                    <h3 className="text-xl font-light mt-5">Ready to watch? Enter your email to create or restart your membership.</h3>
                </div>
                
            <OptForm text={'Get Started'}/>
            </div>
        </Header>
    )
}

export default HeaderContainer