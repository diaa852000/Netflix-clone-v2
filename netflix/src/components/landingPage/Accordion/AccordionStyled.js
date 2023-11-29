import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 0.25rem solid #222;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 45px;
    width: 70%;
    margin: auto;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 70px 10px;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 1000px) {
        font-size: 35px;
    }

`;
export const Item = styled.div`
    color: white;
    margin-top: 10px;

    &:first-of-type {
        margin-top: 3em;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-top: 1px;
    font-size: 1.2rem;
    font-weight: normal;
    background-color: #303030;
    padding: 0.8em 1.2em;
    user-select: none;
    border-bottom: 2px solid #000;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;



export const Body = styled.div`
    max-height: 1200px;
    height: ${({isopen}) => isopen ? '200px' : '0px'};
    visibility: ${({ isopen }) => isopen ? 'visible' : 'collapse'};
    opacity: ${({ isopen }) => isopen ? '1' : '0'};
    padding: ${({isopen}) => isopen ? '0.8em 2.2em 0.8em 1.2em' : '0px'};

    transition: 250ms ease-in-out;
    font-size: 1.2rem;
    font-weight: normal;
    line-height: normal;
    background-color: #303030;
    white-space: pre-wrap;
    user-select: none;
    @media (max-width: 600px) {
        overflow-y: auto;
        font-size: 1rem;
        line-height: 22px;
    }
`;
