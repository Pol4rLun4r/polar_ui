// UI
import { Text, Card, Badge, Group, Image, Stack } from "polar_ui"

function App() {

  return (
    <Stack justify="center" align="center" width="100%" height="100%">
      <Card maxWidth={"21.563rem"} radius="lg" withBorder>
        <Card.Section>
          <Image src="https://www.renderhub.com/clickdamn/ice-bear-polar-bear/ice-bear-polar-bear-01.jpg" />
        </Card.Section>
        <Group justify="space-between">
          <Text textTransform="capitalize" fontWeight="bold">polar bear</Text>
          <Badge variant="filled" radius="lg">live</Badge>
        </Group>
        <Text variant="description" fontSize="sm">
          Polar bears are stocky, with a long neck, relatively small head, short, rounded ears, and a short tail. The male, which is much larger than the female, weighs 410 to 720 kg.
        </Text>
        <button>isso funciona?</button>
      </Card>
    </Stack>
  )
}

export default App;
