import { createGlobalStyle } from 'styled-components';
import constants from './utilities/Constants';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    }
    * {
    margin: 0;
    }

    body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
    }
    p{
        color: ${constants.colors.darkGrey};
    }
`;