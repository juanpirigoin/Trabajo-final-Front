
function FuncionesFecha() {
    return
}

function FechaActual() {
    const fecha = new Date().toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    return fecha
}

export default FechaActual
