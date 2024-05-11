import { css } from "styled-components";

// type
import type { PolarStyleProps } from "../../@Types/style-props";

// size
import { $Radius } from "../../@Sizes/Radius";

const DirectionColumn = () => {
    return css`
        &:first-child {
        border-top-left-radius: ${({ radius }: PolarStyleProps) => radius === 'xs' ? $Radius.xs :
            radius === 'sm' ? $Radius.sm :
                radius === 'md' ? $Radius.md :
                    radius === 'lg' ? $Radius.lg :
                        radius === 'xl' ? $Radius.xl : $Radius.sm};

        border-top-right-radius: ${({ radius }: PolarStyleProps) => radius === 'xs' ? $Radius.xs :
            radius === 'sm' ? $Radius.sm :
                radius === 'md' ? $Radius.md :
                    radius === 'lg' ? $Radius.lg :
                        radius === 'xl' ? $Radius.xl : $Radius.sm};
        }

        &:last-child {
        border-bottom-left-radius: ${({ radius }: PolarStyleProps) => radius === 'xs' ? $Radius.xs :
            radius === 'sm' ? $Radius.sm :
                radius === 'md' ? $Radius.md :
                    radius === 'lg' ? $Radius.lg :
                        radius === 'xl' ? $Radius.xl : $Radius.sm};

        border-bottom-right-radius: ${({ radius }: PolarStyleProps) => radius === 'xs' ? $Radius.xs :
            radius === 'sm' ? $Radius.sm :
                radius === 'md' ? $Radius.md :
                    radius === 'lg' ? $Radius.lg :
                        radius === 'xl' ? $Radius.xl : $Radius.sm}; 
        }

    `
}

const DirectionRow = () => {
    return css`
        &:first-child {
        border-top-left-radius: ${({ radius }: PolarStyleProps) => radius === 'xs' ? $Radius.xs :
            radius === 'sm' ? $Radius.sm :
                radius === 'md' ? $Radius.md :
                    radius === 'lg' ? $Radius.lg :
                        radius === 'xl' ? $Radius.xl : $Radius.sm};

        border-bottom-left-radius: ${({ radius }: PolarStyleProps) => radius === 'xs' ? $Radius.xs :
            radius === 'sm' ? $Radius.sm :
                radius === 'md' ? $Radius.md :
                    radius === 'lg' ? $Radius.lg :
                        radius === 'xl' ? $Radius.xl : $Radius.sm};
        }
        
        &:last-child {
        border-top-right-radius: ${({ radius }: PolarStyleProps) => radius === 'xs' ? $Radius.xs :
            radius === 'sm' ? $Radius.sm :
                radius === 'md' ? $Radius.md :
                    radius === 'lg' ? $Radius.lg :
                        radius === 'xl' ? $Radius.xl : $Radius.sm};

        border-bottom-right-radius: ${({ radius }: PolarStyleProps) => radius === 'xs' ? $Radius.xs :
            radius === 'sm' ? $Radius.sm :
                radius === 'md' ? $Radius.md :
                    radius === 'lg' ? $Radius.lg :
                        radius === 'xl' ? $Radius.xl : $Radius.sm};
        }
    `
}

export const BorderRadiusGroup = () => {
    return css`
        ${({ direction }: PolarStyleProps) => direction === 'row' ? DirectionRow() : DirectionColumn()}
    `;
};