import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border: 5px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 10px;
    background-color: ${(p) => p.theme.palette.scrollbarBackgroundColor};
  }

  html,
  body,
  #root {
    height: 100%;
    user-select: none;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    background-color: ${(p) => p.theme.palette.base};
  }
  
  .margin-center {
    margin-right: auto;
    margin-left: auto;
  }

  .object-cover {
    object-fit: cover;
  }

  .disabled {
    pointer-events: none;
    touch-action: none;
    opacity: 0.5;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .space-pre-line {
    white-space: pre-line;
  }
  
  .width-130 {
    min-width: 130px;
  }

  .width-140 {
    min-width: 140px;
  }

  .width-146 {
    min-width: 146px;
  }

  .width-220 {
    min-width: 220px;
  }

  .width-226 {
    min-width: 226px;
  }

  .width-280 {
    min-width: 280px;
  }

  .width-390 {
    min-width: 390px;
  }
`;

export default GlobalStyles;
