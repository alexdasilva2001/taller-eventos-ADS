

document.addEventListener("DOMContentLoaded", () => {
  const botonSaludo = document.getElementById("btnSaludar");

  botonSaludo.addEventListener("click", () => {
    mostrarSaludo();
  });
});

function mostrarSaludo() {
  alert("¡holaaa! ");
}