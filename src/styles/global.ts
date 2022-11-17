import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  //nova paleta de coreas
  --bg: rgba(0,0,0,0.04);
  --bgCard: #fff;
  --P1A: #121212;
  --P1B: #E0E0E0;

  --boxShadow: 0px 0px 5px -1px rgba(0,0,0,0.3);

  --radius1: 12px;
  --radius2: 24px
  
  --warning: #FAAE42;
  --accept: #06D6A0;
  --offline: #E62965;

  
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  // font-size: 16px (desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  // REM = 1rem = 16px
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

`;