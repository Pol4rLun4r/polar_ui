import 'styled-components';

type mode = 'dark' | 'light';

type colorSchema = any;

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: mode,
    colorSchema?: colorSchema
  }
}