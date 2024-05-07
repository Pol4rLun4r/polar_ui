import 'styled-components';

type mode = 'dark' | 'light';

type colorPalette = unknown;

declare namespace ThemeProvider {
  export interface ThemeProviderComponent {
    mode: mode,
    colorPalette?: colorPalette
  }
}