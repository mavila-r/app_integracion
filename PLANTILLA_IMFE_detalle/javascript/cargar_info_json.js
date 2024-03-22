// NUEVO - PARA CARGAR UN ARCHIVO JSON EXISTENTE DESDE PÁGINA INTERMEDIA

// Inicialización de variables (estarán disponibles para la función principal)
var tituloPrincipal = ""; // Almacena la variable del título principal, que se usa en el tittle del head de la cadena de texto que representa el html que se descarga (en función principal)
var iniciales = "";
var titulosTemas = "";
var color = "";
var estadoCasilla = "";
var titulosBloques = "";
var nombreArchivos = "";
var imagen64 = "";


// PARA QUE APAREZCAN LAS OPCIONES DE TEMAS (SE LLAMA DESDE cargarIntermedioDesdeDetalle())
function crearRadio(inicialesRadio){ // El parámetro son las iniciales
    // Crea los elementos radios con sus atributos, el name es el mismo para que solo se pueda elegir uno y sea un grupo
    if (!document.getElementById(inicialesRadio)) { 
        var radio = document.createElement("input");
        radio.type = "radio"; 
        radio.id = inicialesRadio;
        radio.name = "radioIntermedio";
        radio.value = inicialesRadio;

        // Crea el label asociado al radio button con sus atributos
        var label = document.createElement("label");
        label.htmlFor = inicialesRadio;
        label.textContent = inicialesRadio;

        var br = document.createElement("br"); // Crea un salto de línea

        document.getElementById("paginaIntermedio").style.display = "block"; // Hace que aparezca el fieldset con id "paginaIntermedio"
        // Agregar los elementos al id "paginaIntermedio"
        document.getElementById("paginaIntermedio").appendChild(radio);;
        document.getElementById("paginaIntermedio").appendChild(label);
        document.getElementById("paginaIntermedio").appendChild(br);
    }
}

// CARGAR INFORMACIÓN DE PÁGINA INTERMEDIA
function cargarIntermedioDesdeDetalle() {
    var archivoInput = document.getElementById("archivoJSON-Intermedio"); // Accede al campo de formulario dónde se ingresa el archivo
    var archivo = archivoInput.files[0]; // Accede al primer archivo json introducido por el usuario
    
    if (archivo) { // Si el archivo existe
        // Para leer el contenido del archivo seleccionado, y luego parsear ese contenido como un objeto JSON en JavaScript
        var lector = new FileReader(); // FileReader es una interfaz proporcionada por la API de File que permite leer el contenido de archivos. Al crear una nueva instancia de FileReader, estás preparando un objeto que se utilizará para leer el contenido del archivo seleccionado.
        lector.onload = function (evento) { // Asigna una función al evento onload del FileReader. Este evento se disparará cuando la operación de lectura se complete con éxito.
            var contenido = evento.target.result; // Dentro de la función del evento, evento.target.result contiene el contenido del archivo leído. Este contenido se almacena en la variable contenido.
            var datosDesdeArchivo = JSON.parse(contenido); // La función JSON.parse() convierte una cadena JSON válida en un objeto JavaScript. En este caso, contenido contiene una cadena que representa un objeto JSON, y JSON.parse() se utiliza para convertirla en un objeto JavaScript, que luego se almacena en la variable datosDesdeArchivo.
            
            // ASIGNAR VALORES DEL ARCHIVO JSON A LOS CAMPOS DEL FORMULARIO 
            imagen64 = datosDesdeArchivo.imagen64; // Imagen logo 

            tituloPrincipal = datosDesdeArchivo.titulo; // Título del tutorial (aparece en el tittle) 
            iniciales = datosDesdeArchivo.iniciales; // Iniciales de cada bloque
            titulosTemas = datosDesdeArchivo.titulos; // Títulos de cada bloque
            color = datosDesdeArchivo.color; // Colores de cada bloque
            estadoCasilla = datosDesdeArchivo.datos.estadoCasilla; // Para saber el bloque seleccionado

            titulosBloques = datosDesdeArchivo.datos.titulosBloque; // Títulos de cada página de detalle
            nombreArchivos = datosDesdeArchivo.datos.nombre; // Nombre con el que se descargará cada archivo de cada página

            // PARA SABER A QUÉ TEMA PERTENECE LA PÁGINA QUE SE VA A ESCRIBIR
            for (let i = 0; i < iniciales.length; i++) {
                if(iniciales[i] !== "" && titulosTemas[i] !== "" && color[i] !== ""){
                    crearRadio(iniciales[i]);
                }
            }

            var titulosEnFormulario = document.getElementsByName("radioIntermedio"); // Accede a las casillas con todos los títulos que se acaba de crear

            for (let j = 0; j < estadoCasilla.length; j++) {
                if(estadoCasilla[j] == "t") {
                    titulosEnFormulario[j].checked = "true"; // Selecciona la casilla que estaba marcada
                } else {
                    titulosEnFormulario[j].disabled = "true"; // Desabilita los demás input para que no pueda cambiar el valor seleccionado
                }
            }

            // TÍTIULO
            var campoTitulo = document.getElementById("titulo"); // Accede al campo del título
            campoTitulo.value = ""; // Sustituye el valor que tuviera el campo por unas comillas vacías
            campoTitulo.style.display = "none"; // Oculta el campo

            var selectTitulo = document.getElementById("selectTitulo"); // Accede al select del título (inicialmente oculto)
            selectTitulo.style.display = "block"; // Muestra el select
            selectTitulo.value = ""; // Quita el valor que estuviera seleccionado (por si la persona ya había cargado una página intermedia previamente)
            
            // Para borrar las opciones del select que ya haya (por si la persona ya había cargado una página intermedia previamente)
            while (selectTitulo.options.length > 1) {
                selectTitulo.remove(1);
            }

            for (let l = 0; l < titulosBloques.length; l++) { // Vamos pasando por cada título almacenado en el json
                if(titulosBloques[l] !== "") { // Si el título no es un campo vacío
                    var newOption = document.createElement("option"); // Crea un nuevo elemento de opción
                    
                    newOption.value = titulosBloques[l]; // Establece el valor y el texto de la opción
                    newOption.text = titulosBloques[l];

                    selectTitulo.add(newOption); // Añadir la opción al select
                }
            }

            // PÁGINA ANTERIOR Y SIGUIENTE

            let selectPaginaAnterior = document.getElementById("selectPaginaAnterior");
            let selectPaginaSiguiente = document.getElementById("selectPaginaSiguiente");

            document.getElementById("paginas-anterior-siguiente").style.display = "block"

            selectPaginaAnterior.value = ""; // Quita el valor que estuviera seleccionado (por si la persona ya había cargado una página intermedia previamente)
            
            // Para borrar las opciones del select que ya haya (por si la persona ya había cargado una página intermedia previamente)
            while (selectPaginaAnterior.options.length > 1) {
                selectPaginaAnterior.remove(1);
            }

            selectPaginaSiguiente.value = ""; // Quita el valor que estuviera seleccionado (por si la persona ya había cargado una página intermedia previamente)
        
            // Para borrar las opciones del select que ya haya (por si la persona ya había cargado una página intermedia previamente)
            while (selectPaginaSiguiente.options.length > 1) {
                selectPaginaSiguiente.remove(1);
            }
            
            // AÑADIR OPCIONES A PÁGINA ANTERIOR
            for (let l = 0; l < nombreArchivos.length; l++) { // Vamos pasando por cada título almacenado en el json
                if(nombreArchivos[l] !== "") { // Si el título no es un campo vacío
                    var newOption = document.createElement("option"); // Crea un nuevo elemento de opción
                    
                    newOption.value = nombreArchivos[l]; // Establece el valor y el texto de la opción
                    newOption.text = nombreArchivos[l];

                    selectPaginaAnterior.add(newOption); // Añadir la opción al select
                }
            }

            // AÑADIR OPCIONES A PÁGINA SIGUIENTE
            for (let l = 0; l < nombreArchivos.length; l++) { // Vamos pasando por cada título almacenado en el json
                if(nombreArchivos[l] !== "") { // Si el título no es un campo vacío
                    var newOption = document.createElement("option"); // Crea un nuevo elemento de opción
                    
                    newOption.value = nombreArchivos[l]; // Establece el valor y el texto de la opción
                    newOption.text = nombreArchivos[l];

                    selectPaginaSiguiente.add(newOption); // Añadir la opción al select
                }
            }


        }; // Final del evento onload
    lector.readAsText(archivo);

    } else { // Si no ha seleccionado archivo
        alert("Por favor, seleccione un archivo JSON.");
    }
}



// PARA CARGAR UN ARCHIVO JSON EXISTENTE (CARGAR UNA PÁGINA DE DETALLE COMPLETA)
function cargar() {
    var archivoInput = document.getElementById("archivoJSON"); // Accede al campo de formulario dónde se ingresa el archivo
    var archivo = archivoInput.files[0]; // Accede al primer archivo json introducido por el usuario

    if (archivo) { // Si el archivo existe
        // Para leer el contenido del archivo seleccionado, y luego parsear ese contenido como un objeto JSON en JavaScript
        var lector = new FileReader(); // FileReader es una interfaz proporcionada por la API de File que permite leer el contenido de archivos. Al crear una nueva instancia de FileReader, estás preparando un objeto que se utilizará para leer el contenido del archivo seleccionado.
        lector.onload = function (evento) { // Asigna una función al evento onload del FileReader. Este evento se disparará cuando la operación de lectura se complete con éxito.
            var contenido = evento.target.result; // Dentro de la función del evento, evento.target.result contiene el contenido del archivo leído. Este contenido se almacena en la variable contenido.
            var datosDesdeArchivo = JSON.parse(contenido); // La función JSON.parse() convierte una cadena JSON válida en un objeto JavaScript. En este caso, contenido contiene una cadena que representa un objeto JSON, y JSON.parse() se utiliza para convertirla en un objeto JavaScript, que luego se almacena en la variable datosDesdeArchivo.

            // NUEVO - PARA QUE LAS VARIABLES QUE SE CREAN AL CARGAR UN JSON DE PÁGINA INTERMEDIA TENGAN EL VALOR CORRESPONDIENTE
            if (datosDesdeArchivo.tituloPrincipal !== "") {
                tituloPrincipal = datosDesdeArchivo.tituloPrincipal;
            }
            if (datosDesdeArchivo.iniciales !== undefined) {
                iniciales = datosDesdeArchivo.iniciales;
            }
            if (datosDesdeArchivo.titulosTemas !== undefined) {
                titulosTemas = datosDesdeArchivo.titulosTemas;
            }
            if (datosDesdeArchivo.color !== undefined) {
                color = datosDesdeArchivo.color;
            }
            if (datosDesdeArchivo.estadoCasilla !== undefined) {
                estadoCasilla = datosDesdeArchivo.estadoCasilla;
            }
            if (datosDesdeArchivo.titulosBloques !== undefined) {
                titulosBloques = datosDesdeArchivo.titulosBloques;
            }
            if (datosDesdeArchivo.nombreArchivos !== undefined) {
                nombreArchivos = datosDesdeArchivo.nombreArchivos;
            }
            if (datosDesdeArchivo.imagen64 !== undefined) {
                imagen64 = datosDesdeArchivo.imagen64;
            }

            // PARA SABER A QUÉ TEMA PERTENECE LA PÁGINA QUE SE VA A ESCRIBIR
            for (let i = 0; i < iniciales.length; i++) {
                if(iniciales[i] !== "" && titulosTemas[i] !== "" && color[i] !== ""){
                    crearRadio(iniciales[i]);
                }
            }

            var titulosEnFormulario = document.getElementsByName("radioIntermedio"); // Accede a las casillas con todos los títulos que se acaba de crear

            for (let j = 0; j < estadoCasilla.length; j++) {
                if(estadoCasilla[j] == "t") {
                    titulosEnFormulario[j].checked = "true"; // Selecciona la casilla que estaba marcada
                } else {
                    titulosEnFormulario[j].disabled = "true"; // Desabilita los demás input para que no pueda cambiar el valor seleccionado
                }
            }

            // TÍTIULO
            var nombreArchivoJSON = document.getElementById("archivoJSON").files[0].name; // Para saber el nombre del arhivo json que acabamos de seleccionar

            if (nombreArchivoJSON.startsWith("borrador")) { // Si el nombre del archivo NO empieza por "borrador"
                var campoTitulo = document.getElementById("titulo"); // Accede al campo del título
                campoTitulo.value = datosDesdeArchivo.tituloPrincipal;

            } else {

                var campoTitulo = document.getElementById("titulo"); // Accede al campo del título
                campoTitulo.value = ""; // Sustituye el valor que tuviera el campo por unas comillas vacías
                campoTitulo.style.display = "none"; // Oculta el campo

                var selectTitulo = document.getElementById("selectTitulo"); // Accede al select del título (inicialmente oculto)
                selectTitulo.style.display = "block"; // Muestra el select

                for (let l = 0; l < titulosBloques.length; l++) { // Vamos pasando por cada título almacenado en el json
                    if(titulosBloques[l] !== "") { // Si el título no es un campo vacío
                        var newOption = document.createElement("option"); // Crea un nuevo elemento de opción
                        
                        newOption.value = titulosBloques[l]; // Establece el valor y el texto de la opción
                        newOption.text = titulosBloques[l];

                        selectTitulo.add(newOption); // Añadir la opción al select
                    }
                }

                document.getElementById("selectTitulo").value = datosDesdeArchivo.titulo;

                nombreArchivo();
            }

            
            // ASIGNAR VALORES DEL ARCHIVO JSON A LOS CAMPOS DEL FORMULARIO 
            document.getElementById("titulo").value = datosDesdeArchivo.titulo; // Título principal
            document.getElementById("orientaciones").value = datosDesdeArchivo.orientaciones; // Orientaciones pedagógicas
            document.getElementById("prueba-esto").value = datosDesdeArchivo.pruebaEsto; // Prueba esto final
            document.getElementById("resumen").value = datosDesdeArchivo.resumen; // Resumen
            document.getElementById("referencia").value = datosDesdeArchivo.referencia; // Referencias
            document.getElementById("palabras-clave").value = datosDesdeArchivo.palabrasClave; // Palabras clave


            // CADA APARTADO
            let divContenedorApartados = document.getElementsByClassName("contenedorApartados");

            let indiceApartados = 2; // El índice para acceder al campo que hay que rellenar a partir del segundo apartado 

            for (let i = 0; i < datosDesdeArchivo.datos.titulos.length; i++) { // Mientras haya titulos, quiere decir que hay apartados

                if (i === 0) { // En el primer apartado
                    document.getElementsByClassName("titulo")[i].value = datosDesdeArchivo.datos.titulos[i]; // Título de cada apartado
                    document.getElementsByClassName("contenido")[i].value = datosDesdeArchivo.datos.contenidos[i]; // Contenido de cada apartado

                    if (datosDesdeArchivo.datos.casilla[i] == "t") { // Si el valor de esta variable es t, significa que la persona ha seleccionado la casilla de ejemplo
                        document.getElementsByClassName("casilla-ejemplo")[i].checked = true; // Marcamos la casilla de ejemplo
                        document.getElementsByClassName("introducirEjemplo")[i].style.display = "block"; // Aparece el div que contiene los campos para introducir un ejemplo
                        document.getElementsByClassName("contenidoHTML")[i].value = datosDesdeArchivo.datos.contenidoHTML[i]; // Contenido HTML (si hay ejemplo, siempre habrá contenido, ya sea html o una explicación). Esta parte se refiere al cuadrado azul oscuro de la izquierda.
                       

                        if (datosDesdeArchivo.datos.casillaCodigo[i] == "t") { // Si la persona había marcado la casilla de que quiere mostrar el código html en el contenedor azul de los ejemplos (el de la izquierda)
                            document.getElementsByClassName("escribir-HTML")[i].checked = true; // Marcamos la casilla de mostrar el código html
                        }

                        // SI EL EJEMPLO SELECCIONADO ES IMAGEN
                        if(datosDesdeArchivo.datos.tipoEjemplo[i] == "IMAGEN") {
                            document.getElementsByClassName("ejemplo-con-imagen")[i].style.display = "block"; // Para que aparezca el div oculto, para insertar la imagnen

                            let casillasEjemplo = document.getElementsByName("elegir-ejemplo1"); // Accede a las tres posibles casillas

                            for(let k = 0; k < casillasEjemplo.length; k++) {
                                if(casillasEjemplo[k].value == "IMAGEN") {
                                    casillasEjemplo[k].checked = true;
                                    codigos64.push(datosDesdeArchivo.datos.codigoImagen[i]); // AÑADE EL CODIGO EN BASE 64 A LA VARIABLE LLAMADA CODIGOS64
                                    document.getElementsByClassName("informacion-imagen")[i].innerHTML = "La imagen original está cargada (puedes comprobarlo en la previsualización). Pero, si quieres, puedes seleccionar otra para cambiarla." // Mensaje que aparece en el párrafo vacío
                                        
                                    document.getElementsByClassName("anchoImagen")[i].value = datosDesdeArchivo.datos.ancho[i]; // Número que introdujo la persona en ancho
                                    if (datosDesdeArchivo.datos.ancho[i] !== "") { // Si la persona había escrito un número en el campo de ancho 
                                        document.getElementsByClassName("medidaAnchoImagen")[i].value = datosDesdeArchivo.datos.medidaAncho[i]; // Unidad de medida seleccionada
                                    }

                                    document.getElementsByClassName("altoImagen")[i].value = datosDesdeArchivo.datos.alto[i]; // Número que introdujo la persona en alto
                                    if (datosDesdeArchivo.datos.alto[i] !== "") { // Si la persona había escrito un número en el campo de ancho
                                        document.getElementsByClassName("medidaAltoImagen")[i].value = datosDesdeArchivo.datos.medidaAlto[i]; // Unidad de medida seleccionada
                                    }
                                    
                                    if (datosDesdeArchivo.datos.intentaloTuImagen[i] == "t") { // Si había seleccionado la casilla de inténtalo tú mismo
                                        document.getElementsByClassName("botonIntentalo")[i].checked = true;
                                    }
                                }
                            }

                        } else {
                            codigos64.push(""); // Si no es imagen, añade unas comillas vacías
                        }
                        
                        // SI EL EJEMPLO SELECCIONADO ES DINÁMICO
                        if (datosDesdeArchivo.datos.tipoEjemplo[i] == "DINAMICO") {
                            document.getElementById("ejemplo-dinamico").style.display = "block"; // Aparece el div correspondiente a insertar ejemplo dinámico

                            let casillasEjemplo = document.getElementsByName("elegir-ejemplo1"); // Accede a las tres posibles casillas

                            for(let k = 0; k < casillasEjemplo.length; k++) {
                                if(casillasEjemplo[k].value == "DINAMICO") {
                                    casillasEjemplo[k].checked = true; // Marca la casilla correspondiente a ejemplo dinámico

                                    if (datosDesdeArchivo.datos.intentaloTuDinamico[i] == "t") {  // Si ha elegifo insertar un botón de inténtalo tú mismo
                                    document.getElementsByClassName("botonIntentalo2")[i].checked = true; // Marca la casilla correspondiente
                                    }
                                }
                            }
                        }

                        // SI EL EJEMPLO SELECCIONADO ES IFRAME
                        
                        if (datosDesdeArchivo.datos.tipoEjemplo[i] == "IFRAME") {
                            document.getElementById("ejemplo-con-iframe").style.display = "block"; // Aparece el div correspondiente a insertar ejemplo con iframe

                            let casillasEjemplo = document.getElementsByName("elegir-ejemplo1"); // Accede a las tres posibles casillas

                            for(let k = 0; k < casillasEjemplo.length; k++) {
                                if(casillasEjemplo[k].value == "IFRAME") {
                                    casillasEjemplo[k].checked = true; // Marca la casilla correspondiente a iframe

                                    var tipodeIframe = document.getElementsByClassName("elegir-iframe"); // Crea un objeto de tres opciones
                                    for (let g = 0; g < tipodeIframe.length; g++ ) {

                                        if (datosDesdeArchivo.datos.tipoIframe[i] == "PAGINA") { // Si el iframe que quiere introducir es una página externa
                                            document.getElementById("pagina-externa").style.display = "block"; // Muestra el div correspondiente
                                            document.getElementById("elegir-pagina").checked = true; // Marca la casilla
                                            document.getElementsByClassName("direccion-iframe")[i].value = datosDesdeArchivo.datos.urlPagina[i]; // Dirección de la página
                                        } 
                                        else if (datosDesdeArchivo.datos.tipoIframe[i] == "ARCHIVO") { // Si el iframe que quiere introducir es un archivo (por ejemplo, un pdf)
                                            document.getElementById("iframe-archivo").style.display = "block"; // Muestra el div correspondiente
                                            document.getElementById("elegir-archivo").checked = true; // Marca la casilla
                                            document.getElementsByClassName("infoArchivo")[i].innerHTML = `Por motivos de seguridad, no se puede acceder al archivo que subiste. Pero el nombre es: ` + datosDesdeArchivo.datos.urlArchivo[i]; 
                                        }
                                        else if (datosDesdeArchivo.datos.tipoIframe[i] == "INCRUSTAR") { // Si el iframe que quiere introducir es, por ejemplo, de youtube
                                            document.getElementById("iframe-incrustar").style.display = "block"; // Muestra el div correspondiente
                                            document.getElementById("elegir-incrustar").checked = true; // Marca la casilla
                                            document.getElementsByClassName("codigo-incrustracion")[i].value = datosDesdeArchivo.datos.urlIncrustar[i]; // Dirección de la página
                                        }
                                    }
                                        
                                    // Inténtalo tú mismo de ejemplo iframe  
                                    if (datosDesdeArchivo.datos.intentaloTuIframe[i] == "t") { // Si ha elegido poner un botón de inténtalo tú mismo
                                    document.getElementsByClassName("botonIntentalo3")[i].checked = true; // Selecciona la casilla correspondiente
                                    }
                                }
                            }
                        }
                    } else {
                        codigos64.push(""); // Si no es imagen, añade unas comillas vacías
                    }
                    
                    // BOTONES DE CONOCE MÁS, ATENCIÓN Y PRUEBA ESTO (En el primer apartado)

                    if(datosDesdeArchivo.datos.casillaBotones[i] == "t") { // Si había seleccionado la casilla de introducir un botón
                        document.getElementsByClassName("casilla-boton")[i].checked = true; // Marca la casilla
                        document.getElementsByClassName("introducirBoton")[i].style.display = "block"; // Muestra el div correspondiente

                        if(datosDesdeArchivo.datos.casillaAtencion[i] == "t") { // Si había seleccionado la casilla de Atención
                            document.getElementsByClassName("mostrarAtencion")[i].checked = true; // Marca la casilla
                            document.getElementById("introduceAtencion").style.display = "block"; // Muestra el div correspondiente
                            document.getElementsByClassName("atencion")[i].value = datosDesdeArchivo.datos.infoAtencion[i];
                        }

                        if(datosDesdeArchivo.datos.casillaConoceMas[i] == "t") { // Si había seleccionado la casilla de Conoce más
                            document.getElementsByClassName("mostrarConoceMas")[i].checked = true; // Marca la casilla
                            document.getElementById("introduceConoceMas").style.display = "block"; // Muestra el div correspondiente
                            document.getElementsByClassName("conoceMas")[i].value = datosDesdeArchivo.datos.infoConoceMas[i];
                        }

                        if(datosDesdeArchivo.datos.casillaPruebaEsto[i] == "t") { // Si había seleccionado la casilla de Prueba esto
                            document.getElementsByClassName("mostrarPruebaEsto")[i].checked = true; // Marca la casilla
                            document.getElementById("introducePruebaEsto").style.display = "block"; // Muestra el div correspondiente
                            document.getElementsByClassName("pruebaEsto")[i].value = datosDesdeArchivo.datos.infoPruebaEsto[i];
                        }

                    }

                    // SUBAPARTADOS

                    if(datosDesdeArchivo.datos.numeroSubapartados[i] !== 0) { // Si hay algún subapartado
                        for (let l = 0; l < datosDesdeArchivo.datos.numeroSubapartados[i]; l++) { // Itera sobre cada subapartado
                            nuevoSubapartado(i); // Llama a la función que inserta subapartados (HAY QUE HACERLO TANTAS VECES COMO SUBAPARTADOS HAYA)

                            let subapartadoCorrespondiente = divContenedorApartados[i].getElementsByClassName("contenedorSubapartados")[l];

                            divContenedorApartados[i].getElementsByClassName("subtitulo")[l].value = datosDesdeArchivo.datos.conjuntoSubtitulos[i][l]; // Subítulo de cada apartado
                            divContenedorApartados[i].getElementsByClassName("subcontenido")[l].value = datosDesdeArchivo.datos.conjuntoSubcontenidos[i][l]; // Contenido de cada apartado

                            if (datosDesdeArchivo.datos.conjuntoCasillasSubejemplos[i][l] == "t") { // Si el valor de esta variable es t, significa que la persona ha seleccionado la casilla de ejemplo
                                divContenedorApartados[i].getElementsByClassName("casilla-subejemplo")[l].checked = true; // Marcamos la casilla de ejemplo
                                divContenedorApartados[i].getElementsByClassName("introducirSubejemplo")[l].style.display = "block"; // Aparece el div que contiene los campos para introducir un ejemplo
                                divContenedorApartados[i].getElementsByClassName("subContenidoHTML")[l].value = datosDesdeArchivo.datos.conjuntoContenidosHTML[i][l]; // Contenido HTML (si hay ejemplo, siempre habrá contenido, ya sea html o una explicación). Esta parte se refiere al cuadrado azul oscuro de la izquierda.
                            
                                if (datosDesdeArchivo.datos.conjuntoCasillasCodigoHTML[i][l] == "t") { // Si la persona había marcado la casilla de que quiere mostrar el código html en el contenedor azul de los ejemplos (el de la izquierda)
                                    divContenedorApartados[i].getElementsByClassName("subescribir-HTML")[l].checked = true; // Marcamos la casilla de mostrar el código html
                                }

                                // SI EL EJEMPLO SELECCIONADO ES IMAGEN
                                if(datosDesdeArchivo.datos.conjuntoTiposSubejemplos[i][l] == "IMAGEN") {
                                    divContenedorApartados[i].getElementsByClassName("SUBejemplo-con-imagen")[l].style.display = "block"; // Para que aparezca el div oculto, para insertar la imagnen

                                    let SUBcasillasEjemplo = subapartadoCorrespondiente.getElementsByClassName("elegir-subejemplo"); // Accede a las tres posibles casillas

                                    for(let k = 0; k < SUBcasillasEjemplo.length; k++) {
                                        if(SUBcasillasEjemplo[k].value == "IMAGEN") {
                                            SUBcasillasEjemplo[k].checked = true;

                                            let subcodigo64 = datosDesdeArchivo.datos.conjuntoSubCodigosImagen[i][l];
                                            cargarSubImagen(i, null, l, subcodigo64);

                                            divContenedorApartados[i].getElementsByClassName("SUBinformacion-imagen")[l].innerHTML = "La imagen original está cargada (puedes comprobarlo en la previsualización). Pero, si quieres, puedes seleccionar otra para cambiarla." // Mensaje que aparece en el párrafo vacío
                                                
                                            divContenedorApartados[i].getElementsByClassName("SUBanchoImagen")[l].value = datosDesdeArchivo.datos.conjuntoAnchos[i][l]; // Número que introdujo la persona en ancho
                                            if (datosDesdeArchivo.datos.conjuntoAnchos[i][l] !== "") { // Si la persona había escrito un número en el campo de ancho 
                                                divContenedorApartados[i].getElementsByClassName("SUBmedidaAnchoImagen")[l].value = datosDesdeArchivo.datos.conjuntoMedidasAnchos[i][l]; // Unidad de medida seleccionada
                                            }

                                            divContenedorApartados[i].getElementsByClassName("SUBaltoImagen")[l].value = datosDesdeArchivo.datos.conjuntoAltos[i][l]; // Número que introdujo la persona en alto
                                            if (datosDesdeArchivo.datos.conjuntoAltos[i][l] !== "") { // Si la persona había escrito un número en el campo de ancho
                                                divContenedorApartados[i].getElementsByClassName("SUBmedidaAltoImagen")[l].value = datosDesdeArchivo.datos.conjuntoMedidasAltos[i][l]; // Unidad de medida seleccionada
                                            }
                                            
                                            if (datosDesdeArchivo.datos.conjuntointentaloTuImagen[i][l] == "t") { // Si había seleccionado la casilla de inténtalo tú mismo
                                                divContenedorApartados[i].getElementsByClassName("SUBbotonIntentalo")[l].checked = true;
                                            }
                                        }
                                    }
                                
                                } else {
                                    subcodigos64.push(""); // Si no es imagen, añade unas comillas vacías 
                                }

                                // SI EL EJEMPLO SELECCIONADO ES DINÁMICO
                                if (datosDesdeArchivo.datos.conjuntoTiposSubejemplos[i][l] == "DINAMICO") {
                                    divContenedorApartados[i].getElementsByClassName("SUBejemplo-dinamico")[l].style.display = "block"; // Aparece el div correspondiente a insertar ejemplo dinámico

                                    let SUBcasillasEjemplo = subapartadoCorrespondiente.getElementsByClassName("elegir-subejemplo"); // Accede a las tres posibles casillas

                                    for(let k = 0; k < SUBcasillasEjemplo.length; k++) {
                                        if(SUBcasillasEjemplo[k].value == "DINAMICO") {
                                            SUBcasillasEjemplo[k].checked = true; // Marca la casilla correspondiente a ejemplo dinámico

                                            if (datosDesdeArchivo.datos.conjuntoIntentaloTuDinamico[i][l] == "t") {  // Si ha elegifo insertar un botón de inténtalo tú mismo
                                                divContenedorApartados[i].getElementsByClassName("SUBbotonIntentalo2")[l].checked = true; // Marca la casilla correspondiente
                                            }
                                        }
                                    }
                                }

                                // SI EL EJEMPLO SELECCIONADO ES IFRAME
                                if (datosDesdeArchivo.datos.conjuntoTiposSubejemplos[i][l] == "IFRAME") {
                                    divContenedorApartados[i].getElementsByClassName("SUBejemplo-con-iframe")[l].style.display = "block"; // Aparece el div correspondiente a insertar ejemplo con iframe

                                    let SUBcasillasEjemplo = subapartadoCorrespondiente.getElementsByClassName("elegir-subejemplo"); // Accede a las tres posibles casillas

                                    for(let k = 0; k < SUBcasillasEjemplo.length; k++) {
                                        if(SUBcasillasEjemplo[k].value == "IFRAME") {
                                            SUBcasillasEjemplo[k].checked = true; // Marca la casilla correspondiente a iframe

                                            var SUBtipodeIframe = subapartadoCorrespondiente.getElementsByClassName("SUBelegir-iframe"); // Crea un objeto de tres opciones
                                            for (let g = 0; g < SUBtipodeIframe.length; g++ ) {

                                                if (datosDesdeArchivo.datos.conjuntoTipoIframe[i][l] == "PAGINA") { // Si el iframe que quiere introducir es una página externa
                                                    divContenedorApartados[i].getElementsByClassName("SUBpagina-externa")[l].style.display = "block"; // Muestra el div correspondiente
                                                    divContenedorApartados[i].getElementsByClassName("SUBelegir-pagina")[l].checked = true; // Marca la casilla
                                                    divContenedorApartados[i].getElementsByClassName("SUBdireccion-iframe")[l].value = datosDesdeArchivo.datos.conjuntoUrlPagina[i][l]; // Dirección de la página
                                                } 
                                                else if (datosDesdeArchivo.datos.conjuntoTipoIframe[i][l] == "ARCHIVO") { // Si el iframe que quiere introducir es un archivo (por ejemplo, un pdf)
                                                    divContenedorApartados[i].getElementsByClassName("SUBiframe-archivo")[l].style.display = "block"; // Muestra el div correspondiente
                                                    divContenedorApartados[i].getElementsByClassName("SUBelegir-archivo")[l].checked = true; // Marca la casilla
                                                    divContenedorApartados[i].getElementsByClassName("SUBinfoArchivo")[l].innerHTML = `Por motivos de seguridad, no se puede acceder al archivo que subiste. Pero el nombre es: ` + datosDesdeArchivo.datos.conjuntoUrlArchivo[i][l]; 
                                                }
                                                else if (datosDesdeArchivo.datos.conjuntoTipoIframe[i][l] == "INCRUSTAR") { // Si el iframe que quiere introducir es, por ejemplo, de youtube
                                                    divContenedorApartados[i].getElementsByClassName("SUBiframe-incrustar")[l].style.display = "block"; // Muestra el div correspondiente
                                                    divContenedorApartados[i].getElementsByClassName("SUBelegir-incrustar")[l].checked = true; // Marca la casilla
                                                    divContenedorApartados[i].getElementsByClassName("SUBcodigo-incrustracion")[l].value = datosDesdeArchivo.datos.conjuntoUrlIncrustar[i][l]; // Dirección de la página
                                                }
                                            }
                                                
                                            // Inténtalo tú mismo de ejemplo iframe  
                                            if (datosDesdeArchivo.datos.conjuntoIntentaloTuIframe[i][l] == "t") { // Si ha elegido poner un botón de inténtalo tú mismo
                                                divContenedorApartados[i].getElementsByClassName("SUBbotonIntentalo3")[l].checked = true; // Selecciona la casilla correspondiente
                                            }
                                        }
                                    }
                                }

                            }  // Fin de caso en que hay ejemplo

                            // BOTONES DE CONOCE MÁS, ATENCIÓN Y PRUEBA ESTO (En el primer apartado)
                            if(datosDesdeArchivo.datos.conjuntocCasillaBotones[i][l] == "t") { // Si había seleccionado la casilla de introducir un botón
                                divContenedorApartados[i].getElementsByClassName("SUBcasilla-boton")[l].checked = true; // Marca la casilla
                                divContenedorApartados[i].getElementsByClassName("introduceSUBBoton")[l].style.display = "block"; // Muestra el div correspondiente

                                if(datosDesdeArchivo.datos.conjuntoCasillaAtencion[i][l] == "t") { // Si había seleccionado la casilla de Atención
                                    divContenedorApartados[i].getElementsByClassName("SUBmostrarAtencion")[l].checked = true; // Marca la casilla
                                    divContenedorApartados[i].getElementsByClassName("introduceSUBatencion")[l].style.display = "block"; // Muestra el div correspondiente
                                    divContenedorApartados[i].getElementsByClassName("SUBatencion")[l].value = datosDesdeArchivo.datos.conjuntoInfoAtencion[i][l];
                                }

                                if(datosDesdeArchivo.datos.conjuntoCasillaConoceMas[i][l] == "t") { // Si había seleccionado la casilla de Conoce más
                                    divContenedorApartados[i].getElementsByClassName("SUBmostrarConoceMas")[l].checked = true; // Marca la casilla
                                    divContenedorApartados[i].getElementsByClassName("introduceSUBConoceMas")[l].style.display = "block"; // Muestra el div correspondiente
                                    divContenedorApartados[i].getElementsByClassName("SUBconoceMas")[l].value = datosDesdeArchivo.datos.conjuntoInfoConoceMas[i][l];
                                }

                                if(datosDesdeArchivo.datos.conjuntoCasillaPruebaEsto[i][l] == "t") { // Si había seleccionado la casilla de Prueba esto
                                    divContenedorApartados[i].getElementsByClassName("SUBmostrarPruebaEsto")[l].checked = true; // Marca la casilla
                                    divContenedorApartados[i].getElementsByClassName("introduceSUBPruebaEsto")[l].style.display = "block"; // Muestra el div correspondiente
                                    divContenedorApartados[i].getElementsByClassName("SUBpruebaEsto")[l].value = datosDesdeArchivo.datos.conjuntoInfoPruebaEsto[i][l];
                                }

                            }
        
                        } // Fin de cada subapartado
                    } // Fin de caso en que hay subapartado


                } else { // SI HAY MÁS DE UN APARTADO (i es mayor que 0)
                    nuevoApartado(); // Llama a la función nuevo Apartado para que se inserte el código correspondiente

                    document.getElementsByClassName("titulo")[i].value = datosDesdeArchivo.datos.titulos[i]; // Título de cada apartado
                    document.getElementsByClassName("contenido")[i].value = datosDesdeArchivo.datos.contenidos[i]; // Contenido de cada apartado

                    if (datosDesdeArchivo.datos.casilla[i] == "t") { // Si el valor de esta variable es t, significa que la persona ha seleccionado la casilla de ejemplo
                        document.getElementsByClassName("casilla-ejemplo")[i].checked = true; // Marcamos la casilla de ejemplo
                        document.getElementsByClassName("introducirEjemplo")[i].style.display = "block"; // Aparece el div que contiene los campos para introducir un ejemplo
                        document.getElementsByClassName("contenidoHTML")[i].value = datosDesdeArchivo.datos.contenidoHTML[i]; // Contenido HTML (si hay ejemplo, siempre habrá contenido, ya sea html o una explicación). Esta parte se refiere al cuadrado azul oscuro de la izquierda.
                    }   

                    if (datosDesdeArchivo.datos.casillaCodigo[i] == "t") { // Si la persona había marcado la casilla de que quiere mostrar el código html en el contenedor azul de los ejemplos (el de la izquierda)
                        document.getElementsByClassName("escribir-HTML")[i].checked = true; // Marcamos la casilla de mostrar el código html
                    }

                    // SI EL EJEMPLO SELECCIONADO ES IMAGEN
                    if(datosDesdeArchivo.datos.tipoEjemplo[i] == "IMAGEN") {
                        document.getElementsByClassName("ejemplo-con-imagen")[i].style.display = "block"; // Para que aparezca el div oculto, para insertar la imagnen

                        let casillasEjemplo = document.getElementsByName(`elegir-ejemplo${[indiceApartados]}`);

                        for(let k = 0; k < casillasEjemplo.length; k++) {
                            if(casillasEjemplo[k].value == "IMAGEN") {
                                casillasEjemplo[k].checked = true;
                                codigos64.push(datosDesdeArchivo.datos.codigoImagen[i]); // AÑADE EL CODIGO EN BASE 64 A LA VARIABLE LLAMADA codigos64
                                document.getElementsByClassName("informacion-imagen")[i].innerHTML = "La imagen original está cargada (puedes comprobarlo en la previsualización). Pero, si quieres, puedes seleccionar otra para cambiarla."
                                    
                                document.getElementsByClassName("anchoImagen")[i].value = datosDesdeArchivo.datos.ancho[i]; // Número que introdujo la persona en ancho
                                if (datosDesdeArchivo.datos.ancho[i] !== "") { // Si la persona había escrito un número en el campo de ancho 
                                    document.getElementsByClassName("medidaAnchoImagen")[i].value = datosDesdeArchivo.datos.medidaAncho[i]; // Unidad de medida seleccionada
                                }

                                document.getElementsByClassName("altoImagen")[i].value = datosDesdeArchivo.datos.alto[i]; // Número que introdujo la persona en alto
                                if (datosDesdeArchivo.datos.alto[i] !== "") { // Si la persona había escrito un número en el campo de ancho
                                    document.getElementsByClassName("medidaAltoImagen")[i].value = datosDesdeArchivo.datos.medidaAlto[i]; // Unidad de medida seleccionada
                                }
                                
                                if (datosDesdeArchivo.datos.intentaloTuImagen[i] == "t") {
                                document.getElementsByClassName("botonIntentalo")[i].checked = true;
                                }
                            }
                        }
                    
                    } else {
                        codigos64.push(""); // Si no es imagen, añade unas comillas vacías
                    }


                    // SI EL EJEMPLO SELECCIONADO ES DINÁMICO
                    if (datosDesdeArchivo.datos.tipoEjemplo[i] == "DINAMICO") {
                        document.getElementsByClassName("ejemplo-dinamico")[i].style.display = "block"; // Aparece el div correspondiente a insertar ejemplo dinámico

                        let casillasEjemplo = document.getElementsByName(`elegir-ejemplo${[indiceApartados]}`); // Accede a las tres posibles casillas

                        for(let k = 0; k < casillasEjemplo.length; k++) {
                            if(casillasEjemplo[k].value == "DINAMICO") {
                                casillasEjemplo[k].checked = true; // Marca la casilla correspondiente a ejemplo dinámico

                                if (datosDesdeArchivo.datos.intentaloTuDinamico[i] == "t") {  // Si ha elegifo insertar un botón de inténtalo tú mismo
                                document.getElementsByClassName("botonIntentalo2")[i].checked = true; // Marca la casilla correspondiente
                                }
                            }
                        }
                    }

                    // SI EL EJEMPLO SELECCIONADO ES IFRAME
                    if (datosDesdeArchivo.datos.tipoEjemplo[i] == "IFRAME") {
                        document.getElementsByClassName("ejemplo-con-iframe")[i].style.display = "block"; // Aparece el div correspondiente a insertar ejemplo con iframe

                        let casillasEjemplo = document.getElementsByName(`elegir-ejemplo${[indiceApartados]}`); // Accede a las tres posibles casillas

                        for(let k = 0; k < casillasEjemplo.length; k++) {
                            if(casillasEjemplo[k].value == "IFRAME") {
                                casillasEjemplo[k].checked = true; // Marca la casilla correspondiente a iframe

                                var tipodeIframe = document.getElementsByName(`elegir-iframe${[indiceApartados]}`); // Crea un objeto de tres opciones
            
                                for (let g = 0; g < tipodeIframe.length; g++ ) {

                                    if (datosDesdeArchivo.datos.tipoIframe[i] == "PAGINA") { // Si el iframe que quiere introducir es una página externa
                                        document.getElementById(`pagina-externa${[indiceApartados]}`).style.display = "block"; // Muestra el div correspondiente
                                        tipodeIframe[0].checked = true; // Marca la casilla
                                        document.getElementsByClassName("direccion-iframe")[i].value = datosDesdeArchivo.datos.urlPagina[i]; // Dirección de la página
                                    } 
                                    else if (datosDesdeArchivo.datos.tipoIframe[i] == "ARCHIVO") { // Si el iframe que quiere introducir es un archivo (por ejemplo, un pdf)
                                        document.getElementById(`iframe-archivo${[indiceApartados]}`).style.display = "block"; // Muestra el div correspondiente
                                        tipodeIframe[1].checked = true; // Marca la casilla
                                        document.getElementsByClassName("infoArchivo")[i].innerHTML = `Por motivos de seguridad, no se puede acceder al archivo que subiste. Pero el nombre es: ` + datosDesdeArchivo.datos.urlArchivo[i]; // Probar a convertir en base64
                                    }
                                    else if (datosDesdeArchivo.datos.tipoIframe[i] == "INCRUSTAR") { // Si el iframe que quiere introducir es, por ejemplo, de youtube
                                        document.getElementById(`iframe-incrustar${[indiceApartados]}`).style.display = "block"; // Muestra el div correspondiente
                                        tipodeIframe[2].checked = true; // Marca la casilla
                                        document.getElementsByClassName("codigo-incrustracion")[i].value = datosDesdeArchivo.datos.urlIncrustar[i]; // Dirección de la página
                                    }
                                }
                                    
                                // Inténtalo tú mismo de ejemplo iframe  
                                if (datosDesdeArchivo.datos.intentaloTuIframe[i] == "t") { // Si ha elegido poner un botón de inténtalo tú mismo
                                document.getElementsByClassName("botonIntentalo3")[i].checked = true; // Selecciona la casilla correspondiente
                                }
                            }
                        }
                    } 
                    
                    // BOTONES DE CONOCE MÁS, ATENCIÓN Y PRUEBA ESTO (En el primer apartado)

                    if(datosDesdeArchivo.datos.casillaBotones[i] == "t") { // Si había seleccionado la casilla de introducir un botón
                        document.getElementsByClassName("casilla-boton")[i].checked = true; // Marca la casilla
                        document.getElementsByClassName("introducirBoton")[i].style.display = "block"; // Muestra el div correspondiente

                        if(datosDesdeArchivo.datos.casillaAtencion[i] == "t") { // Si había seleccionado la casilla de Atención
                            document.getElementsByClassName("mostrarAtencion")[i].checked = true; // Marca la casilla
                            document.getElementById(`introduceAtencion${contador}`).style.display = "block"; // Muestra el div correspondiente
                            document.getElementsByClassName("atencion")[i].value = datosDesdeArchivo.datos.infoAtencion[i];
                        }

                        if(datosDesdeArchivo.datos.casillaConoceMas[i] == "t") { // Si había seleccionado la casilla de Conoce más
                            document.getElementsByClassName("mostrarConoceMas")[i].checked = true; // Marca la casilla
                            document.getElementById(`introduceConoceMas${contador}`).style.display = "block"; // Muestra el div correspondiente
                            document.getElementsByClassName("conoceMas")[i].value = datosDesdeArchivo.datos.infoConoceMas[i];
                        }

                        if(datosDesdeArchivo.datos.casillaPruebaEsto[i] == "t") { // Si había seleccionado la casilla de Prueba esto
                            document.getElementsByClassName("mostrarPruebaEsto")[i].checked = true; // Marca la casilla
                            document.getElementById(`introducePruebaEsto${contador}`).style.display = "block"; // Muestra el div correspondiente
                            document.getElementsByClassName("pruebaEsto")[i].value = datosDesdeArchivo.datos.infoPruebaEsto[i];
                        }

                    } 

                    
                    // SUBAPARTADOS

                    if(datosDesdeArchivo.datos.numeroSubapartados[i] !== 0) { // Si hay algún subapartado
                        for (let l = 0; l < datosDesdeArchivo.datos.numeroSubapartados[i]; l++) { // Itera sobre cada subapartado
                            nuevoSubapartado(i); // Llama a la función que inserta subapartados (HAY QUE HACERLO TANTAS VECES COMO SUBAPARTADOS HAYA)

                            let subapartadoCorrespondiente = divContenedorApartados[i].getElementsByClassName("contenedorSubapartados")[l];

                            divContenedorApartados[i].getElementsByClassName("subtitulo")[l].value = datosDesdeArchivo.datos.conjuntoSubtitulos[i][l]; // Subítulo de cada apartado
                            divContenedorApartados[i].getElementsByClassName("subcontenido")[l].value = datosDesdeArchivo.datos.conjuntoSubcontenidos[i][l]; // Contenido de cada apartado

                            if (datosDesdeArchivo.datos.conjuntoCasillasSubejemplos[i][l] == "t") { // Si el valor de esta variable es t, significa que la persona ha seleccionado la casilla de ejemplo
                                divContenedorApartados[i].getElementsByClassName("casilla-subejemplo")[l].checked = true; // Marcamos la casilla de ejemplo
                                divContenedorApartados[i].getElementsByClassName("introducirSubejemplo")[l].style.display = "block"; // Aparece el div que contiene los campos para introducir un ejemplo
                                divContenedorApartados[i].getElementsByClassName("subContenidoHTML")[l].value = datosDesdeArchivo.datos.conjuntoContenidosHTML[i][l]; // Contenido HTML (si hay ejemplo, siempre habrá contenido, ya sea html o una explicación). Esta parte se refiere al cuadrado azul oscuro de la izquierda.
                            
                                if (datosDesdeArchivo.datos.conjuntoCasillasCodigoHTML[i][l] == "t") { // Si la persona había marcado la casilla de que quiere mostrar el código html en el contenedor azul de los ejemplos (el de la izquierda)
                                    divContenedorApartados[i].getElementsByClassName("subescribir-HTML")[l].checked = true; // Marcamos la casilla de mostrar el código html
                                }

                                // SI EL EJEMPLO SELECCIONADO ES IMAGEN
                                if(datosDesdeArchivo.datos.conjuntoTiposSubejemplos[i][l] == "IMAGEN") {
                                    divContenedorApartados[i].getElementsByClassName("SUBejemplo-con-imagen")[l].style.display = "block"; // Para que aparezca el div oculto, para insertar la imagnen

                                    let SUBcasillasEjemplo = subapartadoCorrespondiente.getElementsByClassName("elegir-subejemplo"); // Accede a las tres posibles casillas

                                    for(let k = 0; k < SUBcasillasEjemplo.length; k++) {
                                        if(SUBcasillasEjemplo[k].value == "IMAGEN") {
                                            SUBcasillasEjemplo[k].checked = true;

                                            let subcodigo64 = datosDesdeArchivo.datos.conjuntoSubCodigosImagen[i][l];
                                            cargarSubImagen(i, null, l, subcodigo64); // Llama a la función cargarSubImagen pero, en lugar de pasar el subcontador, pasamos el código
                                            
                                            divContenedorApartados[i].getElementsByClassName("SUBinformacion-imagen")[l].innerHTML = "La imagen original está cargada (puedes comprobarlo en la previsualización). Pero, si quieres, puedes seleccionar otra para cambiarla." // Mensaje que aparece en el párrafo vacío
                                                
                                            divContenedorApartados[i].getElementsByClassName("SUBanchoImagen")[l].value = datosDesdeArchivo.datos.conjuntoAnchos[i][l]; // Número que introdujo la persona en ancho
                                            if (datosDesdeArchivo.datos.conjuntoAnchos[i][l] !== "") { // Si la persona había escrito un número en el campo de ancho 
                                                divContenedorApartados[i].getElementsByClassName("SUBmedidaAnchoImagen")[l].value = datosDesdeArchivo.datos.conjuntoMedidasAnchos[i][l]; // Unidad de medida seleccionada
                                            }

                                            divContenedorApartados[i].getElementsByClassName("SUBaltoImagen")[l].value = datosDesdeArchivo.datos.conjuntoAltos[i][l]; // Número que introdujo la persona en alto
                                            if (datosDesdeArchivo.datos.conjuntoAltos[i][l] !== "") { // Si la persona había escrito un número en el campo de ancho
                                                divContenedorApartados[i].getElementsByClassName("SUBmedidaAltoImagen")[l].value = datosDesdeArchivo.datos.conjuntoMedidasAltos[i][l]; // Unidad de medida seleccionada
                                            }
                                            
                                            if (datosDesdeArchivo.datos.conjuntointentaloTuImagen[i][l] == "t") { // Si había seleccionado la casilla de inténtalo tú mismo
                                                divContenedorApartados[i].getElementsByClassName("SUBbotonIntentalo")[l].checked = true;
                                            }
                                        }
                                    }
                                
                                } else {
                                    subcodigos64.push(""); // Si no es imagen, añade unas comillas vacías */
                                }

                                // SI EL EJEMPLO SELECCIONADO ES DINÁMICO
                                if (datosDesdeArchivo.datos.conjuntoTiposSubejemplos[i][l] == "DINAMICO") {
                                    divContenedorApartados[i].getElementsByClassName("SUBejemplo-dinamico")[l].style.display = "block"; // Aparece el div correspondiente a insertar ejemplo dinámico

                                    let SUBcasillasEjemplo = subapartadoCorrespondiente.getElementsByClassName("elegir-subejemplo"); // Accede a las tres posibles casillas

                                    for(let k = 0; k < SUBcasillasEjemplo.length; k++) {
                                        if(SUBcasillasEjemplo[k].value == "DINAMICO") {
                                            SUBcasillasEjemplo[k].checked = true; // Marca la casilla correspondiente a ejemplo dinámico

                                            if (datosDesdeArchivo.datos.conjuntoIntentaloTuDinamico[i][l] == "t") {  // Si ha elegifo insertar un botón de inténtalo tú mismo
                                                divContenedorApartados[i].getElementsByClassName("SUBbotonIntentalo2")[l].checked = true; // Marca la casilla correspondiente
                                            }
                                        }
                                    }
                                }

                                // SI EL EJEMPLO SELECCIONADO ES IFRAME
                                if (datosDesdeArchivo.datos.conjuntoTiposSubejemplos[i][l] == "IFRAME") {
                                    divContenedorApartados[i].getElementsByClassName("SUBejemplo-con-iframe")[l].style.display = "block"; // Aparece el div correspondiente a insertar ejemplo con iframe

                                    let SUBcasillasEjemplo = subapartadoCorrespondiente.getElementsByClassName("elegir-subejemplo"); // Accede a las tres posibles casillas

                                    for(let k = 0; k < SUBcasillasEjemplo.length; k++) {
                                        if(SUBcasillasEjemplo[k].value == "IFRAME") {
                                            SUBcasillasEjemplo[k].checked = true; // Marca la casilla correspondiente a iframe

                                            var SUBtipodeIframe = subapartadoCorrespondiente.getElementsByClassName("SUBelegir-iframe"); // Crea un objeto de tres opciones
                                            for (let g = 0; g < SUBtipodeIframe.length; g++ ) {

                                                if (datosDesdeArchivo.datos.conjuntoTipoIframe[i][l] == "PAGINA") { // Si el iframe que quiere introducir es una página externa
                                                    divContenedorApartados[i].getElementsByClassName("SUBpagina-externa")[l].style.display = "block"; // Muestra el div correspondiente
                                                    divContenedorApartados[i].getElementsByClassName("SUBelegir-pagina")[l].checked = true; // Marca la casilla
                                                    divContenedorApartados[i].getElementsByClassName("SUBdireccion-iframe")[l].value = datosDesdeArchivo.datos.conjuntoUrlPagina[i][l]; // Dirección de la página
                                                } 
                                                else if (datosDesdeArchivo.datos.conjuntoTipoIframe[i][l] == "ARCHIVO") { // Si el iframe que quiere introducir es un archivo (por ejemplo, un pdf)
                                                    divContenedorApartados[i].getElementsByClassName("SUBiframe-archivo")[l].style.display = "block"; // Muestra el div correspondiente
                                                    divContenedorApartados[i].getElementsByClassName("SUBelegir-archivo")[l].checked = true; // Marca la casilla
                                                    divContenedorApartados[i].getElementsByClassName("SUBinfoArchivo")[l].innerHTML = `Por motivos de seguridad, no se puede acceder al archivo que subiste. Pero el nombre es: ` + datosDesdeArchivo.datos.conjuntoUrlArchivo[i][l]; 
                                                }
                                                else if (datosDesdeArchivo.datos.conjuntoTipoIframe[i][l] == "INCRUSTAR") { // Si el iframe que quiere introducir es, por ejemplo, de youtube
                                                    divContenedorApartados[i].getElementsByClassName("SUBiframe-incrustar")[l].style.display = "block"; // Muestra el div correspondiente
                                                    divContenedorApartados[i].getElementsByClassName("SUBelegir-incrustar")[l].checked = true; // Marca la casilla
                                                    divContenedorApartados[i].getElementsByClassName("SUBcodigo-incrustracion")[l].value = datosDesdeArchivo.datos.conjuntoUrlIncrustar[i][l]; // Dirección de la página
                                                }
                                            }
                                                
                                            // Inténtalo tú mismo de ejemplo iframe  
                                            if (datosDesdeArchivo.datos.conjuntoIntentaloTuIframe[i][l] == "t") { // Si ha elegido poner un botón de inténtalo tú mismo
                                                divContenedorApartados[i].getElementsByClassName("SUBbotonIntentalo3")[l].checked = true; // Selecciona la casilla correspondiente
                                            }
                                        }
                                    }
                                }

                            }  // Fin de caso en que hay ejemplo

                            // BOTONES DE CONOCE MÁS, ATENCIÓN Y PRUEBA ESTO (En el primer apartado)
                            if(datosDesdeArchivo.datos.conjuntocCasillaBotones[i][l] == "t") { // Si había seleccionado la casilla de introducir un botón
                                divContenedorApartados[i].getElementsByClassName("SUBcasilla-boton")[l].checked = true; // Marca la casilla
                                divContenedorApartados[i].getElementsByClassName("introduceSUBBoton")[l].style.display = "block"; // Muestra el div correspondiente

                                if(datosDesdeArchivo.datos.conjuntoCasillaAtencion[i][l] == "t") { // Si había seleccionado la casilla de Atención
                                    divContenedorApartados[i].getElementsByClassName("SUBmostrarAtencion")[l].checked = true; // Marca la casilla
                                    divContenedorApartados[i].getElementsByClassName("introduceSUBatencion")[l].style.display = "block"; // Muestra el div correspondiente
                                    divContenedorApartados[i].getElementsByClassName("SUBatencion")[l].value = datosDesdeArchivo.datos.conjuntoInfoAtencion[i][l];
                                }

                                if(datosDesdeArchivo.datos.conjuntoCasillaConoceMas[i][l] == "t") { // Si había seleccionado la casilla de Conoce más
                                    divContenedorApartados[i].getElementsByClassName("SUBmostrarConoceMas")[l].checked = true; // Marca la casilla
                                    divContenedorApartados[i].getElementsByClassName("introduceSUBConoceMas")[l].style.display = "block"; // Muestra el div correspondiente
                                    divContenedorApartados[i].getElementsByClassName("SUBconoceMas")[l].value = datosDesdeArchivo.datos.conjuntoInfoConoceMas[i][l];
                                }

                                if(datosDesdeArchivo.datos.conjuntoCasillaPruebaEsto[i][l] == "t") { // Si había seleccionado la casilla de Prueba esto
                                    divContenedorApartados[i].getElementsByClassName("SUBmostrarPruebaEsto")[l].checked = true; // Marca la casilla
                                    divContenedorApartados[i].getElementsByClassName("introduceSUBPruebaEsto")[l].style.display = "block"; // Muestra el div correspondiente
                                    divContenedorApartados[i].getElementsByClassName("SUBpruebaEsto")[l].value = datosDesdeArchivo.datos.conjuntoInfoPruebaEsto[i][l];
                                }

                            }
        
                        } // Fin de cada subapartado
                    } // Fin de caso en que hay subapartado

                    indiceApartados++;

                } // Final de los sucesivos apartados

            } // Final de todos los apartados



            // PÁGINA ANTERIOR Y SIGUIENTE
            if (!nombreArchivoJSON.startsWith("borrador")) { // Si el nombre del archivo NO empieza por la palabra "borrador"

                let selectPaginaAnterior = document.getElementById("selectPaginaAnterior");
                let selectPaginaSiguiente = document.getElementById("selectPaginaSiguiente");

                document.getElementById("paginas-anterior-siguiente").style.display = "block";

                // AÑADIR OPCIONES A PÁGINA ANTERIOR
                for (let l = 0; l < nombreArchivos.length; l++) { // Vamos pasando por cada título almacenado en el json
                    if(nombreArchivos[l] !== "") { // Si el título no es un campo vacío
                        var newOption = document.createElement("option"); // Crea un nuevo elemento de opción
                        
                        newOption.value = nombreArchivos[l]; // Establece el valor y el texto de la opción
                        newOption.text = nombreArchivos[l];

                        selectPaginaAnterior.add(newOption); // Añadir la opción al select

                        // Para seleccionar la opción que estuviera guardada
                        if(nombreArchivos[l] == datosDesdeArchivo.nombrePaginaAnterior) {
                            selectPaginaAnterior.value = nombreArchivos[l]
                        }
                    }
                }

                // AÑADIR OPCIONES A PÁGINA SIGUIENTE
                for (let l = 0; l < nombreArchivos.length; l++) { // Vamos pasando por cada título almacenado en el json
                    if(nombreArchivos[l] !== "") { // Si el título no es un campo vacío
                        var newOption = document.createElement("option"); // Crea un nuevo elemento de opción
                        
                        newOption.value = nombreArchivos[l]; // Establece el valor y el texto de la opción
                        newOption.text = nombreArchivos[l];

                        selectPaginaSiguiente.add(newOption); // Añadir la opción al select

                        // Para seleccionar la opción que estuviera guardada
                        if(nombreArchivos[l] == datosDesdeArchivo.nombrePaginaSiguiente) {
                            selectPaginaSiguiente.value = nombreArchivos[l];
                        }

                    }
                }
            }

        }; // Final del evento onload
          
    lector.readAsText(archivo);

    } else { // Si no ha seleccionado archivo
        alert("Por favor, seleccione un archivo JSON.");
    }
}


