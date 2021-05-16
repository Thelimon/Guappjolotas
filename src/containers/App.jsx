import React from 'react'
import Menu from './Menu'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        background: #F2F2F2;
        font-family: 'Inter', sans-serif;
        text-align: center;
        box-sizing: border-box;
    }    
`;

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Menu />
        </div>
    )
}

export default App;
