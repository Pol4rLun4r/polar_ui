import { Text, Title, Stack, Badge, Card, ColorSwatch, Image, Group, } from "./core-components"

function App() {
  const source = "https://images.theconversation.com/files/340360/original/file-20200608-176546-v54a8a.jpg?ixlib=rb-4.1.0&rect=0%2C393%2C2650%2C1322&q=45&auto=format&w=1356&h=668&fit=crop"

  return (
    <Stack justify="center" align="center" height={"100%"}>
      <Card radius="md">
        <Card.Section>
          <Image src={source} />
        </Card.Section>
        <Title as={"h2"} textTransform="capitalize" fontWeight={"bold"} fontSize="2rem">
          Polar Bear
        </Title>
        <Group justify="space-between">
          <Text>lore</Text>
          <Badge variant="dot">live</Badge>
        </Group>
        <ColorSwatch swatch="indigo" circle/>
      </Card>
    </Stack>
  )
}

export default App
