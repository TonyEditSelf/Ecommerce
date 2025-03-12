import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextFile from './context/ContextFile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextFile>
      <App />
    </ContextFile>

  </StrictMode>,
)
