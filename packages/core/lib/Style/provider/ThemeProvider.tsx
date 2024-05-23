// type
import type { ProviderProps } from "./props"

// Theme and Style
import { ThemeProvider as Provider } from "styled-components"
import GlobalStyle from "../Global.style"

const ThemeProvider = ({ children, theme }: ProviderProps) => {
    return (
        <Provider theme={{mode: theme.mode, colorPalette: theme.colorPalette ? theme.colorPalette : 'violet'}}>
            <GlobalStyle/>
            {children}
        </Provider>
    )
}

export default ThemeProvider