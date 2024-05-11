import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';

// Ui
import { GlobalStyle, Title, ThemeProvider, Text, Stack, Card, Image, Group, ColorSwatch, Badge } from "../dist"

const App = () => {
  const source = "https://images.theconversation.com/files/340360/original/file-20200608-176546-v54a8a.jpg?ixlib=rb-4.1.0&rect=0%2C393%2C2650%2C1322&q=45&auto=format&w=1356&h=668&fit=crop"

  return (
    <ThemeProvider theme={{ mode: 'dark', colorPalette: 'magenta' }}>
      <GlobalStyle />
      <Stack justify="center" align="center" height={"100%"}>
        <Card radius="md">
          <Image src={source} />
          <Title as={"h2"} textTransform="capitalize" fontWeight={"bold"} fontSize="2rem">
            Polar Bear
          </Title>
          <Group justify="space-between">
            <Text>lore</Text>
            <Badge variant="dot">live</Badge>
          </Group>
          <ColorSwatch swatch="indigo" circle />
        </Card>
      </Stack>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));