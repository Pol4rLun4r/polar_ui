import theme from "styled-theming";

export const buttonBackground = theme('mode', {
    light: '#ffffff',
    dark: '#2e2e2e'
})

export const buttonBackgroundDisabled = theme('mode', {
    light: '#f1f3f5',
    dark: '#2e2e2e'
})

export const buttonColorDisabled = theme('mode', {
    light: '#adb5bd',
    dark: '#696969'
})

export const buttonBorder = theme('mode', {
    light: '#ced4da',
    dark: '#424242'
})

export const buttonActionIcon = theme('mode', {
    light: '#495057',
    dark: '#ffffff'
})