function FormatoFechaDDMMYYYY(fechaYMD) {
  const dateObj = new Date(fechaYMD);

  // Formato argentino: DD/MM/YYYY
  return dateObj.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",

  });
}
export default FormatoFechaDDMMYYYY;
