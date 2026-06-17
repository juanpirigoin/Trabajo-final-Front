
function ListaAlumnos({Alumnos}) {
    const nombres = [...new Set(Alumnos.map(a => a.nombre))];
  return nombres
}

export default ListaAlumnos
