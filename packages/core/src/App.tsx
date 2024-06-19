// UI
import { Anchor, Text, Box, NavLink } from "polar_ui";

function App() {

  return (
    <Box width={"40%"}>
      <NavLink label="Random"/>
      <NavLink label="Container">
        <NavLink label="Content"/>
      </NavLink>
      <Text variant="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ex debitis eveniet! Similique cum <Anchor href="#">blanditiis</Anchor> alias culpa totam recusandae vitae numquam ducimus laudantium accusamus, illo inventore eveniet nostrum dolorem porro.</Text>
    </Box>
  )
}

export default App;