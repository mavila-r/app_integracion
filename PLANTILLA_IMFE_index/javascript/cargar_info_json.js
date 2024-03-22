// PARA CARGAR UN ARCHIVO JSON EXISTENTE
function cargar() {
    var archivoInput = document.getElementById("archivoJSON"); // Accede al campo de formulario dónde se ingresa el archivo
    var archivo = archivoInput.files[0]; // Accede al primer archivo json introducido por el usuario

    if (archivo) { // Si el archivo existe
        // Para leer el contenido del archivo seleccionado, y luego parsear ese contenido como un objeto JSON en JavaScript
        var lector = new FileReader(); // FileReader es una interfaz proporcionada por la API de File que permite leer el contenido de archivos. Al crear una nueva instancia de FileReader, estás preparando un objeto que se utilizará para leer el contenido del archivo seleccionado.
        lector.onload = function (evento) { // Asigna una función al evento onload del FileReader. Este evento se disparará cuando la operación de lectura se complete con éxito.
            var contenido = evento.target.result; // Dentro de la función del evento, evento.target.result contiene el contenido del archivo leído. Este contenido se almacena en la variable contenido.
            var datosDesdeArchivo = JSON.parse(contenido); // La función JSON.parse() convierte una cadena JSON válida en un objeto JavaScript. En este caso, contenido contiene una cadena que representa un objeto JSON, y JSON.parse() se utiliza para convertirla en un objeto JavaScript, que luego se almacena en la variable datosDesdeArchivo.

            // ASIGNAR VALORES DEL ARCHIVO JSON A LOS CAMPOS DEL FORMULARIO 
            document.getElementById("titulo").value = datosDesdeArchivo.titulo; // Título principal
            imagen64 = datosDesdeArchivo.imagen64; // Imagen logo
            document.getElementsByClassName("informacion-imagen")[0].innerHTML = "La imagen original está cargada (puedes comprobarlo en la previsualización). Pero, si quieres, puedes seleccionar otra para cambiarla." // Mensaje que aparece en el párrafo vacío

            var contador = 1;
            var colores = ["Rojo", "Naranja", "Amarillo", "Verde", "Turquesa", "Celeste", "Azul", "Morado", "Rosa"]; // Valores que puede tener el radio

            // CADA BLOQUE
            for (let i = 0; i < datosDesdeArchivo.datos.iniciales.length; i++) { // Porque son 9 bloques en total a rellenar
                document.getElementsByClassName("inicialesBloque")[i].value = datosDesdeArchivo.datos.iniciales[i]; // Iniciales de cada bloque
                document.getElementsByClassName("titulosBloque")[i].value = datosDesdeArchivo.datos.titulos[i]; // Título de cada bloque

                if (datosDesdeArchivo.datos.iniciales[i] !== "" && datosDesdeArchivo.datos.titulos[i] !== "") { // Verifica si el bloque tiene datos
                    let casillasColor = document.getElementsByName(`elegir-color${[contador]}`);
                    datosDesdeArchivo.datos.casillaColores[i] == "t"
                    if (datosDesdeArchivo.datos.casillaColores[i] == "t") { // Comprueba si ha seleccionado un radio en el bloque
                        for (let j = 0; j < datosDesdeArchivo.datos.color.length; j++) {
                            if (datosDesdeArchivo.datos.color[i] == colores[j]) { // Comprueba cual radio se ha seleccionado
                                casillasColor[j].checked = true; // Pone el check al radio seleccionado
                                break;
                            }
                        }
                    }

                    // Deshabilitar todos los botones de radio en el bloque
                    for (let j = 0; j < casillasColor.length; j++) {
                        casillasColor[j].disabled = true;
                    }

                    // Habilitar solo el botón de radio seleccionado en el bloque
                    for (let j = 0; j < casillasColor.length; j++) {
                        if (casillasColor[j].checked) {
                            casillasColor[j].disabled = false;
                        }
                    }
                }

                contador++;
            } // Final de los sucesivos apartados


            // Obtener el array de valores seleccionados del JSON
            const temasSeleccionados = datosDesdeArchivo.temasSeleccionados;

            // Obtener todos los elementos select con la clase "selectTema"
            const selectTemas = document.querySelectorAll('.ordenTemas');

            // Iterar sobre los elementos select y establecer los valores seleccionados
            selectTemas.forEach((select, index) => {
                // Establecer el valor seleccionado del select actual
                select.value = temasSeleccionados[index];
            });

            // Establecer los campos de iniciales como de solo lectura
            var camposIniciales = document.getElementsByClassName("inicialesBloque");
            for (let i = 0; i < camposIniciales.length; i++) {
                if (datosDesdeArchivo.datos.iniciales[i].trim() !== "") {
                    camposIniciales[i].readOnly = true;
                }
            }

            // Iterar sobre cada bloque de color
            for (let i = 0; i < datosDesdeArchivo.datos.iniciales.length; i++) {
                let casillasColor = document.getElementsByName(`elegir-color${[contador]}`);
                // Deshabilitar los botones de radio
                casillasColor.forEach(radio => {
                    // Si el botón de radio no está seleccionado
                    if (!radio.checked) {
                        // Deshabilitarlo
                        radio.disabled = true;
                    }
                });
            }

            /* DATOS BUSCADOR */
            for (let i = 0; i < datosDesdeArchivo.datos.nuevoBuscador.length; i++) {
                if (i == 0) {
                    document.getElementsByClassName("contenedorBuscador")[i].value = datosDesdeArchivo.datos.nuevoBuscador[i];
                } else {
                    nuevoApartadoBuscador();
                    document.getElementsByClassName("contenedorBuscador")[i].value = datosDesdeArchivo.datos.nuevoBuscador[i];

                }
            }

            /* DATOS MENU */
            for (let i = 0; i < datosDesdeArchivo.datos.nuevoMenu.length; i++) {
                if (i == 0) {
                    document.getElementsByClassName("contenedorMenu")[i].value = datosDesdeArchivo.datos.nuevoMenu[i];
                } else {
                    nuevoApartadoMenu();
                    document.getElementsByClassName("contenedorMenu")[i].value = datosDesdeArchivo.datos.nuevoMenu[i];

                }
            }
        }; // Final del evento onload
        lector.readAsText(archivo);

    } else { // Si no ha seleccionado archivo
        alert("Por favor, seleccione un archivo JSON.");
    }
}
