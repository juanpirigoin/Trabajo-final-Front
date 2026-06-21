import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import AsistenciaPage from './pages/AsistenciaPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsistenciaPage/>
  </StrictMode>,
)
