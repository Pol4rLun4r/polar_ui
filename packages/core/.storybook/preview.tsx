import React from "react";

import type { Preview } from "@storybook/react";

// themes
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../lib/Style/Global.style'
import { colorNames } from "../lib/Theme/ColorPalette";

// UI
import { Box, Stack } from "../lib/main"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      }
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'dark', title: 'Dark', right: '🌛' },
          { value: 'light', title: 'Light', right: '☀️' },
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
      <ThemeProvider theme={{ mode: context.globals.theme ? context.globals.theme : 'dark', colorPalette: context.globals.palette }}>
        <GlobalStyle/>
        <Stack align="center" justify="center" height="100%">
          <Box width="70%" height="70%" radius="lg">
            <Story />
          </Box>
        </Stack>
      </ThemeProvider>
    );
  }]
};

export default preview;
