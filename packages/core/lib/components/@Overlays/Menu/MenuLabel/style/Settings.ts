import { css } from "styled-components";

// sizes
import { $Heights, $Paddings } from "../../../../../@Sizes/Buttons";
import { $FontSize } from "../../../../../@Sizes/Typography";

// colors
import { fontMenuLabel } from "../../../../../Theme/Themes/Overlays/Menu";

export const Size = () => {
    return css`
    font-size: ${$FontSize.xs};

    height: calc( ${$Heights.xs} / 1.2);

    padding: ${$Paddings.xs};
    `;
};

export const DefaultSetting = () => {
    return css`
    appearance: none;
    border-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: transparent;
    color: ${fontMenuLabel};
    `;
};

