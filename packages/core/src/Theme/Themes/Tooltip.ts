import theme from "styled-theming";

export const bodyTooltipLight = '#1f1f1f';

export const bodyTooltipDark = '#ffffff';

export const bodyTooltip = theme('mode', {
    light: bodyTooltipLight,
    dark: bodyTooltipDark,
});

export const textTooltip = theme('mode', {
    dark: '#000000',
    light: '#ffffff',
});