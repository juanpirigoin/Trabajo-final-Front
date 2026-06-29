
import React, { useState } from "react";
import useGetUnidades from "../../hooks/unidades/useGetUnidades";
import useGetActividades from '../../hooks/actividades/useGetActividades';
import usePostActividad from "../../hooks/actividades/usePostActividad";
import FechaActual from "../../utils/FechaActual";


function CreateActividadForm() {
    //Fecha actual para precargar el formulario
    const hoy = FechaActual();
    const [dd, mm, yyyy] = hoy.split("/");
    const hoyInput = `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
    
    //Unidad seleccionada para el datalist
    const [unidadSeleccionada, setUnidadSeleccionada] = useState("");

    //Se inicializa el POST y el GET
    const { error, postActividad } = usePostActividad();
    const { error: errorUnidades, loading: loadingUnidades, unidades = [] } = useGetUnidades();
    
    //Carga los datos iniciales en el formulario
    const [form, setForm] = useState({
        IdActividad: "",
        IdUnidad: "",
        NombreActividad: "",
        FechaAsignacion: hoyInput,
    });


    if (loadingUnidades) return <p className="status-msg">Cargando...</p>;
    if (errorUnidades) return <p className="status-msg">Error: {errorUnidades.message}</p>;
    if (!unidades.length) return <p className="status-msg">No hay registros</p>;


    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setForm({
            ...form, [name]: type === "number" ? parseInt(value) || 0 : value,
        });
    };

    //Selector de unidades desde datalist.
    //Se elige la unidad por nombre y se obtiene el Id de la unidad para enviar en el POST
    const handleInputChangeListaUnidades = (e) => {
        const { value } = e.target;
        setUnidadSeleccionada(value);
        const unidadEncontrada = unidades.find(
            (a) => `${a.NombreUnidad}` === value
        );
        if (unidadEncontrada) {
            setForm((prevForm) => ({...prevForm, IdUnidad: unidadEncontrada.IdUnidad
            }));
        }
    };

    // Manejo del envio del formulario
    // Se vuelve a precargar fecha actual y se limpia la seleccion de unidad
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const success = await postActividad(form)
        if (success) {
            setForm({
                IdActividad: "",
                IdUnidad: "",
                NombreActividad: "",
                FechaAsignacion: hoyInput,
            })
            setUnidadSeleccionada("");
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="IdUnidad">Unidad: </label>
            <input list="listaUnidades"
                onChange={handleInputChangeListaUnidades}
                value={unidadSeleccionada}
                type="text"
                required
                name="IdUnidad"
                id="IdUnidad" />
            <datalist id="listaUnidades">
                {unidades.map((unidad, i) => (
                    <option
                        key={i}
                        value={`${unidad.NombreUnidad}`}
                    />
                ))}
            </datalist>

            <label htmlFor="NombreActividad">Nombre de la actividad:</label>
            <input
                onChange={handleInputChange}
                value={form.NombreActividad}
                type="text"
                required
                name="NombreActividad"
                id="NombreActividad"
            />
            <label htmlFor="FechaAsignacion">Fecha de asignacion: </label>
            <input
                onChange={handleInputChange}
                value={form.FechaAsignacion}
                type="date"
                required
                name="FechaAsignacion"
                id="FechaAsignacion"
            />
            <br />
            <button type="submit"> Cargar actividad </button>
            <button type="reset"> Borrar form </button>

            {error && <p>{error.message || error}</p>}
        </form>
    )
}

export default CreateActividadForm
