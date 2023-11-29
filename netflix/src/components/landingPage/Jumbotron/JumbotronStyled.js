import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  border-bottom: 0.4rem solid #222;
  padding: 3.125rem 5%;
  color: white;
  overflow: hidden;

`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width:1000px) {
    width: 100%;
    padding: 0 2rem;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 1rem;
  
  @media (max-width: 600px) {
    font-size: 2.188rem;
  }

  @media (max-width: 324px) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.625rem;
  line-height: normal;
  font-weight: normal;

  @media (max-width:600px) {
    font-size: 1.1rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const Video = styled.video`
  @media (min-width: 780px) and (max-width: 1000px) {
      width: 70%;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);

      &.last-video{
      width: 50%;
      top: 35%;
    }
  };
    
`;
