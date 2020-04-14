import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background: #27729c;
 }
`;

export const Logo = styled.div`
   text-align: center;
   margin-bottom: 10px;
`;


export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 5%;
`;

export const Panel = styled.div`
    padding: 40px 40px;
    background: #fff;
    border-radius: 50px 0px 0px 50px;
    box-shadow: 0px 26px 51px 2px rgba(0, 0, 0, 0.41);
    min-width: 300px;

    @media (max-width: 375px) {
        min-width: 200px;
    }
`;


export const Input = styled.input`
    width: 100%;
    margin: 5px 0px 10px 0px;
    height: 25px;
    text-align: center;
`;

export const Button = styled.button`
    width: 100%;
    height: 38px;
    font-weight: bold;
    background: #1e7e34;
    border: 1px solid #1c7430;
    color: #fff;
    cursor: pointer;
`;

export const DivGeral = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 0px 0px;
`;

export const Link = styled.a`
    color: #171719;
    font-weight: bold;
    cursor: pointer;
`;

export const Div = styled.div`
`;

export const Err = styled.span`
    color: red;
    font-weight: bold;
    font-size: 10px;
    text-align:center;
    width: 100%;
`;