import { Text, Title, Stack, Tooltip, Menu } from "./core-components"

function App() {
  return (
    <Stack justify="center" align="center" height={"100%"}>
      <Tooltip label={"hello"}>
        <Title as={"h2"} textTransform="capitalize" fontWeight={"bold"} fontSize="3rem">hello</Title>
      </Tooltip>
      <Menu activeMenu={
        <Text>lorem</Text>
      }>
        <Menu.label>hellos</Menu.label>
        <Menu.item>hello</Menu.item>
        <Menu.item>hello 2</Menu.item>
        <Menu.item>hello 3</Menu.item>
        <Menu.item>hello 4</Menu.item>
        <Menu.item>hello 5</Menu.item>
        <Menu.item>hello 6</Menu.item>
      </Menu>
    </Stack>
  )
}

export default App
