import { css } from "styled-components";

// color
import { cardBorder } from "../../../Theme/Themes/Card";

export const WithBorder = () => {
    return css`
        border: solid 1px ${cardBorder};
    `;
};
