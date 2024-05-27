import { css } from "styled-components";

// color
import { cardBorder } from "../../../../Theme/Themes/DataDisplay/Card";

export const BorderChild = () => {
    return css`
    border-bottom: solid 1px ${cardBorder};
    border-top: solid 1px ${cardBorder};
`;
}

export const BorderFirstChild = () => {
    return css`
        border-bottom: solid 1px ${cardBorder};
    `;
};

export const BorderLastChild = () => {
    return css`
        border-top: solid 1px ${cardBorder};
    `;
};
