// UI
import { Title, Text, Box, Flex, Stack } from "polar_ui"

function App() {

  return (
    <Flex justify="center" align="center" width="100%" height="100%">
      <Box radius="lg">
        <Stack align="center">
          <Title order="h2" textTransform="capitalize" fontWeight={'black'}>hello world</Title>
          <Text variant="description" textTransform="capitalize">big world</Text>
        </Stack>
      </Box>
    </Flex>
  )
}

export default App;
