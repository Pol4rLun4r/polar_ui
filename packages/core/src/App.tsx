import { ThemeProvider, Title, Text } from "polar_ui"

function App() {

  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <Title order="h2" textTransform="capitalize">hello world</Title>
      <Text variant="whiteText">cock world</Text>
    </ThemeProvider>
  )
}

export default App;
