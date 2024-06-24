import { css } from "styled-components";

// types
import type { MenuProps} from "../props";

// colors
import { bodyMenu, borderMenu } from "../../../../Theme/Themes/Overlays/Menu";

// sizes
import { $Radius } from "../../../../@Sizes/Radius";

const DefaultVariant = () => {
    return css`
    border: solid 1px ${borderMenu};
    background-color: ${bodyMenu};

    display: flex;
    flex-direction: column;

    width: ${({width}: Omit<MenuProps, "menuLauncher">) => width ? width : '10.813rem'};

    border-radius: ${$Radius.sm};

    padding: 0.25rem;

    gap: 0;

    `;
};

const customVariant = () => {
    return css``;
};

const Variants = () => {
    return css`
    ${({ variant }: Omit<MenuProps, "menuLauncher">) =>
            variant === 'default' ? DefaultVariant() :
                variant === 'custom' ? customVariant() : DefaultVariant()}
`;
}

export default Variants;