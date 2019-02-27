import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
   /* Make everything border-box for logical sizing */
   *, *::before, *::after { box-sizing: border-box; }
  :root { 
    font: 112.5% ${fonts.a.family}; 
    line-height: 1.5; 
    text-rendering: geometricPrecision; 
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
  body { color: #000; }

  /* Lock the body */
  body.is-locked {
    overflow: hidden;
  }

  /* Global link styles - remove the default blue hyperlinks */
  a { color: #000; }
  a:hover { color: #0ba; }

  /* Make margins explicit */
  h1, h2, h3, h4 {
    margin: 0;
  }
`;

export default GlobalStyles;
