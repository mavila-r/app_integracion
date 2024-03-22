function cargarEstilos() {
    var archivoInput = document.getElementById("archivoJSON"); // Accede al campo de formulario dónde se ingresa el archivo
    var archivoEstilo = archivoInput.files[0]; // Accede al primer archivo json introducido por el usuario

    if (archivoEstilo) {
        var lector = new FileReader(); // FileReader es una interfaz proporcionada por la API de File que permite leer el contenido de archivos. Al crear una nueva instancia de FileReader, estás preparando un objeto que se utilizará para leer el contenido del archivo seleccionado.
        lector.onload = function (evento) { // Asigna una función al evento onload del FileReader. Este evento se disparará cuando la operación de lectura se complete con éxito.
            var contenido = evento.target.result; // Dentro de la función del evento, evento.target.result contiene el contenido del archivo leído. Este contenido se almacena en la variable contenido.
            var datosDesdeArchivo = JSON.parse(contenido); // La función JSON.parse() convierte una cadena JSON válida en un objeto JavaScript. En este caso, contenido contiene una cadena que representa un objeto JSON, y JSON.parse() se utiliza para convertirla en un objeto JavaScript, que luego se almacena en la variable datosDesdeArchivo.
            document.getElementById("colorInput").value = datosDesdeArchivo.ColorPrimario;
            document.getElementById("colorInput2").value = datosDesdeArchivo.ColorSecundario;
            document.getElementById("colorInput3").value = datosDesdeArchivo.ColorTerciario;

            document.getElementsByName("EstiloFuente").value = datosDesdeArchivo.valorEstilo;


            // PARA MARCAR EL TIPO DE BOTÓN ATENCIÓN
            let opcionesA = document.getElementsByName("Atencion");

            for (var i = 0; i < opcionesA.length; i++) {
                if (opcionesA[i].value === datosDesdeArchivo.valorAtencion) {
                    opcionesA[i].checked = true;
                } else {
                    opcionesA[i].checked = false;
                }
            }

            if (datosDesdeArchivo.valorAtencion === true) {
                document.getElementsByName("Atencion")[i].checked = true;
            }


            // PARA MARCAR EL TIPO DE BOTÓN CONOCE MÁS
            let opcionesC = document.getElementsByName("Conoce");

            for (var i = 0; i < opcionesC.length; i++) {
                if (opcionesC[i].value === datosDesdeArchivo.valorConoce) {
                    opcionesC[i].checked = true;
                } else {
                    opcionesC[i].checked = false;
                }
            }

            if (datosDesdeArchivo.valorConoce === true) {
                document.getElementsByName("Conoce")[i].checked = true;
            }


            // PARA MARCAR EL TIPO DE BOTÓN PRUEBA ESTO
            let opcionesP = document.getElementsByName("Prueba");

            for (var i = 0; i < opcionesP.length; i++) {
                if (opcionesP[i].value === datosDesdeArchivo.valorPrueba) {
                    opcionesP[i].checked = true;
                } else {
                    opcionesP[i].checked = false;
                }
            }

            if (datosDesdeArchivo.valorPrueba === true) {
                document.getElementsByName("Prueba")[i].checked = true;
            }

            //PARA ELEGIR LA TIPOGRAFÍA CON SERIFA Y SIN SERIFA
            let opcionesE = document.getElementsByName("EstiloFuente");

            for (var i = 0; i < opcionesE.length; i++) {
                if (opcionesE[i].value === datosDesdeArchivo.valorEstilo) {
                    opcionesE[i].checked = true;
                } else {
                    opcionesE[i].checked = false;
                }
            }

            if (datosDesdeArchivo.valorEstilo === true) {
                document.getElementsByName("EstiloFuente")[i].checked = true;
            }

        }
        lector.readAsText(archivoEstilo);
    } else {
        alert("Selecciona un archivo JSON.")
    }
}