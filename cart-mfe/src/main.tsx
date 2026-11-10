import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import './standalone.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <header className="standalone-header">
          <strong>cart-mfe standalone :30723</strong>
        </header>
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
