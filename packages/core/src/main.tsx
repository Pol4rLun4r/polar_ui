import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// UI
import { ThemeProvider } from "polar_ui"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={{ mode: 'dark' }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
