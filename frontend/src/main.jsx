import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <StrictMode>
        <GoogleOAuthProvider clientId="457846212442-5k20v7spou6fu0e9psi6ks1g5vd7a5og.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </StrictMode>,
    </BrowserRouter>
)
