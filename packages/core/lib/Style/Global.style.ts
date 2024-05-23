import { createGlobalStyle } from "styled-components";

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
    }

    #root{
        width: 100%;
        height: 100vh;
    }
`

export default GlobalStyle;