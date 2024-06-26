import theme from "styled-theming";

// type
import type { ThemeValues } from "../../../hook/ThemeHook";

export const checkboxBackground = theme('mode', {
    light: '#ffffff',
    dark: '#2e2e2e',
});

export const checkboxBorder = theme('mode', {
    light: '#ced4da',
    dark: '#424242'
})

export const checkboxIcon = theme('mode', {
    light: '#ffffff',
    dark: '#ffffff'
})

export const checkboxCheckedBackgroundDefault: ThemeValues = { dark: 6, light: 6};

export const checkboxCheckedBorderDefault: ThemeValues = { dark: 6, light: 6};

export const checkboxCheckedBackgroundOutline = "transparent"

export const checkboxCheckedBorderOutline: ThemeValues = { dark: 6, light: 6};

