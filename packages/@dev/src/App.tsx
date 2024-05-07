import { GlobalStyle, Text, ThemeProvider, Title } from "./core-components"

function App() {

  return (
    <ThemeProvider theme={{ mode: 'dark', colorPalette: 'magenta' }}>
      <GlobalStyle />
      <Title as={"h2"} fontSize="3rem">hello</Title>
      <Text>lorem</Text>
    </ThemeProvider>
  )
}

export default App
