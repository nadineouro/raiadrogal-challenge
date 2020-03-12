import { createGlobalStyle } from 'styled-components';
import { mediumScreen, smallScreen } from '../styles/shared/breakpoints'

export default createGlobalStyle`
  * {
    margin: 0 auto;
    box-sizing: border-box;
  }
  
  body {
    background: ${props => props.theme.background};
    max-width: 1200px;
    min-width: 400px;
    color: ${props => props.theme.text};
    font-family: "Open Sans", Helvetica, sans-serif, arial;
    font-weight: 300;
    font-size: 18px;
    ${smallScreen} { font-size: 14px; }
    ${mediumScreen} { font-size: 16px; }
  }
  strong {
    font-weight: 1000;
  }
`;