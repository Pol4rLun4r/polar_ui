import App from "./App.tsx";

// Components
import TaskList from "./components/TaskList";
import MainControls from './components/MainControls/MainControls.tsx';

// UI
import { ThemeProvider, Stack, Title, Box } from "polar_ui"

// State Manage
import { useRecoilValue } from "recoil";
import { colorMode } from "./components/MainControls/atom.ts";

const Root = () => {
    const getColorMode = useRecoilValue(colorMode);

    return (
        <ThemeProvider theme={{ mode: getColorMode }} bodyColor='secondary'>
            <Stack height="100%">
                <Title fontWeight={'bold'} textTransform='capitalize'>testing area</Title>
                <Box height={"60%"} width={"60%"} radius='md' padding='0rem' gap='0rem' align='stretch' justify='normal'>
                    <App />
                    <MainControls />
                </Box>
                <TaskList />
            </Stack>
        </ThemeProvider>
    )
}

export default Root