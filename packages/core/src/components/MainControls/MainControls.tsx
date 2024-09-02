// UI
import { SegmentedControl, Title } from "polar_ui";

// Style
import { Container } from "./style/MainControls";

// State Manage
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { colorMode } from "./atom";

const MainControls = () => {
  const setColorMode = useSetRecoilState(colorMode) as SetterOrUpdater<string>

  return (
    <Container>
      <div>
        <Title order="h3" fontWeight={'semiBold'}>Main Controls</Title>
        <SegmentedControl data={[{ label: 'Dark', value: 'dark' }, { label: 'Light', value: 'light' }]} onChange={setColorMode} />
      </div>
    </Container>
  )
}

export default MainControls;