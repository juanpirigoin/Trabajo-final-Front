import React from 'react'
import Header from './components/Header.jsx'
import AlumnoPage from './pages/AlumnoPage.jsx'
import AsistenciaPage from './pages/AsistenciaPage.jsx'

function Home() {
  return (
    <div className='div-home'>
        <Header/>
        <AlumnoPage/>
        
    </div>
  )
}

export default Home
