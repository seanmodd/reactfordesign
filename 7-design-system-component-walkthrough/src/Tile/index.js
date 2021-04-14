import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: menlo, sans-serif;
    background-color: black;
    color: white;
  }
`

export * from './Button';
export * from './Input';
export * from './Modal';
export * from './Tooltip';
export * from './Alert';
export * from './Table';
export * from './Utils';
