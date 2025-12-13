import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Montserrat", sans-serif;
    background-color: ${({ theme }) => theme.color.background}; 
    color: ${({ theme }) => theme.color.textPrimary || "#333"}; 
    word-break: break-word;
    margin: 0;
    line-height: 1.5;
  }
`;
