// PARA CARGAR UN ARCHIVO JSON EXISTENTE
var titulo;
var iniciales;
var titulos;
var color;
var tituloBloqueJSON;
var descripcionBloqueJSON;
var nombreBloqueJSON;

var inicialesUtilizadas = [];




function crearRadio(inicialesRadio) {
    if (!inicialesUtilizadas.includes(inicialesRadio)) {
        // Definir un mapeo entre los IDs de los fieldsets y los nombres de los grupos de radio
        var groupNameMap = {
            "paginaIntermedio": "radioIntermedio",
            "pagina-anterior": "radioAnterior",
            "pagina-siguiente": "radioSiguiente"
        };

        // Crear los elementos radios con sus atributos
        if (!document.getElementById(inicialesRadio)) {
            var fieldsetIds = Object.keys(groupNameMap);

            fieldsetIds.forEach(function (fieldsetId) {
                var groupName = groupNameMap[fieldsetId]; // Obtener el nombre del grupo de radio
                var radio = document.createElement("input");
                radio.type = "radio";
                radio.id = inicialesRadio + '_' + groupName; // ID único para cada radio
                radio.name = groupName;
                radio.value = inicialesRadio;

                // Crear el label asociado al radio button
                var label = document.createElement("label");
                label.htmlFor = radio.id; // Actualizar el for atributo para que apunte al id del radio
                label.textContent = inicialesRadio;

                // Crear un salto de línea
                var br = document.createElement("br");

                // Hace que aparezcan los fieldsets correspondientes
                document.getElementById(fieldsetId).style.display = "block";

                // Agregar los elementos al fieldset correspondiente
                document.getElementById(fieldsetId).appendChild(radio);
                document.getElementById(fieldsetId).appendChild(label);
                document.getElementById(fieldsetId).appendChild(br);
            });
        }
        inicialesUtilizadas.push(inicialesRadio);

    }
}
// PARA CARGAR UN ARCHIVO JSON EXISTENTE DE INDEX

function cargarIndex() {
    var archivoInput = document.getElementById("archivoJSON"); // Accede al campo de formulario dónde se ingresa el archivo
    var archivo = archivoInput.files[0]; // Accede al primer archivo json introducido por el usuario

    if (archivo) { // Si el archivo existe
        // Para leer el contenido del archivo seleccionado, y luego parsear ese contenido como un objeto JSON en JavaScript
        var lector = new FileReader(); // FileReader es una interfaz proporcionada por la API de File que permite leer el contenido de archivos. Al crear una nueva instancia de FileReader, estás preparando un objeto que se utilizará para leer el contenido del archivo seleccionado.
        lector.onload = function (evento) { // Asigna una función al evento onload del FileReader. Este evento se disparará cuando la operación de lectura se complete con éxito.
            var contenido = evento.target.result; // Dentro de la función del evento, evento.target.result contiene el contenido del archivo leído. Este contenido se almacena en la variable contenido.
            var datosDesdeArchivo = JSON.parse(contenido); // La función JSON.parse() convierte una cadena JSON válida en un objeto JavaScript. En este caso, contenido contiene una cadena que representa un objeto JSON, y JSON.parse() se utiliza para convertirla en un objeto JavaScript, que luego se almacena en la variable datosDesdeArchivo.

            // ASIGNAR VALORES DEL ARCHIVO JSON A LOS CAMPOS DEL FORMULARIO 
            imagen64 = datosDesdeArchivo.imagen64; // Imagen logo
            titulo = datosDesdeArchivo.titulo;
            iniciales = datosDesdeArchivo.datos.iniciales; //Saca del JSON las iniciales
            titulos = datosDesdeArchivo.datos.titulos; //Saca del JSON los titulos
            color = datosDesdeArchivo.datos.color; //Saca del JSON los colores

            for (let i = 0; i < iniciales.length; i++) {
                if (iniciales[i] != "" && titulos[i] != "" && color[i] != "") {
                    crearRadio(iniciales[i]);
                }
            }
        }; // Final del evento onload
        lector.readAsText(archivo);

    } else { // Si no ha seleccionado archivo
        alert("Por favor, seleccione un archivo JSON.");
    }
}

// PARA CARGAR UN ARCHIVO JSON EXISTENTE DE INTERMEDIO
function cargarIntermedio() {
    var archivoInput = document.getElementById("archivoJSONIntermedio"); // Accede al campo de formulario dónde se ingresa el archivo
    var archivo = archivoInput.files[0]; // Accede al primer archivo json introducido por el usuario

    if (archivo) { // Si el archivo existe
        // Para leer el contenido del archivo seleccionado, y luego parsear ese contenido como un objeto JSON en JavaScript
        var lector = new FileReader(); // FileReader es una interfaz proporcionada por la API de File que permite leer el contenido de archivos. Al crear una nueva instancia de FileReader, estás preparando un objeto que se utilizará para leer el contenido del archivo seleccionado.
        lector.onload = function (evento) { // Asigna una función al evento onload del FileReader. Este evento se disparará cuando la operación de lectura se complete con éxito.
            var contenido = evento.target.result; // Dentro de la función del evento, evento.target.result contiene el contenido del archivo leído. Este contenido se almacena en la variable contenido.
            var datosDesdeArchivo = JSON.parse(contenido); // La función JSON.parse() convierte una cadena JSON válida en un objeto JavaScript. En este caso, contenido contiene una cadena que representa un objeto JSON, y JSON.parse() se utiliza para convertirla en un objeto JavaScript, que luego se almacena en la variable datosDesdeArchivo.
            titulo = datosDesdeArchivo.titulo;
            iniciales = datosDesdeArchivo.iniciales; //Saca del JSON las iniciales
            titulos = datosDesdeArchivo.titulos; //Saca del JSON los titulos
            color = datosDesdeArchivo.color; //Saca del JSON los colores
            tituloBloqueJSON = datosDesdeArchivo.datos.titulosBloque; //Saca del JSON los titulos de cada bloque
            descripcionBloqueJSON = datosDesdeArchivo.datos.descripciones; //Saca del JSON las descripciones de cada bloque
            nombreBloqueJSON = datosDesdeArchivo.datos.nombre; //Saca del JSON los nombres de archivo de cada bloque

            // ASIGNAR VALORES DEL ARCHIVO JSON A LOS CAMPOS DEL FORMULARIO 

            ;


            document.getElementById("orientacion").value = datosDesdeArchivo.orientacion; // Orientación al estudio
            var estadoCasilla = datosDesdeArchivo.datos.estadoCasilla; // Estado casilla (t o f)
            var estadoAnterior = datosDesdeArchivo.datos.estadoAnterior;
            var estadoSiguiente = datosDesdeArchivo.datos.estadoSiguiente;


            for (let i = 0; i < iniciales.length; i++) {
                if (iniciales[i] != "" && titulos[i] != "" && color[i] != "") {
                    crearRadio(iniciales[i]);
                }
            }

            var radioIntermedio = document.getElementsByName("radioIntermedio");
            for (let j = 0; j < radioIntermedio.length; j++) {
                if (estadoCasilla[j] == "t") {
                    document.getElementById(`${iniciales[j]}_radioIntermedio`).checked = "true"
                }
            }

            var radioAnterior = document.getElementsByName("radioAnterior");
            for (let j = 0; j < radioAnterior.length; j++) {
                if (estadoAnterior[j] == "t") {
                    document.getElementById(`${iniciales[j]}_radioAnterior`).checked = "true"
                }
            }

            var radioSiguiente = document.getElementsByName("radioSiguiente");
            for (let j = 0; j < radioSiguiente.length; j++) {
                if (estadoSiguiente[j] == "t") {
                    document.getElementById(`${iniciales[j]}_radioSiguiente`).checked = "true"
                }
            }

            // ASIGNAR VALORES DEL ARCHIVO JSON A LOS CAMPOS DEL FORMULARIO 
            imagen64 = datosDesdeArchivo.imagen64; // Imagen logo

            var tituloBloque = document.getElementsByClassName("titulosBloque");
            var descripcionBloque = document.getElementsByClassName("descripcionBloques");
            var nombreBloque = document.getElementsByClassName("nombreBloques");
            console.log(tituloBloque);

            for (let k = 0; k < tituloBloqueJSON.length; k++) {
                if (k === 0) {
                    tituloBloque[k].value = tituloBloqueJSON[k];
                    descripcionBloque[k].value = descripcionBloqueJSON[k];
                    nombreBloque[k].value = nombreBloqueJSON[k];
                } else {
                    nuevoBloque(); // Llama a la función nuevo Bloque para que se inserte el código correspondiente
                    tituloBloque[k].value = tituloBloqueJSON[k];
                    descripcionBloque[k].value = descripcionBloqueJSON[k];
                    nombreBloque[k].value = nombreBloqueJSON[k];
                }
            }
        };

        lector.readAsText(archivo);
    } else { // Si no ha seleccionado archivo
        alert("Por favor, seleccione un archivo JSON.");
    }
}