import React from 'react'
import useGetActividades from '../../hooks/actividades/useGetActividades';
import useGetUnidades from '../../hooks/unidades/useGetUnidades';
import FormatoFechaDDMMYYYY from '../../utils/FormatoFechaDDMMYYYY';

function ActividadesCards() {
    const { error, loading, actividades = [] } = useGetActividades();
    const { error: errorUnidades, loading: loadingUnidades, unidades = [] } = useGetUnidades();

    if (loading) return <p className="status-msg">Cargando actividades...</p>;
    if (error) return <p className="status-msg">Error: {error.message}</p>;
    if (!actividades.length) return <p className="status-msg">No hay registros de actividades</p>;

    if (loadingUnidades) return <p className="status-msg">Cargando unidades...</p>;
    if (errorUnidades) return <p className="status-msg">Error: {errorUnidades.message}</p>;
    if (!unidades.length) return <p className="status-msg">No hay registros de unidades</p>;

    return (
        <div>
            {unidades.map((unidad) => (
                <div key={unidad.IdUnidad} className="unidad-card">
                    <h2>Unidad {unidad.IdUnidad}: {unidad.NombreUnidad}</h2>
                    {actividades.map((actividad) => {
                        if (actividad.IdUnidad === unidad.IdUnidad) {
                            return (
                                <div key={actividad.IdActividad} className="actividad-card">
                                    <p><strong>{actividad.NombreActividad}</strong>    (Fecha: {FormatoFechaDDMMYYYY(actividad.FechaAsignacion)})</p>
                                </div>
                            )
                        }
                    })}
                </div>
            ))}
        </div>
    )
}

export default ActividadesCards