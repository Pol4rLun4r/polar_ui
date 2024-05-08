import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Ui
import { GlobalStyle, Title, ThemeProvider, Text } from "../dist"

const App = () => {
  return (
    <ThemeProvider theme={{ mode: 'dark', colorPalette: 'magenta' }}>
      <GlobalStyle />
      <Title>Polar UI</Title>
      <Text>lorem lorem</Text>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));