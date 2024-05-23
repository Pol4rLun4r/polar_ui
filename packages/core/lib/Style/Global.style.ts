import { createGlobalStyle } from "styled-components";

// colors
import { bodyColorPrimary } from "../Theme/Theme";

const GlobalStyle = createGlobalStyle`
    :root {
        color-scheme: ${props => props.theme?.mode === "dark" ? 'dark' : 'light'};
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        a {
            text-decoration: none;
        }
    }

    body{
        width: 100%;
        height: 100%;
        background-color: ${bodyColorPrimary};
    }

    #root{
        width: 100%;
        height: 100vh;
    }
`

export default GlobalStyle;