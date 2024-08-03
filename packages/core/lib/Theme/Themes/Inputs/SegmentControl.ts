import theme from "styled-theming";

export const segmentBackgroundColor = theme('mode', {
    light: '#f1f3f5',
    dark: '#1f1f1f',
});

export const segmentBorderColor = theme('mode', {
    light: '#dee2e6',
    dark: '#424242'
})


export const SegmentIndicatorColor = theme('mode', {
    dark: '#3b3b3b',
    light: '#fff'
})

export const SegmentLabel = theme('mode', {
    dark: '#b8b8b8',
    light: '#495057'
})

export const SegmentLabelActive = theme('mode', {
    dark: '#ffffff',
    light: '#000'
})

export const SegmentLabelDisable = theme('mode', {
    dark: '#696969',
    light: '#adb5bd'
})