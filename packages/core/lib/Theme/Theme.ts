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
