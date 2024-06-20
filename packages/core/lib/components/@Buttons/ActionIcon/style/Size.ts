import { css } from "styled-components";

// size
import { $FontSize } from "../../../../@Sizes/Typography";
import { $IconSize } from "../../../../@Sizes/Buttons";

// type
import type { ActionIconProps } from "../props";

const Size = () => {
    return css`
    font-size: ${({ size }: ActionIconProps) => size === 'xs' ? $FontSize.xs :
            size === 'sm' ? $FontSize.sm :
                size === 'md' ? $FontSize.md :
                    size === 'lg' ? $FontSize.lg :
                        size === 'xl' ? $FontSize.xl :
                            typeof size === "string" ? size : $FontSize.md};

    height: ${({ size }: ActionIconProps) => size === 'xs' ? $IconSize.xs :
            size === 'sm' ? $IconSize.sm :
                size === 'md' ? $IconSize.md :
                    size === 'lg' ? $IconSize.lg :
                        size === 'xl' ? $IconSize.xl :
                            typeof size === "string" ? size : $IconSize.md};

    width: ${({ size }: ActionIconProps) => size === 'xs' ? $IconSize.xs :
            size === 'sm' ? $IconSize.sm :
                size === 'md' ? $IconSize.md :
                    size === 'lg' ? $IconSize.lg :
                        size === 'xl' ? $IconSize.xl :
                            typeof size === "string" ? size : $IconSize.md};

    min-width: ${({ size }: ActionIconProps) => size === 'xs' ? $IconSize.xs :
            size === 'sm' ? $IconSize.sm :
                size === 'md' ? $IconSize.md :
                    size === 'lg' ? $IconSize.lg :
                        size === 'xl' ? $IconSize.xl :
                            typeof size === "string" ? size : $IconSize.md};
    `;

};

export default Size;