import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { LoaderProvider } from './context/LoaderContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderProvider>
    <AuthProvider>
    <App />
    <ToastContainer position="top-right" autoClose={3000} />
    </AuthProvider>
    </LoaderProvider>
  </StrictMode>,
)
