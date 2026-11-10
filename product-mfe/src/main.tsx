import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './standalone.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <header className="standalone-header">
          <strong>product-mfe standalone :30722</strong>
        </header>
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
