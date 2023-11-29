import styled from "styled-components";
import { Link } from "react-router-dom";

export const Frame = styled.div`    
    display: flex;
    justify-content: space-between;

    max-width: 1490px;
    width: 100%;

    margin-top: 6px;
    margin-inline: auto;
    height: 5rem;
    padding: 1.1rem 2rem;
    align-items: center;

    a{
        display: flex;
    }
`;

export const Logo = styled.img`
    height: 2rem;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 5rem;
        width: 200px;
    }
`;

export const Button = styled(Link)`
    display: block;
    background-color: #e50914;    
    height: fit-content;
    color: #fff;
    font-size: 15px;
    padding: 6px 14px;
    text-align: center;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 250ms ease-in-out;

    &:hover{
        background-color: #f40612;
    }
`; 

