import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* CSS Variables */
  :root {
    
  }
  /* Universal selector */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* Style HTML */
  html {
    scroll-behavior: smooth;
  }
  /* Style Body */
  body {
      font-family: 'Inter', sans-serif;
      background-color: #fff;
      color: #18191F;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      overflow-x: hidden;
  }
  /* Style Scrollbar and Selection */
  ::-webkit-scrollbar {
    width: 7.5px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(58, 58, 58, 0.2);
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: rgba(58, 58, 58, 0.4);
  }
  ::-webkit-scrollbar-thumb:hover{
  	background: rgba(58, 58, 58, 0.5);
  }
  ::-webkit-scrollbar-thumb:active{
  	background: rgba(58, 58, 58, 0.6);
  }
  
  *::selection {
    background: #1B5BF7;
    color: #fff;
    text-shadow: none;
  }

  img, svg {
    user-select: none;
  }
`;
