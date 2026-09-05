import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ApiProvider } from './api/ApiProvider.jsx'
import { ToastProvider } from './context/ToastContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ApiProvider>
    </BrowserRouter>
  </StrictMode>,
)
