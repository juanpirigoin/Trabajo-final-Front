import React from 'react'
import Header from './components/Header.jsx'
import AlumnoPage from './pages/AlumnoPage.jsx'
import AsistenciaPage from './pages/AsistenciaPage.jsx'
import NotasPage  from './pages/NotasPage.jsx'

function Home() {
  return (
    <div className='div-home'>
        <Header/>
        {/* <AsistenciaPage/>        
        <AlumnoPage/>        */}
        <NotasPage/>        
    </div>
  )
}

export default Home
