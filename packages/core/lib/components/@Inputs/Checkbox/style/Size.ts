import { css } from "styled-components";

// type
import type { CheckboxProps } from "../props";

// sizes
import { $Label, $Description, $ErrorFont, $CheckboxSize } from "../../../../@Sizes/inputs";

export const LabelSize = () => {
    return css`
    font-size: ${({ size }: Omit<CheckboxProps, "label">) => size === 'xs' ? $Label.xs :
            size === 'sm' ? $Label.sm :
                size === 'md' ? $Label.md :
                    size === 'lg' ? $Label.lg :
                        size === 'xl' ? $Label.xl : $Label.sm};
    `;
};

export const DescriptionSize = () => {
    return css`
    font-size: ${({ size }: Omit<CheckboxProps, "label">) => size === 'xs' ? $Description.xs :
            size === 'sm' ? $Description.sm :
                size === 'md' ? $Description.md :
                    size === 'lg' ? $Description.lg :
                        size === 'xl' ? $Description.xl : $Description.sm};
    `;
}

export const Size = () => {
    return css`
    width: ${({ size }: Omit<CheckboxProps, "label">) => size === 'xs' ? $CheckboxSize.xs :
            size === 'sm' ? $CheckboxSize.sm :
                size === 'md' ? $CheckboxSize.md :
                    size === 'lg' ? $CheckboxSize.lg :
                        size === 'xl' ? $CheckboxSize.xl : $CheckboxSize.sm};
                        
    height: ${({ size }: Omit<CheckboxProps, "label">) => size === 'xs' ? $CheckboxSize.xs :
            size === 'sm' ? $CheckboxSize.sm :
                size === 'md' ? $CheckboxSize.md :
                    size === 'lg' ? $CheckboxSize.lg :
                        size === 'xl' ? $CheckboxSize.xl : $CheckboxSize.sm};
    `;
};

export const ErrorSize = () => {
    return css`
    font-size: ${({ size }: Omit<CheckboxProps, "label">) => size === 'xs' ? $ErrorFont.xs :
            size === 'sm' ? $ErrorFont.sm :
                size === 'md' ? $ErrorFont.md :
                    size === 'lg' ? $ErrorFont.lg :
                        size === 'xl' ? $ErrorFont.xl : $Description.sm};
    `;
}