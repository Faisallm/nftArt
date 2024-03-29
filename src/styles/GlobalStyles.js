import { createGlobalStyle } from "styled-components";
import '@fontsource/akaya-telivigala';
import '@fontsource/sora';


// global styles that are applied everywhere.

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Sora', sans-serif;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: none;
}
`

// we can now import this css where ever we want.
export default GlobalStyles;