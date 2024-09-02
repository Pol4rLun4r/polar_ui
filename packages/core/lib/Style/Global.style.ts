import { createGlobalStyle } from "styled-components";

// colors
import { bodyColorPrimary, bodyColorSecondary } from "../Theme/Theme";

// style
import { ArrowTooltip } from "../components/@Overlays/Tooltip/style/Tooltip";

export type BodyColors = 'primary' | 'secondary';

interface GlobalStyleProps {
    bodyColor?: BodyColors;
}

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
    
    html {
        .sb-main-padded {
            width: 100%;
            height: 100vh;

            #storybook-root {
                width: 100%;
                height: 100%;

            }
        }
    } 

    body{
        width: 100%;
        height: 100%;
        background-color: ${({ bodyColor }: GlobalStyleProps) => bodyColor === 'secondary' ? bodyColorSecondary : bodyColorPrimary};
    }

    #root{
        width: 100%;
        height: 100vh;
    }
    
    ${ArrowTooltip()}
    `

export default GlobalStyle;