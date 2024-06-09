import { css } from "styled-components";

// sizes
import { $Heights, $Paddings } from "../../../../../@Sizes/Buttons";
import { $Radius } from "../../../../../@Sizes/Radius";
import { $FontSize } from "../../../../../@Sizes/Typography";

// colors
import { fontMenuItems, hoverMenuItems } from "../../../../../Theme/Themes/Overlays/Menu";

export const Size = () => {
    return css`
        font-size: ${$FontSize.sm};
        height: ${$Heights.xs};
        border-radius: ${$Radius.sm};
        padding: ${$Paddings.xs};
    `;
};

export const DefaultSetting = () => {
    return css`
    appearance: none;
    border-style: none;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: transparent;
    color: ${fontMenuItems};

    &:hover{
        background-color: ${hoverMenuItems};
    }
    `;
};
