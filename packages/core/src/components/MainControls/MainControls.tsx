// UI
import { SegmentedControl, Title } from "polar_ui";

// Style
import { Container } from "./style/MainControls";

const MainControls = () => {
  return (
    <Container>
      <div>
        <Title order="h3" fontWeight={'semiBold'}>Main Controls</Title>
        {/* <SegmentedControl data={[{label: 'Dark', value: 'dark'}, {label: 'Light', value: 'light'}]}/> */}
      </div>
    </Container>
  )
}

export default MainControls;