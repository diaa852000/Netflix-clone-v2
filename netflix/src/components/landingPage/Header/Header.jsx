import { Link } from "react-router-dom"
import { Frame, Logo, Button } from './HeaderStyled'
import bgHeader from '../../../assets/bg.jpg'
import { useEffect, useState } from "react"

const Header = ({ posterBg, children }) => {
    const [bgMain, setBgMain] = useState(bgHeader);
    
    useEffect(() => {
        if (posterBg) {
            setBgMain(posterBg)
        }
    },[posterBg, setBgMain])

    return (
        <div 
            className={`flex flex-col bg-cover bg-no-repeat bg-left-top h-[700px] overflow-hidden`} 
            style={{backgroundImage: `url(${bgMain})`, borderBottom: '0.4rem solid #222' }}>
            {children}
        </div>
    )
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <Link to={to}>
            <Logo {...restProps} />
        </Link>
    )
}

Header.Button = function HeaderButton({ to, children, ...restProps }) {
    return <Button to={to} {...restProps}>{children}</Button>
}

export default Header