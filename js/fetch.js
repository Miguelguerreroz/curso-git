export default function solicitarNombres() {
  fetch("https://www.dominio.es/api/all").then((respuesta) =>
    respuesta.json().then((nombres) => console.log(nombres))
  );
}
