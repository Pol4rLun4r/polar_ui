import styled from "styled-components";

// style
import { Style } from "polar_ui";

// color
import themeColorSchema from "../../../../hook/ThemeHook";

// types
import type { PolarStyleProps } from "../../../../@Types/style-props";

export const Indicator = styled.div<PolarStyleProps>`
    // default
    ${Style()}
    
    position: absolute;
    transition: all .3s;
    
    // settings
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : themeColorSchema({ dark: 6, light: 6 })};
`;  