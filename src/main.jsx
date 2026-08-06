import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Vite rewrites import.meta.env.BASE_URL to whatever `base` is at build time.
// The router needs the same prefix or every <Link> would point above the site root
// when it is served from a GitHub Pages sub-path. Trailing slash trimmed because
// react-router wants '/Coloring-site', not '/Coloring-site/'.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
