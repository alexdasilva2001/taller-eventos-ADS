
const contenedor = document.getElementById("miDiv");
const boton = document.getElementById("miBoton");


contenedor.addEventListener("click", function() {
  alert("Se hizo clic en el contenedor");
});


boton.addEventListener("click", function(event) {
 
  event.stopPropagation();
  alert("Se hizo clic solo en el botón");
});