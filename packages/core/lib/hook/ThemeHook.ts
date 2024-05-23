/* eslint-disable @typescript-eslint/no-explicit-any */
// palette colors
import ColorPalette from "../Theme/ColorPalette"

type Props = {
    theme: {
        mode: string,
        colorPalette: string
    }
}

export type ThemeValues = {
    dark: number,
    light: number,
}

interface IThemeValue {
    props: Props,
    values: ThemeValues
    alpha?: string
}

const hexToRGB = (hex: string, alpha: string | undefined) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    return `rgb(${r}, ${g}, ${b})`;
}

const getThemeValue = ({ props, values, alpha }: IThemeValue) => {
    const mode = props.theme.mode
    const palette = props.theme.colorPalette

    const filteredPalette = ColorPalette.find((Palette) => (Palette.colorName === palette))
    const color = filteredPalette?.schema[mode === "dark" ? values.dark : values.light]

    return hexToRGB(color!, alpha);
}

const themeColorSchema = (values: ThemeValues, alpha?: string) => {
    return function (props: any) {
        return getThemeValue({ props, values, alpha });
    };
}

export default themeColorSchema;