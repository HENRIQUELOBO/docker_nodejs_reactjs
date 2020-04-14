import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background: #27729c;
 }
`;

export const Logo = styled.div`
   background: #fff;
   width: 100%;
   display: flex;
   justify-content: center;
`;


export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 5%;
`;


export const Link = styled.a`
   position: absolute;
    margin-top: 129px;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
`;
