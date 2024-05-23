import type { ReactNode } from "react";

type mode = 'dark' | 'light';

type colorPalette = string;

type ThemeProps = {
    mode: mode,
    colorPalette?: colorPalette
  }

export interface ProviderProps {
    children: ReactNode;
    theme: ThemeProps
}