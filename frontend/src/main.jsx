import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>,
    </BrowserRouter>
  </GoogleOAuthProvider>
)
