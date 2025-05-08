import './index.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'

// Render the app
const rootElement = document.querySelector('#root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
