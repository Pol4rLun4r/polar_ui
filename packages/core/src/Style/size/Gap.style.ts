import { css } from "styled-components";

// type
import type { PolarStyleProps } from "../../@Types/style-props";

// size
import { $Gap } from "../../@Sizes/Gap";

export const Gap = () => {
    return css`
    gap: ${({ gap }: PolarStyleProps) => gap === 'xs' ? $Gap.xs :
            gap === 'sm' ? $Gap.sm :
                gap === 'md' ? $Gap.md :
                    gap === 'lg' ? $Gap.lg :
                        gap === 'xl' ? $Gap.xl :
                            gap ? gap : $Gap.md};
    `;
};