import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #f2f2f2;
    }
    html{
        scroll-behavior: smooth;
    }
`;