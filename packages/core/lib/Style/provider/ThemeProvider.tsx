// type
import type { ProviderProps } from "./props"

// Theme and Style
import { ThemeProvider as Provider } from "styled-components"
import GlobalStyle from "../Global.style"

const ThemeProvider = ({ children, theme, bodyColor }: ProviderProps) => {
    return (
        <Provider theme={{mode: theme.mode, colorPalette: theme.colorPalette ? theme.colorPalette : 'violet'}}>
            <GlobalStyle bodyColor={bodyColor} />
            {children}
        </Provider>
    )
}

export default ThemeProvider