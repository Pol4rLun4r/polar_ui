import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';

// Ui
import { GlobalStyle, Title, ThemeProvider, Text, Stack, Box } from "../dist"

const App = () => {
  return (
    <ThemeProvider theme={{ mode: 'dark', colorPalette: 'magenta' }}>
      <GlobalStyle />
      <Stack justify="center" align="center" height={"100%"}>
        <Box radius='lg' direction='column'>
          <Title as={"h2"} textTransform="capitalize" fontWeight={"bold"} fontSize="3rem">hello</Title>
          <Text>lorem</Text>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));