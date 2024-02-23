import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AppWrapper } from './components/providers/index.tsx'
import './index.css'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>,
)
