import { css } from "styled-components";

// sizes
import { $Paddings } from "../../../../../@Sizes/Buttons";
import { $Radius } from "../../../../../@Sizes/Radius";
import { $FontSize } from "../../../../../@Sizes/Typography";

// colors
import { fontMenuItems, hoverMenuItems } from "../../../../../Theme/Themes/Overlays/Menu";

export const Size = () => {
    return css`
        font-size: ${$FontSize.sm};
        border-radius: ${$Radius.sm};
        padding: calc(${$Paddings.xs} / 2);
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
