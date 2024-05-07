import 'styled-components';

type mode = 'dark' | 'light';

type colorPalette = string;

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: mode,
    colorPalette?: colorPalette
  }
}