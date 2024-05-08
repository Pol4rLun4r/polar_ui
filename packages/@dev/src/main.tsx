import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

// test UI
import { GlobalStyle, ThemeProvider } from './core-components.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={{ mode: 'dark', colorPalette: 'magenta' }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
