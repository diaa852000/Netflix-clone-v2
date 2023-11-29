import { useState, createContext, useContext } from "react";
import { Container, Inner, Title, Item, Header, Body } from './AccordionStyled';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'

export const ToggleContext = createContext();

export const Accordion = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <ToggleContext.Provider value={{ isToggle, setIsToggle }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
};

Accordion.Header = function AccordionItem({ children, ...restProps }) {
    const { isToggle, setIsToggle } = useContext(ToggleContext);

    return (
        <Header 
            onClick={() => setIsToggle(isToggle => !isToggle)} 
            {...restProps}
        >
            {children}
            <div className="flex items-center justify-center">
                {isToggle
                    ? <AiOutlineClose />
                    : <AiOutlinePlus />
                }
            </div>
        </Header>
    )
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { isToggle } = useContext(ToggleContext);
    return <Body isopen={isToggle} {...restProps}>{children}</Body>
    
};

export default Accordion;