import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'

// State Manager
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  </React.StrictMode>,
)
