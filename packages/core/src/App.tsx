import { useState } from "react";

// UI
import { Flex, SegmentedControl, Text } from "polar_ui";

function App() {

  const [value, setValue] = useState('react');

  return (
    <Flex direction="column" width={"80%"} height={"100%"}>
      <SegmentedControl
        data={[{ label: 'React', value: 'react'}, 'cookie', 'label']}
        onChange={setValue}
        radius="xl"
        size="lg"
      />
      <Text>{value}</Text>
    </Flex>
  )
}

export default App;