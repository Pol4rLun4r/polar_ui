import { css } from "styled-components";

// type
import type { PolarStyleProps } from "../../@Types/style-props";

// size
import { $Spacing } from "../../@Sizes/Spacings";

export const Padding = () => {
    return css`
    padding-top: ${({ paddingTop }: PolarStyleProps) => paddingTop === 'xs' ? $Spacing.xs :
            paddingTop === 'sm' ? $Spacing.sm :
                paddingTop === 'md' ? $Spacing.md :
                    paddingTop === 'lg' ? $Spacing.lg :
                        paddingTop === 'xl' ? $Spacing.xl : paddingTop};

    padding-bottom: ${({ paddingBottom }: PolarStyleProps) => paddingBottom === 'xs' ? $Spacing.xs :
            paddingBottom === 'sm' ? $Spacing.sm :
                paddingBottom === 'md' ? $Spacing.md :
                    paddingBottom === 'lg' ? $Spacing.lg :
                        paddingBottom === 'xl' ? $Spacing.xl : paddingBottom};

    padding-left: ${({ paddingLeft }: PolarStyleProps) => paddingLeft === 'xs' ? $Spacing.xs :
            paddingLeft === 'sm' ? $Spacing.sm :
                paddingLeft === 'md' ? $Spacing.md :
                    paddingLeft === 'lg' ? $Spacing.lg :
                        paddingLeft === 'xl' ? $Spacing.xl : paddingLeft};

    padding-right: ${({ paddingRight }: PolarStyleProps) => paddingRight === 'xs' ? $Spacing.xs :
            paddingRight === 'sm' ? $Spacing.sm :
                paddingRight === 'md' ? $Spacing.md :
                    paddingRight === 'lg' ? $Spacing.lg :
                        paddingRight === 'xl' ? $Spacing.xl : paddingRight};        

    padding: ${({ padding }: PolarStyleProps) => padding === 'xs' ? $Spacing.xs :
            padding === 'sm' ? $Spacing.sm :
                padding === 'md' ? $Spacing.md :
                    padding === 'lg' ? $Spacing.lg :
                        padding === 'xl' ? $Spacing.xl : padding};
    `;
};
