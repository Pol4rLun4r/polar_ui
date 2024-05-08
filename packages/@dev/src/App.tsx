import { Text, Title, Stack } from "./core-components"

function App() {
  return (
    <Stack justify="center" align="center" height={"100%"}>
      <Title as={"h2"} textTransform="capitalize" fontWeight={"bold"} fontSize="3rem">hello</Title>
      <Text>lorem</Text>
    </Stack>
  )
}

export default App
