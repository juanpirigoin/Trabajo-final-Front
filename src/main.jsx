import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import Asistencia from './pages/Asistencia.jsx'
import Notas from './pages/Notas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Notas/>
  </StrictMode>,
)
