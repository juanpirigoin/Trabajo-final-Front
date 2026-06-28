import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import AlumnoPage from './pages/AlumnoPage.jsx';
import ActividadesPage from './pages/ActividadesPage.jsx';
import AsistenciaPage from './pages/AsistenciaPage.jsx';
import NotasPage from './pages/NotasPage.jsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "alumnos",
                element: <AlumnoPage />
            },
            {
                path: "actividades",
                element: <ActividadesPage />
            },
            {
                path: "asistencia",
                element: <AsistenciaPage />
            },
            {
                path: "notas",
                element: <NotasPage />
            },
            {
                path: "*",
                element: (
                    <div style={{ padding: "2rem", textAlign: "center" }}>
                        <h1>Error 404</h1>
                        <p>Página no encontrada</p>
                    </div>
                )
            }
        ]
    }
]);