import { css } from "styled-components";

// type
import type { SegmentProps } from "../props";

// sizes
import { $PaddingHorizontal, $PaddingVertical } from "../../../../@Sizes/Inputs/SegmentControl";
import { $FontSize } from "../../../../@Sizes/Typography";

export const LabelSize = () => {
    return css`
        font-size: ${({ size }: Omit<SegmentProps, 'data'>) => size === 'xs' ? $FontSize.xs :
        size === 'sm' ? $FontSize.sm :
            size === 'md' ? $FontSize.md :
                size === 'lg' ? $FontSize.lg :
                    size === 'xl' ? $FontSize.xl : $FontSize.md};
    `
}

export const LabelContainerSize = () => {
    return css`
        // paddings left and right
        padding-left: ${({ size }: Omit<SegmentProps, 'data'>) => size === 'xs' ? $PaddingHorizontal.xs :
            size === 'sm' ? $PaddingHorizontal.sm :
                size === 'md' ? $PaddingHorizontal.md :
                    size === 'lg' ? $PaddingHorizontal.lg :
                        size === 'xl' ? $PaddingHorizontal.xl : $PaddingHorizontal.md};

        padding-right: ${({ size }: Omit<SegmentProps, 'data'>) => size === 'xs' ? $PaddingHorizontal.xs :
            size === 'sm' ? $PaddingHorizontal.sm :
                size === 'md' ? $PaddingHorizontal.md :
                    size === 'lg' ? $PaddingHorizontal.lg :
                        size === 'xl' ? $PaddingHorizontal.xl : $PaddingHorizontal.md};

        // paddings top and bottom
        padding-top: ${({ size }: Omit<SegmentProps, 'data'>) => size === 'xs' ? $PaddingVertical.xs :
            size === 'sm' ? $PaddingVertical.sm :
                size === 'md' ? $PaddingVertical.md :
                    size === 'lg' ? $PaddingVertical.lg :
                        size === 'xl' ? $PaddingVertical.xl : $PaddingVertical.md};

        padding-bottom: ${({ size }: Omit<SegmentProps, 'data'>) => size === 'xs' ? $PaddingVertical.xs :
            size === 'sm' ? $PaddingVertical.sm :
                size === 'md' ? $PaddingVertical.md :
                    size === 'lg' ? $PaddingVertical.lg :
                        size === 'xl' ? $PaddingVertical.xl : $PaddingVertical.md};
    `
}
