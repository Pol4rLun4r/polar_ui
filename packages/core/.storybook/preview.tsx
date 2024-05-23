import React from "react";

import type { Preview } from "@storybook/react";

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../lib/Style/Global.style'

// themes
import { colorNames } from "../lib/Theme/ColorPalette";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          {value: 'dark', title: 'Dark', right: '🌛'},
          {value: 'light', title: 'Light', right: '☀️'},
        ],
        dynamicTitle: true,
      }
    },
    palette: {
      description: 'Global color palette for components',
      defaultValue: 'magenta',
      toolbar: {
        title: 'Color Palette',
        icon: 'contrast',
        items: colorNames,
        dynamicTitle: true,
      }
    }
  },
  decorators: [(Story, context) => {
    return (
      <ThemeProvider theme={{ mode: context.globals.theme, colorPalette: context.globals.palette }}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  }]
};

export default preview;
