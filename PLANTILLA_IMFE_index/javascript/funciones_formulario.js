/*PARA AÑADIR NUEVO APARTADO*/
var contador = 1; 
var indice = 1; // índice para llamar a la función cargarImagen()


function nuevoApartadoMenu() {
    // event.preventDefault();
    // Crear nuevo div para el nuevo apartado
    var nuevoDiv = document.createElement("div");

    contador += 1;
       
    // Agregar elementos al nuevo div
    nuevoDiv.innerHTML = `
    <br>
    <input type="text" id="nuevoMenu${contador}" class="contenedorMenu"">
    <br>
    `;

    indice++;

    // Agregar nuevo div al contenedor
    document.getElementById("nuevo-apartado-menu").appendChild(nuevoDiv);
}

var contadorBuscador = 1;
var indiceBuscador = 1;

// document.getElementById("botonBuscador").addEventListener("click", function(event) {

//     event.preventDefault();
//     nuevoApartadoBuscador();
// });

function nuevoApartadoBuscador() {
    // event.preventDefault();
    // Crear nuevo div para el nuevo apartado
    var nuevoDivBusc = document.createElement("div");

    contador += 1;
       
    // Agregar elementos al nuevo div
    nuevoDivBusc.innerHTML = `
    <br>
    <input type="text" id="nuevoBuscador${contador}" class="contenedorBuscador">
    <br>
    `;

    indice++;

    // Agregar nuevo div al contenedor
    document.getElementById("nuevo-apartado-buscador").appendChild(nuevoDivBusc);
}
