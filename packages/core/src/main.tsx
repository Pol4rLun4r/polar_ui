import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Components
import TaskList from "./components/TaskList";
import MainControls from './components/MainControls/MainControls.tsx';

// UI
import { ThemeProvider, Stack, Title, Box } from "polar_ui"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={{ mode: 'light' }}>
      <Stack height="100%" position='relative'>
        <Title fontWeight={'bold'} textTransform='capitalize'>testing area</Title>
        <Box height={"60%"} width={"60%"} radius='md' padding='0rem' gap='0rem' align='stretch' justify='normal'>
          <App />
          <MainControls/>
        </Box>
        <TaskList/>
      </Stack>
    </ThemeProvider>
  </React.StrictMode>,
)
