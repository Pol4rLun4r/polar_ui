import theme from "styled-theming"

// layout
export const bodyColorPrimary = theme('mode', {
    light: '#ffffff',
    dark: '#242424',
});

export const bodyColorPrimarySection = theme('mode', {
    light: '#f8f9fa',
    dark: '#242424',
});

export const bodyColorSecondary = theme('mode', {
    light: '#ffffff',
    dark: '#1f1f1f',
});

export const bodyColorSecondarySection = theme('mode', {
    light: '#f8f9fa',
    dark: '#1f1f1f',
});

export const borderColor = theme('mode', {
    light: '#e9ecef',
    dark: '#2e2e2e',
})

export const borderColorSecondary = theme('mode', {
    light: '#e9ecef',
    dark: '#1f1f1f'
})

// buttons
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

// card

export const cardBodyPrimary = theme('mode', {
    light: '#ffffff',
    dark: '	#2e2e2e'
})

export const cardBorder = theme('mode', {
    light: '#ced4da',
    dark: '#424242'
})

// export const cardBodySecondary = theme('mode', {
//     light: '#ffffff',
//     dark: '	##2e2e2e'
// })