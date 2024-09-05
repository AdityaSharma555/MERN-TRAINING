import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountProvider from './context/CountProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountProvider>
    < BrowserRouter >
    <App />
    </BrowserRouter>
    </CountProvider>
  </StrictMode>,
)
