import solicitarNombres from "./fetch.js";

(function () {
  function saludar(nombre) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.textContent = nombre;
    div.append(h2);
    document.body.append(div);
  }

  let nombreUsuario = prompt("Cual es tu nombre de developer: ");
  saludar(nombreUsuario);
  solicitarNombres();
})();
