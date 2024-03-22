// Declaración de variables globales para almacenar códigos base64 e imágenes principales
let codigos64 = []; // Array para almacenar las imágenes principales
let subcodigos64 = []; // Array para almacenar las subimágenes

// PARA CONVERTIR EN BASE 64 (ALMACENA EL CODIGO DE LA IMAGEN EN LA VARIABLE CODIGOIMAGEN)
function cargarImagen(index) { // Esta función se llama al pulsar el botón de seleccionar imagen
    let imagenInputs = document.getElementsByClassName("imagenPrincipal"); // Obtiene todos los elementos con la clase "imagen" (los input)
    let imagenInput = imagenInputs[index]; // Obtiene el input de tipo archivo específico según el índice (Si has llamado a la función con el índice 0, accede al primer input con esa clase)
    let imagen = imagenInput.files[0]; // Accede a la imagen como tal
    let reader = new FileReader(); // Crea un objeto FileReader para leer el contenido del archivo

    // Manejador de evento que se ejecuta cuando se completa la lectura del archivo
    reader.onload = function (e) {
        // Obtiene la representación base64 del contenido del archivo
        let codigo64 = e.target.result;
        codigos64[index] = codigo64; // Almacena el código en la posición correspondiente del array 
    };

    reader.readAsDataURL(imagen); // Inicia la lectura del contenido del archivo como una URL base64
}

    // LO MISMO PARA LAS SUBIMAGENES
    function cargarSubImagen(indice, subcontador, subindice, codigo) { // Argumentos: el índice del apartado en el que se va a añadir el subapartado, el subcontador con el que se diferencia el id, el subindice del subapartado (estos parámetros se pasan si se llama a la función desde el formulario principal). Si recuperamos un archivo json con información guardada, en lugar del subcontador pasaríamos el código en base64 almacenado. 

        // Verificar si el índice principal ya existe en el array subcodigos64
        if (!subcodigos64[indice]) {
            subcodigos64[indice] = []; // Si no existe, se crea un nuevo array en esa posición
        } 

        // Si se proporciona el parámetro 'codigo', simplemente lo añadimos al array (ESTO ES A LA HORA DE CARGAR LA INFORMACIÓN DEL JSON)
        if (codigo) {
            subcodigos64[indice][subindice] = codigo;
            return; // Salimos de la función después de añadir el código
        }

        let contenedorSubapartado = document.getElementById(`contenedorSubapartados${subcontador}`); // Accede al subapartado concreto dentro del cuál se encuentra la imagen
        let imagenInput = contenedorSubapartado.getElementsByClassName("SUBimagen")[0]; // Obtiene el input de tipo archivo específico (por la clase "SUBimagen". Recordar que ya estamos en el subapartado concreto, por lo que solo hay un input con esa clase)
        let imagen = imagenInput.files[0]; // Accede a la subimagen 
        let reader = new FileReader(); // Crea un objeto FileReader para leer el contenido del archivo

        // Manejador de evento que se ejecuta cuando se completa la lectura del archivo
        reader.onload = function (e) {
            // Obtiene la representación base64 del contenido del archivo
            let subcodigo64 = e.target.result;

            // Almacena el código base64 en la posición correspondiente del array bidimensional subcodigos64
            subcodigos64[indice][subindice] = subcodigo64;
        };

        reader.readAsDataURL(imagen); // Inicia la lectura del contenido del archivo como una URL base64
    }



// Nombre del archivo en función del título de la página seleccionado
let nombreSeleccionado; // En esta variable se almacena el nombre del archivo
function nombreArchivo() { // Esta función se llama cuando se cambia una opción del select que contiene los posibles títulos
    for (let i = 0; i < titulosBloques.length; i++) { // Itera por los títulos almacenados en el json
        if (document.getElementById("selectTitulo").value == titulosBloques[i]) { // Si el valor seleccionado en el select es igual al título actual
            nombreSeleccionado = nombreArchivos[i]; // El nombre del archivo tendrá el valor del nombre del archivo de la posición correspondiente
            nombreSeleccionado = nombreSeleccionado.replace(/ /, "_"); // Para reemplazar los espacios en blanco por una barra baja
            document.getElementById("nombre-archivo").value = nombreSeleccionado; // El campo de nombre de archivo se completa con el nombre correspondiente
            document.getElementById("nombre-archivo").disabled = "true"; // Y se deshabilita dicho campo
        }
    }
}

/*FUNCIÓN PRINCIPAL*/
var tituloPrincipal = tituloPrincipal; // Título del tutorial en sí 

function funcionPrincipal(boton) { // Esta función se puede llamar con el parámetro 'preview' (para la vista previa) o 'descarga' (si ya queremos descargar el archivo)

    // INICIALIZACION DE VARIABLES
    let divCuerpo = document.createElement("div"); // Crea un nuevo div que será el "cuerpo del documento", aquí podemos ir introduciendo los títulos, contenido, ejemplos...
    let indiceH2 = document.createElement("h2");  // Crea un h2 que irá dentro del ul del índice 
    let x = 0; // Inicializa una variable en 0. Esto es para los títulos
    let y = 0; // Inicializa una variable en 0. Esto es para lo del rango para cambiar la anchura del ejemplo (No puede ser la misma variable, ya que no va a haber el mismo número de títulos que de ejemplos)
    let z = 1; //Para ir incrementando el número del inténtalo tú mismo (tampoco va a haber el mismo número de inténtalo tú mismo que de ejemplos)
    let infoIntentalo = ""; // Esta variable servirá para ir acumulando información que hay que pasar al coordinador de cada grupo para que funcione el "inténtalo tú mismo". Se descargará en el txt final

    // INTEGRACIÓN CON PÁGINA INTERMEDIA
    let divCabecera = document.createElement("div"); // Crea un nuevo div que será la parte del header donde se contiene los logos de la página y del grupo además del menú

    // Logo (puede ser un icono propio o, por defecto, la casita)
    let codigoLogo = "";  // Inicializa variable para almacenar la ruta que tendrá

    if(imagen64 == "") { // Por defecto, la casita
        codigoLogo = `<div class="svgContainer">
        <svg class='logonosotros3 logonosotros3_index logo_bajado' version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">
        <title>Ir a página principal del tutorial</title>
        
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path class="casita" d="M2464 5106 c-23 -7 -63 -28 -90 -46 -63 -42 -2230 -2204 -2295 -2290
        -61 -80 -83 -149 -76 -237 9 -117 79 -217 186 -267 41 -19 67 -21 248 -24
        l203 -3 2 -1002 3 -1002 27 -51 c40 -76 70 -107 140 -145 l63 -34 522 -3 522
        -3 3 843 3 843 34 63 c38 70 69 100 145 140 l51 27 405 0 405 0 51 -27 c76
        -40 107 -70 145 -140 l34 -63 3 -843 3 -843 522 3 522 3 52 27 c66 35 116 85
        151 151 l27 52 3 1002 2 1002 203 3 c181 3 207 5 248 24 179 83 242 300 136
        469 -17 28 -156 176 -309 330 l-277 280 -3 610 -3 610 -34 63 c-38 70 -69 100
        -145 140 l-51 27 -245 0 -245 0 -63 -34 c-70 -38 -101 -70 -139 -145 -24 -45
        -27 -65 -31 -179 l-4 -129 -362 360 c-198 197 -383 374 -410 392 -86 58 -190
        75 -282 46z"/>
        </g>
        </svg>
        </div>`;
    }else { // Si la persona selecciona un icono propio
        codigoLogo += `<img class='logonosotros3 logonosotros3_index logo_bajado' src='${imagen64}' alt='logo grupo' title='Ir a página principal del tutorial'/>`; // Cómo queda la ruta completa, esto es lo que se añade al ejemplo
    }

    // Para saber la inicial seleccionada (irá en la cabecera)
    var inicialSeleccionada = ""; // Guarda la inicial del radio seleccionado (tema)
    var tituloSeleccionado; // Guarda el titulo del radio seleccionado (tema)
    var numeroRadios = 0; // Para iterar por las opciones

    if (iniciales !== undefined) { // Si la persona aún no ha cargado un json de página intermedia, el valor de iniciales será undefined. Con el if controlamos que no haya errores
        for(let i = 0; i < iniciales.length; i++) { // Itera por el número de iniciales almacenadas en el json
            if(iniciales[i] != "" && titulosTemas[i] != "" && color[i] != "") { // Si todos los campos están rellenos correctamente
                var radioIntermedio = document.getElementsByName("radioIntermedio")[i]; // La variable radioIntermedio tendrá el valor correspondiente
                if(radioIntermedio.checked) { // Si este radio estaba checkeado, significa que es el tema que ha elegido la persona
                    inicialSeleccionada = iniciales[i];
                    tituloSeleccionado = titulosTemas[i]; //Para poner el nombre del JSON
                numeroRadios++;
                }
            }
        }
    }

    // Para saber carpeta 
    // let valorSeleccionado = inicialSeleccionada; // Inicializamos variable que almacenará el valor seleccionado. Esto se pondrá tal cuál en la parte correspondiente a la función para seleccionar el icono
    if (inicialSeleccionada !== "") {
        var carpeta = inicialSeleccionada; 
    } else {
        var carpeta = "borrador"
    }


    /*TÍTULO DE LA PÁGINA*/
    let titulo; 

    let campoTitulo = document.getElementById("titulo");  // Accedemos al input de tipo texto 
    if (campoTitulo.style.display !== "none") { // Si el campo está visible, significa que la persona aún no ha cargado un json de una página intermedia (ya que al cargar un json de página intermedia, este campo queda con display:none para que no sea visible)
        titulo = campoTitulo.value; // La variable titulo tendrá el valor que la persona ha introducido en este campo
    } else { // Si no, significa que la persona ya ha cargado un json de una página intermedia y que, por tanto, ya está disponible el select
        titulo = document.getElementById("selectTitulo").value; // Y el título tendrá el valor que la persona haya seleccionado en el select
    }

    /*NOMBRE DEL ARCHIVO -- (Será necesario un par de veces a lo largo de la función)*/
    let nombreDelArchivo = document.getElementById("nombre-archivo").value; // Guarda el nombre del archivo en esta variable, que luego usaremos al añadir los botones de "inténtalo tú mismo" 
    
    /*ORIENTACIONES PEDAGÓGICAS*/
    let orientaciones = document.getElementById("orientaciones").value;

    orientaciones = orientaciones.replace(/\n*<(o|u)l>\s*\n*<li>/g, '<$1l><li>') // Elimina los saltos de línea manuales antes de una lista (ol o ul)
    .replace(/<\/li>\s*\n*<\/(o|u)l>\n*/g, '</li></$1l>') // Elimina los espacios después de </ol> o </ul>
    .replace(/<\/li>\n<li>/g, '</li><li>') // Elimina los saltos de línea entre <li>  (ESTAS CINCO LÍNEAS SON PARA CONTROLAR LOS SALTOS DE LÍNEA EN LAS LISTAS)
    .replace(/(<\/li>)\n+(?=<li>|<\/?(o|u)l>)/g, '$1\n') // Reduce múltiples saltos de línea entre elementos <li> a uno solo NUEVO
    .replace(/<\/li>\s*\n*<\/(o|u)l>\n*/g, '</li></$1l>') // Elimina los espacios después de </ol> o </ul> NUEVO

    orientaciones = orientaciones.replace(/\n/g, '<br>'); // Para reemplazar los saltos de línea por br (para no tener que introducir a mano los br)


    /*CADA APARTADO*/

    let divContenedorApartados = document.getElementsByClassName("contenedorApartados"); // Accede a los div de cada apartado. Esto genera un array que contiene todos los div con la clase "contenedorApartados". Ahora, podemos ir accediendo a cada div gracias a su índice

    for (let i = 0; i < divContenedorApartados.length; i++) { // Va accediendo a cada div en orden

        /*TITULO*/
        let contenidoDelTitulo =  divContenedorApartados[i].getElementsByClassName("titulo")[0].value; // Accede al input de titulo gracias a su clase. En vez de buscar el input con esta clase en el documento, lo busca dentro del div correspondiente

        if (contenidoDelTitulo !== "") { // Si el contenido del título no son unas comillas vacías, es decir, si la persona ha escrito algún título
            
            let nuevoTitulo = document.createElement("h2"); // Crea una nueva etiqueta h2

            x += 1; // Incrementa x en 1

            nuevoTitulo.id = "titulo" + x; // Crea un id dentro del h2 que hemos creado, con la palabra "titulo" y el número se va incrementando --- <h2 id="titulox"></h2>

            nuevoTitulo.innerHTML = x + ". " + contenidoDelTitulo; // Agrega el texto introducido en el campo de entrada a esta nueva etiqueta, pero antes le pone el número correspondiente    ------ <h2 id="titulox">x. TITULO</h2>

            divCuerpo.appendChild(nuevoTitulo); // Añade el título al div

            divCuerpo.innerHTML += "\n\t"; // Para que en el propio html, aparezca cada título uno debajo de otro y tabulado, en lugar de aparecer en la misma línea
    
        /*Para el índice*/
            let enlace = document.createElement("a"); // Crea un a (etiqueta de enlace, por cada título)

            enlace.href = "#titulo" + x;  // A la etiqueta a le añade un href. Ej. <a href="#titulo1"></a> (el número se va incrementando)

            enlace.className = "indicecolor"; // A la etiqueta le añade la clase para que los enlaces no cambien de color una vez pulsados -- <a href="#titulo1" class="indicecolor"></a>

            let li = document.createElement("li"); // Crea un nuevo li

            li.innerHTML = contenidoDelTitulo; // Incorporta el título introducido en el li. Ej. <li>Titulo</li>

            enlace.appendChild(li); // Incorpora el li dentro del enlace  --- <a href="#titulo1" class="indicecolor"><li>Titulo</li></a>

            indiceH2.appendChild(enlace); // Agrega el enlace con el título como último elemento del h2

            indiceH2.innerHTML += "\n\t\t\t\t\t";
        }


        /*CONTENIDO*/

            let valorDelContenido = divContenedorApartados[i].getElementsByClassName("contenido")[0].value; // Accede al valor introducido en el textarea correspondiente

            valorDelContenido = valorDelContenido.replace(/\n*<(o|u)l>\s*\n*<li>/g, '<$1l><li>') // Elimina los saltos de línea manuales antes de una lista (ol o ul)
            .replace(/<\/li>\s*\n*<\/(o|u)l>\n*/g, '</li></$1l>') // Elimina los espacios después de </ol> o </ul>
            .replace(/<\/li>\n<li>/g, '</li><li>') // Elimina los saltos de línea entre <li>  (ESTAS CINCO LÍNEAS SON PARA CONTROLAR LOS SALTOS DE LÍNEA EN LAS LISTAS)
            .replace(/(<\/li>)\n+(?=<li>|<\/?(o|u)l>)/g, '$1\n') // Reduce múltiples saltos de línea entre elementos <li> a uno solo NUEVO
            .replace(/<\/li>\s*\n*<\/(o|u)l>\n*/g, '</li></$1l>') // Elimina los espacios después de </ol> o </ul> NUEVO
            // TABLAS
            .replace(/\s*\n*<t(able|head|body|r|h|d)>/g, '<t$1>') // Para eliminar los espacios al principio
            .replace(/<\/t(able|head|body|r|h|d)>\s/g, '</t$1>'); // Para eliminar los espacios al final

            valorDelContenido = valorDelContenido.replace(/\n/g, '<br>'); // Para reemplazar los saltos de línea por br 
            
            let nuevoContenido = document.createElement("p"); // Crea una nueva etiqueta p
            nuevoContenido.innerHTML = valorDelContenido; // Agrega el texto introducido en el campo de entrada a esta nueva etiqueta    ---- <p>CONTENIDO</p>
            
            divCuerpo.appendChild(nuevoContenido); // Añade el contenido al div

            divCuerpo.innerHTML += "\n\t\t\t\t";

        
        /*EJEMPLO*/

            let contenidoHTML = divContenedorApartados[i].getElementsByClassName("contenidoHTML")[0].value; // Accede al valor introducido en el textarea

            if(contenidoHTML !== "") { // Si el valor introducido no es una cadena vacía (es decir, que la persona haya introducido ejemplo)
               
                /*PARA SABER QUÉ TIPO DE EJEMPLO SE HA ELEGIDO: SI IMAGEN, INTERACTIVO o IFRAME*/

                let opcionesEjemplo = divContenedorApartados[i].getElementsByClassName("elegir-ejemplo"); // Crea un objeto que incluye las dos casillas de elegir ejemplo: insertar imagen / insertar ejemplo dinámico / insertar iframe
                let valorSeleccionado;

                for (let i = 0; i < opcionesEjemplo.length; i++) {
                    if (opcionesEjemplo[i].checked) {
                        valorSeleccionado = opcionesEjemplo[i].value; // Devuelve el valor seleccionado (el valor puede ser "IMAGEN" o "DINAMICO")
                        break;
                    }
                }

                // SI LA CASILLA SELECCIONADA ES LA DE INSERTAR IMAGEN
                if (valorSeleccionado == "IMAGEN") {

                    /*PARA QUE FUNCIONE EL BOTÓN DE INTÉNTALO TU*/
                    let nuevoCodigo = ""; // Inicialidar una nueva variable 
                    nuevoCodigo += contenidoHTML;
                    nuevoCodigo = nuevoCodigo.replace(/\n/g, "\\n"); //Reemplaza los saltos de línea por nada
                    nuevoCodigo = nuevoCodigo.replace(/"/g, "'"); // Reeemplaza las comillas dobles por comillas simples
                    /*FIN BOTÓN INTÉNTALO*/

                    let casillaHTML = divContenedorApartados[i].querySelector(".escribir-HTML"); // Accede a la casilla para saber si la persona quiere mostrar el código HTML

                    if (casillaHTML.checked) { // Si la casilla de escribir en HTML está seleccionada, se cambian las etiquetas de apertura y cierre para que aparezca el código como ejemplo
                        // CONTENEDOR DE LA IZQUIERDA
                        contenidoHTML = contenidoHTML.replace(/</g, "&lt;"); // Reemplaza < con &lt;
                        contenidoHTML = contenidoHTML.replace(/>/g, "&gt;"); // Reemplaza > con &gt;
                    }
                    contenidoHTML = contenidoHTML.replace(/\n/g, "<br>"); // Para reemplazar los saltos de línea por br (siempre pasa)
                    

                    /*PARA CONTROLAR EL ANCHO Y ALTO DE LAS IMÁGENES - NUEVO*/

                    let medidaAnchoImagen; // Aquí irá la medida seleccionada por la persona (%, px o em) (en relación al ancho)
                    let numeroAnchoImagen; // Aquí irá el número introducido por la persona (en relación al ancho)

                    let medidaAltoImagen; // Aquí irá la medida seleccionada por la persona (%, px o em) (en relación al alto)
                    let numeroAltoImagen; // Aquí irá el número introducido por la persona (en relación al ancho)

                    let medidaAnchoImagenSeleccionada = divContenedorApartados[i].getElementsByClassName("medidaAnchoImagen")[0].value; // Accede a la medida (%, px o em) seleccionado por la persona
                    let numeroAnchoImagenSeleccionado = divContenedorApartados[i].getElementsByClassName("anchoImagen")[0].value; // Accede al número introducido por la persona

                    let medidaAltoImagenSeleccionada = divContenedorApartados[i].getElementsByClassName("medidaAltoImagen")[0].value; // Accede a la medida (%, px o em) seleccionado por la persona
                    let numeroAltoImagenSeleccionado = divContenedorApartados[i].getElementsByClassName("altoImagen")[0].value; // Accede al número introducido por la persona

                    let estilosImagen = ""; // Aquí se almacenará el style con el ancho, el alto o ambos
                    
                    if (numeroAnchoImagenSeleccionado !== "") { // Si ha escrito un número en el ancho
                        medidaAnchoImagen = medidaAnchoImagenSeleccionada;
                        numeroAnchoImagen = numeroAnchoImagenSeleccionado;

                        estilosImagen = `style='max-width: ${numeroAnchoImagen}${medidaAnchoImagen}'`;
                    } 

                    if (numeroAltoImagenSeleccionado !== "") { // Si ha escrito un número en el alto
                        medidaAltoImagen = medidaAltoImagenSeleccionada;
                        numeroAltoImagen = numeroAltoImagenSeleccionado;

                        estilosImagen = `style='max-height: ${numeroAltoImagen}${medidaAltoImagen}'`;
                    } 

                    if ((numeroAnchoImagenSeleccionado !== "") && (numeroAltoImagenSeleccionado !== "")) { // Si ha escrito ancho y alto 

                        estilosImagen = `style='max-width: ${numeroAnchoImagen}${medidaAnchoImagen}; max-height: ${numeroAltoImagen}${medidaAltoImagen}'`;
                    } 
    
                    let codigoImagen = `<img class='img' src='${codigos64[i]}' alt='ejemplo' ${estilosImagen}>`; // Cómo queda la ruta completa, esto es lo que se añade al ejemplo


                    // BOTÓN DE INTÉNTALO TÚ MISMO 

                    let botonIntentaloTu = divContenedorApartados[i].querySelector(".botonIntentalo"); // Accede al chebox de "añadir inténtalo tú mismo" 
                    
                    let codigoIntentalo = ""; // Inicializa una variable para agregar el código del "inténtalo tú mismo" en caso de haber seleccionado la casilla

                    if (botonIntentaloTu.checked) { // Si el botón está selecionado

                        codigoIntentalo = `<button class='display' onclick="abrirNuevaVentana('${carpeta}_${nombreDelArchivo}.html-${z}');">Inténtalo tú mismo</button>`;
                        
                        /*BOTÓN DE INTÉNTALO TU*/
                        infoIntentalo += `case "${carpeta}_${nombreDelArchivo}.html-${z}": \n codigo = "${nuevoCodigo}" \n break; \n\n`  // Esta variable la usamos al final de la función principal (Nota: ahora mismo está programado para que la información aparezca en un párrafo al final del formulario. Pero si lo cambiamos para que se muestre en la consola (o para modificar el javascript), hay que sustituir <br> por \n)
                        /*FIN BOTÓN INTÉNTALO*/

                        z += 1; // Se va incrementando en 1 el valor de z
                    } 
                    
                    
                    // Creamos una variable que incluye el código correspondiente a un contenedor de ejemplo, introducimos el contenido del html en el lugar correspondiente, y la ruta de la iamgen (obtenida con la función anterior) en el lugar correspondiente
                    let ejemplo = `
                    <div class="contenedor">

                        <!-- Código ejemplo -->

                        <div class="codigo">
                            <code>
                                ${contenidoHTML} 
                            </code>
                        </div>

                        <!-- Fin código ejemplo -->

                        <!-- Resultado ejemplo -->

                        <div class="resultado">
                            <div style="padding: 10px;"> <!--Para que el ejemplo no aparezca pegado al borde-->
                            ${codigoImagen}
                            </div>
                        </div>

                        <!-- Fin resultado ejemplo -->
                    </div>

                    <!-- FIN EJEMPLO CON CÓDIGO -->

                    <!-- Botón inténtalo tú mismo -->

                    <div>
                        ${codigoIntentalo}
                    </div>

                    <!-- Fin botón inténtalo tú mismo --><br>

                    <!-- Inicio del rango -->

                    <div>
                        <label for="rango" class="fuenterango">Elige anchura de visualización: </label>
                        <input type="range" class="rango" min="0" max="100" value="45" onchange="cambiarAncho(${y})">

                    </div>
                    <p></p>

                    <!-- Fin del rango -->`

                    y += 1; // Suma 1 cada vez que llama. Importante ponerla después del código para que la primera vez sea 0

                    divCuerpo.insertAdjacentHTML('beforeend', ejemplo); // Añade el html con el contenido al div principal del "cuerpo del documento". En este caso hay que poner lo de inserAdjacentHTML porque el contenido es html como tal, no está incluido en una etiqueta <p> por ejemplO

                }

                // SI LA CASILLA SELECCIONADA ES LA INSERTAR EJEMPLO DINÁMICO

                if (valorSeleccionado == "DINAMICO") {

                    // CONTENEDOR LA DERECHA (EJEMPLO DINÁMICO - EL CÓDIGO SE INTRODUCE TAL CUÁL)
                    let contenidoOriginalHTML = contenidoHTML; // Copia el contenido del HTML para que no se modifique

                    /*BOTÓN DE INTÉNTALO TU*/
                    let nuevoCodigo = ""; // Inicialidad una nueva variable 
                    nuevoCodigo += contenidoHTML;
                    nuevoCodigo = nuevoCodigo.replace(/\n/g, "\\n"); //Reemplaza los saltos de línea por nada
                    nuevoCodigo = nuevoCodigo.replace(/"/g, "'"); // Reeemplaza las comillas dobles por comillas simples
                    /*FIN BOTÓN INTÉNTALO TÚ MISMO*/

                    let casillaHTML = divContenedorApartados[i].querySelector(".escribir-HTML"); // Accede a la casilla para saber si la persona quiere mostrar el código HTML
                    casillaHTML.checked = true; // Si la persona selecciona ejemplo dinámico, siempre tiene que estar marcada esta casilla para que el ejemplo dinámico aparezca solo a la derecha y no en los dos contenedores

                    if (casillaHTML.checked) { // Si la casilla de escribir en HTML está seleccionada, se cambian las etiquetas de apertura y cierre para que aparezca el código como ejemplo
                        // CONTENEDOR DE LA IZQUIERDA (SE INTRODUCE COMO UN PÁRRAFO)
                        contenidoHTML = contenidoHTML.replace(/</g, "&lt;"); // Reemplaza < con &lt;
                        contenidoHTML = contenidoHTML.replace(/>/g, "&gt;"); // Reemplaza > con &gt;
                    }
                    contenidoHTML = contenidoHTML.replace(/\n/g, "<br>"); // Para reemplazar los saltos de línea por br 


                    // BOTÓN DE INTÉNTALO TÚ MISMO 
                    let botonIntentaloTu = divContenedorApartados[i].querySelector(".botonIntentalo2"); // Accede al chebox de "añadir inténtalo tú mismo" 
                    
                    let codigoIntentalo = ""; // Inicializa una variable para agregar el código del "inténtalo tú mismo" en caso de haber seleccionado la casilla

                    if (botonIntentaloTu.checked) { // Si el botón está selecionado

                        codigoIntentalo = `<button class='display' onclick="abrirNuevaVentana('${carpeta}_${nombreDelArchivo}.html-${z}');">Inténtalo tú mismo</button>`;

                        /*BOTÓN DE INTÉNTALO TU*/
                        infoIntentalo += `case "${carpeta}_${nombreDelArchivo}.html-${z}": \n codigo = "${nuevoCodigo}" \n break; \n\n`  // Esta variable la usamos al final de la función principal (Nota: ahora mismo está programado para que la información aparezca en un párrafo al final del formulario. Pero si lo cambiamos para que se muestre en la consola (o para modificar el javascript), hay que sustituir <br> por \n)
                        /*FIN DE BOTÓN INTÉNTALO*/

                        z += 1; // Se va incrementando en 1 el valor de z
                    } 


                    // Creamos una variable que incluye el código correspondiente a un contenedor de ejemplo, introducimos el contenido del html en el lugar correspondiente, y la ruta de la iamgen (obtenida con la función anterior) en el lugar correspondiente
                    let ejemplo2 = `
                    <div class="contenedor">

                        <!-- Código ejemplo -->

                        <div class="codigo">
                            <code>
                                ${contenidoHTML} 
                            </code>
                        </div>

                        <!-- Fin código ejemplo -->

                        <!-- Resultado ejemplo -->

                        <div class="resultado">
                            <div style="padding: 10px;"> <!--Para que el ejemplo no aparezca pegado al borde-->
                            ${contenidoOriginalHTML}
                            </div>
                        </div>

                        <!-- Fin resultado ejemplo -->
                    </div>

                    <!-- FIN EJEMPLO CON CÓDIGO -->

                    <!-- Botón inténtalo tú mismo -->

                    <div>
                        ${codigoIntentalo}
                    </div>

                    <!-- Fin botón inténtalo tú mismo --><br>

                    <!-- Inicio del rango -->

                    <div>
                        <label for="rango" class="fuenterango">Elige anchura de visualización: </label>
                        <input type="range" class="rango" min="0" max="100" value="45" onchange="cambiarAncho(${y})">
                    </div>
                    <p></p>

                    <!-- Fin del rango -->`

                    y += 1; // Suma 1 cada vez que llama. Importante ponerla después del código para que la primera vez sea 0

                    divCuerpo.insertAdjacentHTML('beforeend', ejemplo2); // Añade el html con el contenido al div principal del "cuerpo del documento". En este caso hay que poner lo de inserAdjacentHTML porque el contenido es html como tal, no está incluido en una etiqueta <p> por ejemplO
                }


                // SI LA CASILLA SELECCIONADA ES LA DE INSERTAR IFRAME

                if (valorSeleccionado == "IFRAME") {

                    /*BOTÓN DE INTÉNTALO TU*/
                    let nuevoCodigo = ""; // Inicialidad una nueva variable 
                    nuevoCodigo += contenidoHTML;
                    nuevoCodigo = nuevoCodigo.replace(/\n/g, "\\n"); //Reemplaza los saltos de línea por nada
                    nuevoCodigo = nuevoCodigo.replace(/"/g, "'"); // Reeemplaza las comillas dobles por comillas simples
                    /*FIN INTÉNTALO TÚ*/                    

                    let casillaHTML = divContenedorApartados[i].querySelector(".escribir-HTML"); // Accede a la casilla para saber si la persona quiere mostrar el código HTML

                    if (casillaHTML.checked) { // Si la casilla de escribir en HTML está seleccionada, se cambian las etiquetas de apertura y cierre para que aparezca el código como ejemplo
                        // CONTENEDOR DE LA IZQUIERDA
                        contenidoHTML = contenidoHTML.replace(/</g, "&lt;"); // Reemplaza < con &lt;
                        contenidoHTML = contenidoHTML.replace(/>/g, "&gt;"); // Reemplaza > con &gt;
                    }
                    contenidoHTML = contenidoHTML.replace(/\n/g, "<br>"); // Para reemplazar los saltos de línea por br 

                    // PARA SABER QUÉ OPCIÓN DE IFRAME HA ELEGIDO

                    let opcionesIframe = divContenedorApartados[i].getElementsByClassName("elegir-iframe"); // Crea un objeto que incluye las casillas de elegir el tipo de iframe: insertar pagina externa / insertar archivo / incrustar codigo
                    let iframeSeleccionado;
                    

                    for (let h = 0; h < opcionesIframe.length; h++) {
                        
                        if (opcionesIframe[h].checked) {
                            iframeSeleccionado = opcionesIframe[h].value; // Devuelve el valor seleccionado (el valor puede ser "PAGINA" o "ARCHIVO" o "INCRUSTAR")
                            break;
                        }
                    }

                    let ejemplo3; //Inicializamos esta variable que tendrá un valor u otro dependiendo de la opción seleccionada
                    let direccionIframe =  "";

                    
                    switch (iframeSeleccionado) {
                        case "PAGINA": 
                            let direccionIntroducida = divContenedorApartados[i].getElementsByClassName("direccion-iframe")[0].value;  // Accede a la dirección introducida por el usuario
                            direccionIframe = `<iframe src="${direccionIntroducida}" title="Página externa" style="width:99%; height:330px"></iframe>`;
                            break;
                        
                        case "ARCHIVO":
                            let archivo = divContenedorApartados[i].getElementsByClassName("archivo")[0].value; //Accede al archivo seleccionado
                            // Como no queremos la ruta entera, sino quedarnos solo con el nombre de la imagen, pedimos que se divida la ruta utilizando la barra invertida como separador 
                            var partes = archivo.split('\\');
                            // Obtener el último elemento del array resultante
                            let rutaArchivo = partes[partes.length - 1];
                            direccionIframe = `<iframe src="./recursos/${rutaArchivo}" title="Archivo" style="width:99%; height:330px"></iframe>`;
                            break;

                        case "INCRUSTAR":
                            direccionIframe = divContenedorApartados[i].getElementsByClassName("codigo-incrustracion")[0].value;  // Accede a la dirección introducida por el usuario
                    } 

                    
                    // BOTÓN DE INTÉNTALO TÚ MISMO 
                    
                    let botonIntentaloTu = divContenedorApartados[i].querySelector(".botonIntentalo3"); // Accede al chebox de "añadir inténtalo tú mismo" 
                    
                    let codigoIntentalo = ""; // Inicializa una variable para agregar el código del "inténtalo tú mismo" en caso de haber seleccionado la casilla

                    if (botonIntentaloTu.checked) { // Si el botón está selecionado

                    codigoIntentalo = `<button class='display' onclick="abrirNuevaVentana('${carpeta}_${nombreDelArchivo}.html-${z}');">Inténtalo tú mismo</button>`;

                    /*BOTÓN DE INTÉNTALO TU*/
                    infoIntentalo += `case "${carpeta}_${nombreDelArchivo}.html-${z}": \n codigo = "${nuevoCodigo}" \n break; \n\n`  // Esta variable la usamos al final de la función principal (Nota: ahora mismo está programado para que la información aparezca en un párrafo al final del formulario. Pero si lo cambiamos para que se muestre en la consola (o para modificar el javascript), hay que sustituir <br> por \n)
                    /*FIN BOTÓN INTÉNTALO*/

                        z += 1; // Se va incrementando en 1 el valor de z
                    } 
                
                    
                    // COMÚN A LAS TRES ELECCIONES:Creamos una variable que incluye el código correspondiente a un contenedor de ejemplo, introducimos el contenido del html en el lugar correspondiente, y añadimos un iframe donde incorporamos la variable que contiene la ruta introducida por el usuario
                    ejemplo3 = `
                    <div class="contenedor">

                        <!-- Código ejemplo -->

                        <div class="codigo">
                            <code>
                                ${contenidoHTML} 
                            </code>
                        </div>

                        <!-- Fin código ejemplo -->

                        <!-- Resultado ejemplo -->

                        <div class="resultado">
                            <div style="padding: 10px;"> <!--Para que el ejemplo no aparezca pegado al borde-->
                            ${direccionIframe}
                            </div>
                        </div>

                        <!-- Fin resultado ejemplo -->
                    </div>

                    <!-- FIN EJEMPLO CON CÓDIGO -->

                    <!-- Botón inténtalo tú mismo -->

                    <div>
                    ${codigoIntentalo}
                    </div>

                    <!-- Fin botón inténtalo tú mismo --><br>

                    <!-- Inicio del rango -->

                    <div>
                        <label for="rango" class="fuenterango">Elige anchura de visualización: </label>
                        <input type="range" class="rango" min="0" max="100" value="45" onchange="cambiarAncho(${y})">
                    </div>
                    <p></p>

                    <!-- Fin del rango -->`

                    y += 1; // Suma 1 cada vez que llama. Importante ponerla después del código para que la primera vez sea 0
                        
                    divCuerpo.insertAdjacentHTML('beforeend', ejemplo3); // Añade el html con el contenido al div principal del "cuerpo del documento". En este caso hay que poner lo de inserAdjacentHTML porque el contenido es html como tal, no está incluido en una etiqueta <p> por ejemplo
                     
                }   
            } 


        /*BOTÓN ATENCIÓN, CONOCE MÁS O PRUEBA ESTO*/

            // Casilla principal
            let casillaPrincipal = divContenedorApartados[i].getElementsByClassName("casilla-boton")[0]; // Casilla principal, que pregunta si quieres introducir un ejemplo y si la marcas ya aparecen las tres opciones

            // Casillas
            let casillaAtencion = divContenedorApartados[i].getElementsByClassName("mostrarAtencion")[0]; // Accede a la casilla de atencion
            let casillaConoceMas = divContenedorApartados[i].getElementsByClassName("mostrarConoceMas")[0]; // Accede a la casilla de conoce más
            let casillaPruebaEsto = divContenedorApartados[i].getElementsByClassName("mostrarPruebaEsto")[0]; // Accede a la casilla de pruebaEsto

            // Contenidos
            let contenidoAtencion = divContenedorApartados[i].getElementsByClassName("atencion")[0].value;   // Accede al contenido de atencion
            let contenidoConoceMas = divContenedorApartados[i].getElementsByClassName("conoceMas")[0].value;   // Accede al contenido de conoceMas
            let contenidoPruebaEsto = divContenedorApartados[i].getElementsByClassName("pruebaEsto")[0].value;   // Accede al contenido de pruebaEsto

            // Para cambiar los saltos de línea por br
            contenidoAtencion = contenidoAtencion.replace(/\n/g, '<br>'); // En el contenido de atención
            contenidoConoceMas = contenidoConoceMas.replace(/\n/g, '<br>'); // En el contenido de conoce mas
            contenidoPruebaEsto = contenidoPruebaEsto.replace(/\n/g, '<br>'); // En el contenido de prueba esto


            
            // Crea una variable donde se va a ir sumando el contenido que hay que agregar
            let contenidoHtmlBotones = "";

           
            // Para que los botones aparezcan uno al lado del otro:
            let divFlexible = document.createElement("div"); // Crea un nuevo div
            divFlexible.className = "cuadroflex"; // Le añade la clase flexible

            if(casillaPrincipal.checked) { // Si la casilla principal está marcada, significa que habrá algún botón

                if(casillaAtencion.checked && contenidoAtencion !== "") { // Si la casilla de introducir botón de atención está marcada y el contenido no está vacío, añade a la varaible el siguiente contenido
                    
                    contenidoHtmlBotones += `
                    <div class="cuadroext2">
                        <svg class="img3" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect class="AtencionFondo" width="800" height="800" fill="#FAE73B"/>
                            <circle class="AtencionCirculo" cx="400" cy="400" r="322" fill="white" stroke="#9A8B00" stroke-width="12"/>
                            <path class="AtencionPaloFill" d="M336.457 140.69C338.133 137.625 341.694 134.751 344.614 132.757C347.481 130.799 350.935 130 354.41 130H399.769H401.231H446.59C450.065 130 453.519 130.799 456.386 132.757C459.306 134.751 462.867 137.625 464.543 140.69C467.028 145.238 467.033 153.262 466.991 155.282C466.985 155.599 466.964 155.912 466.936 156.227L436.249 505.463C435.959 508.765 434.935 511.961 433.25 514.819C431.725 517.406 429.692 519.659 427.272 521.443L426.654 521.899C422.162 525.212 416.722 527 411.136 527H401.231H399.769H389.864C384.278 527 378.838 525.212 374.346 521.899L373.728 521.443C371.308 519.659 369.275 517.406 367.75 514.819C366.065 511.961 365.041 508.765 364.751 505.463L334.064 156.227C334.036 155.912 334.015 155.599 334.009 155.282C333.967 153.262 333.972 145.238 336.457 140.69Z" fill="#FAE73B"/>
                            <path class="AtencionPaloStroke" d="M401.231 527H389.864C384.278 527 378.838 525.212 374.346 521.899L373.728 521.443C371.308 519.659 369.275 517.406 367.75 514.819C366.065 511.961 365.041 508.765 364.751 505.463L334.064 156.227C334.036 155.912 334.015 155.599 334.009 155.282C333.967 153.262 333.972 145.238 336.457 140.69C338.133 137.625 341.694 134.751 344.614 132.757C347.481 130.799 350.935 130 354.41 130H401.231M399.769 527H411.136C416.722 527 422.162 525.212 426.654 521.899L427.272 521.443C429.692 519.659 431.725 517.406 433.25 514.819C434.935 511.961 435.959 508.765 436.249 505.463L466.936 156.227C466.964 155.912 466.985 155.599 466.991 155.282C467.033 153.262 467.028 145.238 464.543 140.69C462.867 137.625 459.306 134.751 456.386 132.757C453.519 130.799 450.065 130 446.59 130H399.769" stroke="#9A8B00" stroke-width="12"/>
                            <path class="AtencionExclamCirculo" d="M448 616C448 642.562 426.681 664 400.5 664C374.319 664 353 642.562 353 616C353 589.438 374.319 568 400.5 568C426.681 568 448 589.438 448 616Z" fill="#FAE73B" stroke="#9A8B00" stroke-width="12"/>
                            </svg>            <div class="cuadro2">
                            <h4>¡Atención!</h4>
                            <p>
                                ${contenidoAtencion}
                            </p>
                        </div>
                    </div>`
                }

                if(casillaConoceMas.checked && contenidoConoceMas !== "") { // Si la casilla de introducir botón de conoce más está marcada y el contenido no está vacío, añade a la varaible el siguiente contenido
                    contenidoHtmlBotones += `
                    <div class="cuadroext">
                        <svg class="img3" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect class="ConoceFondo" width="800" height="800" fill="#F46B73"/>
                            <path class="ConoceCristal" d="M313.156 519.307L320.104 562H400.5H480.896L487.844 519.307L499.755 468.671L503.754 456.435C512.199 430.593 527.042 407.308 546.901 388.745L561.4 372.63C575.384 357.087 585.78 338.659 591.852 318.65C596.912 301.978 598.875 284.52 597.643 267.14L596.729 254.235C595.606 238.384 592.71 222.708 588.096 207.502L584.744 196.459C580.379 182.074 574.096 168.342 566.065 155.635C539.179 113.093 494.586 84.9097 444.633 78.8894L441.194 78.475L435.032 77.9423C412.383 75.9843 389.608 75.9608 366.955 77.8719L359.806 78.475L356.367 78.8894C306.415 84.9097 261.821 113.093 234.935 155.635C226.904 168.342 220.621 182.074 216.256 196.459L212.904 207.502C208.29 222.708 205.394 238.384 204.271 254.235L203.357 267.14C202.125 284.52 204.088 301.978 209.148 318.65C215.22 338.659 225.616 357.087 239.6 372.63L254.099 388.745C273.958 407.308 288.801 430.593 297.246 456.435L301.245 468.671L313.156 519.307Z" fill="white" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceFilamento" d="M368.509 561V284.254C368.509 271.964 358.35 262 346.059 262V262C333.982 262 324 271.79 324 283.867V283.867C324 295.944 333.79 305.734 345.867 305.734H456.133C468.21 305.734 478 295.944 478 283.867V283.867C478 271.79 468.21 262 456.133 262H454.41C441.382 262 430.821 272.561 430.821 285.59V561" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceRosca" d="M319.616 588.28L319.031 587.864C310.585 581.862 311.166 569.139 320.123 563.931C322.298 562.666 324.769 562 327.285 562H477.445C480.435 562 483.348 562.947 485.766 564.705C493.079 570.019 493.603 580.733 486.845 586.736L486.249 587.266C483.541 589.671 480.045 591 476.422 591H328.139C325.085 591 322.106 590.049 319.616 588.28Z" fill="#FFD3D3" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceRosca" d="M319.418 618.041L318.808 617.592C310.339 611.366 310.933 598.526 319.941 593.107C322.233 591.728 324.857 591 327.531 591H477.16C480.331 591 483.415 592.03 485.95 593.936C493.257 599.43 493.789 610.208 487.057 616.395L486.441 616.96C483.614 619.558 479.914 621 476.075 621H328.44C325.194 621 322.033 619.963 319.418 618.041Z" fill="#FFD3D3" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceRosca" d="M334.552 714.502L333.78 713.426C328.053 705.448 328.584 694.574 335.061 687.191C339.07 682.621 344.854 680 350.934 680H453.227C460.046 680 466.437 683.323 470.354 688.905C475.019 695.553 475.416 704.3 471.372 711.343L470.726 712.469C466.63 719.602 459.034 724 450.809 724H353.06C345.72 724 338.831 720.464 334.552 714.502Z" fill="#FFD3D3" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceRosca" d="M319.418 648.041L318.808 647.592C310.339 641.366 310.933 628.526 319.941 623.107C322.233 621.728 324.857 621 327.531 621H477.16C480.331 621 483.415 622.03 485.95 623.936C493.257 629.43 493.789 640.208 487.057 646.395L486.441 646.96C483.614 649.558 479.914 651 476.075 651H328.44C325.194 651 322.033 649.963 319.418 648.041Z" fill="#FFD3D3" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceRosca" d="M319.616 677.28L319.031 676.864C310.585 670.862 311.166 658.139 320.123 652.931C322.298 651.666 324.769 651 327.285 651H477.445C480.435 651 483.348 651.947 485.766 653.705C493.079 659.019 493.603 669.733 486.845 675.736L486.249 676.266C483.541 678.671 480.045 680 476.422 680H328.139C325.085 680 322.106 679.049 319.616 677.28Z" fill="#FFD3D3" stroke="#A24349" stroke-width="12"/>
                            </svg>            <div class="cuadro">
                            <h4>Conoce más...</h4>
                            <p>
                                ${contenidoConoceMas}
                            </p>
                        </div>
                    </div>`
                }

                if(casillaPruebaEsto.checked && contenidoPruebaEsto !== "") { // Si la casilla de introducir botón de prueba esto está marcada y el contenido no está vacío, añade a la varaible el siguiente contenido
                    contenidoHtmlBotones += `
                    <div class="cuadroext3">
                        <svg class="img3" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect class="PruebaFondo" width="800" height="800" fill="#409A4E"/>
                            <path class="PruebaCable" d="M400 101V101C409.352 75.4383 431.032 56.366 457.578 50.3491L469.583 47.6278C483.056 44.5739 497.006 44.2671 510.601 46.7256L514.038 47.3473C557.175 55.1487 592.62 85.8613 606.483 127.449L609 135L624.585 181.105C630.026 197.201 640.882 210.912 655.303 219.899L659.654 222.61C684.751 238.251 717.157 235.46 739.21 215.759V215.759C761.537 195.813 767.802 163.417 754.522 136.586L738.336 103.884C731.515 90.1025 727.54 75.0885 726.648 59.7375L725.5 40V0" stroke="#1C6227" stroke-width="12"/>
                            <path class="PruebaRaton" d="M281.021 134.118L299.131 124.719C313.375 117.326 328.614 111.817 344.424 108.345C357.574 105.458 371.026 104 384.522 104H400H415.478C428.974 104 442.426 105.458 455.576 108.345C471.386 111.817 486.625 117.326 500.869 124.719L518.979 134.118C533.481 141.644 546.434 151.603 557.213 163.514L558.969 165.455C569.929 177.565 578.188 191.667 583.245 206.907C587.059 218.398 589 230.378 589 242.43V554.597C589 567.008 587.441 579.459 584.397 591.528C578.62 614.433 567.454 635.963 551.805 654.216C544.562 662.664 536.413 670.37 527.491 677.209L524.636 679.397C508.774 691.556 490.756 700.92 471.432 707.049C459.633 710.791 447.44 713.298 435.07 714.524L400 718L364.93 714.524C352.56 713.298 340.367 710.791 328.568 707.049C309.244 700.92 291.226 691.556 275.364 679.397L272.509 677.209C263.587 670.37 255.438 662.664 248.195 654.216C232.546 635.963 221.38 614.433 215.603 591.528C212.559 579.459 211 567.008 211 554.597V242.43C211 230.378 212.941 218.398 216.755 206.907C221.812 191.667 230.071 177.565 241.031 165.455L242.787 163.514C253.566 151.603 266.519 141.644 281.021 134.118Z" fill="white" stroke="#1C6227" stroke-width="12"/>
                            <path class="PruebaLinea" d="M211 334V334C335.171 318.148 461.84 318.065 586 334V334" stroke="#1C6227" stroke-width="12"/>
                            <path class="PruebaLinea" d="M398 108V316.5" stroke="#1C6227" stroke-width="12"/>
                            <path class="PruebaRueda" d="M392.563 166H398.5H404.437C412.948 166 420.482 170.957 423.072 178.261C423.687 179.995 424 181.805 424 183.625V265.137C424 269.071 422.873 272.939 420.729 276.366C416.231 283.553 407.659 288 398.5 288C389.341 288 380.769 283.553 376.271 276.366C374.127 272.939 373 269.071 373 265.137V183.625C373 181.805 373.313 179.995 373.928 178.261C376.518 170.957 384.052 166 392.563 166Z" fill="#C3DFC8" stroke="#1C6227" stroke-width="12"/>
                            </svg>            <div class="cuadro3">
                            <h4>Prueba esto</h4>
                            <p>
                                ${contenidoPruebaEsto}
                            </p>
                        </div>   
                    </div>`
                }  

                divFlexible.insertAdjacentHTML('beforeend', contenidoHtmlBotones); // Añade el contenido sumado en la varaible "contenidoHtmlBotones" al div creado con la clase "cuadroflex"
                divCuerpo.appendChild(divFlexible); // Añade el html con el contenido al div principal del "cuerpo del documento".      
            }
            


        /* SUBAPARTADOS */

        let divContenedorSubapartados = divContenedorApartados[i].getElementsByClassName("contenedorSubapartados"); // Accede a los div de cada subapartado

        let a = 1; // Inicializa una variable en 1. Esto es para los subtítulos

        for (let m = 0; m < divContenedorSubapartados.length; m++) { // ENTRA EN CADA SUBAPARTADO

            // SUBTÍTULOS

            let contenidoDelSubtitulo = divContenedorSubapartados[m].getElementsByClassName("subtitulo")[0].value; // IMPORTANTE: Accede al input del subtítulo. El principio de esta estructura: divContenedorSubapartados[m].getElementsByClassName("subtitulo")[0].value es lo que hay que ir usando para acceder al contenido dentro de los subapartados

            if (contenidoDelSubtitulo !== "") { // Si la persona ha escrito algo en el campo de SUBTÍTULO:

                let nuevoSubtitulo = document.createElement("h2"); // Crea una nueva etiqueta h2

                nuevoSubtitulo.id = `subtitulo${x}.${a}`; // Crea un id dentro del h2 que hemos creado, con la palabra "subtitulo" y el número se va incrementando --- <h2 id="subtitulox.a"></h2> (Por ejemplo, subtítulo1.1)

                nuevoSubtitulo.innerHTML = x + "." + a + ". " + contenidoDelSubtitulo; // Agrega el texto introducido en el campo de entrada a esta nueva etiqueta, pero antes le pone el número correspondiente    ------ <h2 id="titulox">x. TITULO</h2>

                divCuerpo.appendChild(nuevoSubtitulo); // Añade el subtítulo al div

                divCuerpo.innerHTML += "\n\t\t\t"; // Para que en el propio html, aparezca cada subtítulo uno debajo de otro y tabulado, en lugar de aparecer en la misma línea

                // ÍNDICE

                let ul = document.createElement("ul"); // Crea un nuevo ul
                ul.style.listStyleType = "none"; // Le quita los estilos (para que no aparezca el número por defecto)
                indiceH2.appendChild(ul); // Añade la etiqueta ul sin estilo al índicee 

                let subenlace = document.createElement("a"); // Crea un a (etiqueta de enlace, por cada subtítulo)

                subenlace.href = `#subtitulo${x}.${a}`;  // A la etiqueta a le añade un href. Ej. <a href="#subtitulo1.1"></a> (el número se va incrementando). X se refiere al apartado y A al subapartado

                subenlace.className = "indicecolor"; // A la etiqueta le añade la clase para que los subenlaces no cambien de color una vez pulsados -- <a href="#subtitulo1.1" class="indicecolor"></a>

                let li = document.createElement("li"); // Crea un nuevo li

                li.innerHTML = `${x}.${a}. ${contenidoDelSubtitulo}`; // Incorporta el subtítulo introducido en el li. Ej. <li>1.1. Subitulo</li> (El problema es que lo de 1.1. no se hace automáticamente, por eso ponemos ${x}.${a}. para hacerlo manuealmente. Y al ul le ponemos listStyleType = "none")

                subenlace.appendChild(li); // Incorpora el li dentro del enlace  --- <a href="#subtitulo1.1" class="indicecolor"><li>1.1. Subtitulo</li></a>

                ul.appendChild(subenlace); // Agrega el enlace con el subtítulo como último elemento del h2

                ul.innerHTML += "\n\t\t\t\t\t"; // Esto es de cara al HTML (pero en Visual Studio Code se puede hacer click derecho con el ratón y "dar formato")

                a++; // Aumenta el "contador"
            }

            // SUBCONTENIDOS

            let valorDelSubcontenido = divContenedorSubapartados[m].getElementsByClassName("subcontenido")[0].value; // Accede al valor introducido en el textarea correspondiente

            valorDelSubcontenido = valorDelSubcontenido.replace(/\n*<(o|u)l>\s*\n*<li>/g, '<$1l><li>') // Elimina los saltos de línea manuales antes de una lista (ol o ul)
            .replace(/<\/li>\s*\n*<\/(o|u)l>\n*/g, '</li></$1l>') // Elimina los espacios después de </ol> o </ul>
            .replace(/<\/li>\n<li>/g, '</li><li>') // Elimina los saltos de línea entre <li>  (ESTAS CINCO LÍNEAS SON PARA CONTROLAR LOS SALTOS DE LÍNEA EN LAS LISTAS)
            .replace(/(<\/li>)\n+(?=<li>|<\/?(o|u)l>)/g, '$1\n') // Reduce múltiples saltos de línea entre elementos <li> a uno solo NUEVO
            .replace(/<\/li>\s*\n*<\/(o|u)l>\n*/g, '</li></$1l>') // Elimina los espacios después de </ol> o </ul> NUEVO
            // TABLAS
            .replace(/\s*\n*<t(able|head|body|r|h|d)>/g, '<t$1>') // Para eliminar los espacios al principio
            .replace(/<\/t(able|head|body|r|h|d)>\s/g, '</t$1>'); // Para eliminar los espacios al final

            valorDelSubcontenido = valorDelSubcontenido.replace(/\n/g, '<br>'); // Para reemplazar los saltos de línea por br 
            
            let nuevoSubcontenido = document.createElement("p"); // Crea una nueva etiqueta p
            nuevoSubcontenido.innerHTML = valorDelSubcontenido; // Agrega el texto introducido en el campo de entrada a esta nueva etiqueta    ---- <p>CONTENIDO</p>
            
            divCuerpo.appendChild(nuevoSubcontenido); // Añade el contenido al div

            divCuerpo.innerHTML += "\n\t\t\t\t";


            // SUBEJEMPLOS

            let subContenidoHTML = divContenedorSubapartados[m].getElementsByClassName("subContenidoHTML")[0].value; // Accede al valor introducido en el textarea

            if(subContenidoHTML !== "") { // Si el valor introducido no es una cadena vacía (es decir, que la persona haya introducido ejemplo)
               
                /*PARA SABER QUÉ TIPO DE EJEMPLO SE HA ELEGIDO: SI IMAGEN, INTERACTIVO o IFRAME*/

                let opcionesEjemplo = divContenedorSubapartados[m].getElementsByClassName("elegir-ejemplo"); // Crea un objeto que incluye las dos casillas de elegir ejemplo: insertar imagen / insertar ejemplo dinámico / insertar iframe
                let valorSeleccionado;

                for (let i = 0; i < opcionesEjemplo.length; i++) {
                    if (opcionesEjemplo[i].checked) {
                        valorSeleccionado = opcionesEjemplo[i].value; // Devuelve el valor seleccionado (el valor puede ser "IMAGEN" o "DINAMICO")
                        break;
                    }
                }

                // SI LA CASILLA SELECCIONADA ES LA DE INSERTAR IMAGEN
                if (valorSeleccionado == "IMAGEN") {

                    /*PARA QUE FUNCIONE EL BOTÓN DE INTÉNTALO TU*/
                    let nuevoCodigo = ""; // Inicialidar una nueva variable 
                    nuevoCodigo += subContenidoHTML;
                    nuevoCodigo = nuevoCodigo.replace(/\n/g, "\\n"); //Reemplaza los saltos de línea por nada
                    nuevoCodigo = nuevoCodigo.replace(/"/g, "'"); // Reeemplaza las comillas dobles por comillas simples
                    /*FIN INTÉNTALO TÚ*/

                    let casillaHTML = divContenedorSubapartados[m].querySelector(".escribir-HTML"); // Accede a la casilla para saber si la persona quiere mostrar el código HTML

                    if (casillaHTML.checked) { // Si la casilla de escribir en HTML está seleccionada, se cambian las etiquetas de apertura y cierre para que aparezca el código como ejemplo
                        // CONTENEDOR DE LA IZQUIERDA
                        subContenidoHTML = subContenidoHTML.replace(/</g, "&lt;"); // Reemplaza < con &lt;
                        subContenidoHTML = subContenidoHTML.replace(/>/g, "&gt;"); // Reemplaza > con &gt;
                    }

                    subContenidoHTML = subContenidoHTML.replace(/\n/g, "<br>"); // Para reemplazar los saltos de línea por br 

                    // CONTENEDOR DE IMAGEN (EL DE LA DERECHA)
                        
                    /*PARA CONTROLAR EL ANCHO Y ALTO DE LAS IMÁGENES*/
                    let medidaAnchoImagen; // Aquí irá la medida seleccionada por la persona (%, px o em) (en relación al ancho)
                    let numeroAnchoImagen; // Aquí irá el número introducido por la persona (en relación al ancho)

                    let medidaAltoImagen; // Aquí irá la medida seleccionada por la persona (%, px o em) (en relación al alto)
                    let numeroAltoImagen; // Aquí irá el número introducido por la persona (en relación al ancho)

                    let medidaAnchoImagenSeleccionada = divContenedorSubapartados[m].getElementsByClassName("medidaAnchoImagen")[0].value; // Accede a la medida (%, px o em) seleccionado por la persona
                    let numeroAnchoImagenSeleccionado = divContenedorSubapartados[m].getElementsByClassName("anchoImagen")[0].value; // Accede al número introducido por la persona

                    let medidaAltoImagenSeleccionada = divContenedorSubapartados[m].getElementsByClassName("medidaAltoImagen")[0].value; // Accede a la medida (%, px o em) seleccionado por la persona
                    let numeroAltoImagenSeleccionado = divContenedorSubapartados[m].getElementsByClassName("altoImagen")[0].value; // Accede al número introducido por la persona

                    let estilosImagen = ""; // Aquí se almacenará el style con el ancho, el alto o ambos
                    
                    if (numeroAnchoImagenSeleccionado !== "") { // Si ha escrito un número en el ancho
                        medidaAnchoImagen = medidaAnchoImagenSeleccionada;
                        numeroAnchoImagen = numeroAnchoImagenSeleccionado;

                        estilosImagen = `style='max-width: ${numeroAnchoImagen}${medidaAnchoImagen}'`;
                    } 

                    if (numeroAltoImagenSeleccionado !== "") { // Si ha escrito un número en el alto
                        medidaAltoImagen = medidaAltoImagenSeleccionada;
                        numeroAltoImagen = numeroAltoImagenSeleccionado;

                        estilosImagen = `style='max-height: ${numeroAltoImagen}${medidaAltoImagen}'`;
                    } 

                    if ((numeroAnchoImagenSeleccionado !== "") && (numeroAltoImagenSeleccionado !== "")) { // Si ha escrito ancho y alto 

                        estilosImagen = `style='max-width: ${numeroAnchoImagen}${medidaAnchoImagen}; max-height: ${numeroAltoImagen}${medidaAltoImagen}'`;
                    } 

                        
                    let codigoSubImagen = `<img class='img' src='${subcodigos64[i][m]}' alt='ejemplo' ${estilosImagen}>`;; // Cómo queda la ruta completa, esto es lo que se añade al ejemplo


                    // BOTÓN DE INTÉNTALO TÚ MISMO 

                    let botonIntentaloTu = divContenedorSubapartados[m].querySelector(".SUBbotonIntentalo"); // Accede al chebox de "añadir inténtalo tú mismo" 
                    
                    let codigoIntentalo = ""; // Inicializa una variable para agregar el código del "inténtalo tú mismo" en caso de haber seleccionado la casilla

                    if (botonIntentaloTu.checked) { // Si el botón está selecionado

                        codigoIntentalo = `<button class='display' onclick="abrirNuevaVentana('${carpeta}_${nombreDelArchivo}.html-${z}');">Inténtalo tú mismo</button>`;
                        
                    /*PARA BOTÓN DE INTÉNTALO TU*/
                    infoIntentalo += `case "${carpeta}_${nombreDelArchivo}.html-${z}": \n codigo = "${nuevoCodigo}" \n break; \n\n`  // Esta variable la usamos al final de la función principal (Nota: ahora mismo está programado para que la información aparezca en un párrafo al final del formulario. Pero si lo cambiamos para que se muestre en la consola (o para modificar el javascript), hay que sustituir <br> por \n)

                    /*FIN INTÉNTALO*/

                        z += 1; // Se va incrementando en 1 el valor de z
                    } 
                    
                    
                    // Creamos una variable que incluye el código correspondiente a un contenedor de ejemplo, introducimos el contenido del html en el lugar correspondiente, y la ruta de la iamgen (obtenida con la función anterior) en el lugar correspondiente
                    let ejemplo = `
                    <div class="contenedor">

                        <!-- Código ejemplo -->

                        <div class="codigo">
                            <code>
                                ${subContenidoHTML} 
                            </code>
                        </div>

                        <!-- Fin código ejemplo -->

                        <!-- Resultado ejemplo -->

                        <div class="resultado">
                            <div style="padding: 10px;"> <!--Para que el ejemplo no aparezca pegado al borde-->
                            ${codigoSubImagen}
                            </div>
                        </div>

                        <!-- Fin resultado ejemplo -->
                    </div>

                    <!-- FIN EJEMPLO CON CÓDIGO -->

                    <!-- Botón inténtalo tú mismo -->

                    <div>
                        ${codigoIntentalo}
                    </div>

                    <!-- Fin botón inténtalo tú mismo --><br>

                    <!-- Inicio del rango -->

                    <div>
                        <label for="rango" class="fuenterango">Elige anchura de visualización: </label>
                        <input type="range" class="rango" min="0" max="100" value="45" onchange="cambiarAncho(${y})">

                    </div>
                    <p></p>

                    <!-- Fin del rango -->`

                    y += 1; // Suma 1 cada vez que llama. Importante ponerla después del código para que la primera vez sea 0

                    divCuerpo.insertAdjacentHTML('beforeend', ejemplo); // Añade el html con el contenido al div principal del "cuerpo del documento". En este caso hay que poner lo de inserAdjacentHTML porque el contenido es html como tal, no está incluido en una etiqueta <p> por ejemplO

                } // Fin ejemplo con imagen


                // SI LA CASILLA SELECCIONADA ES LA INSERTAR EJEMPLO DINÁMICO
                if (valorSeleccionado == "DINAMICO") {

                    // CONTENEDOR LA DERECHA (EJEMPLO DINÁMICO - EL CÓDIGO SE INTRODUCE TAL CUÁL)
                    let contenidoOriginalHTML = subContenidoHTML; // Copia el contenido del HTML para que no se modifique

                    /*BOTÓN DE INTÉNTALO TU*/
                    let nuevoCodigo = ""; // Inicialidad una nueva variable 
                    nuevoCodigo += subContenidoHTML;
                    nuevoCodigo = nuevoCodigo.replace(/\n/g, "\\n"); //Reemplaza los saltos de línea por nada
                    nuevoCodigo = nuevoCodigo.replace(/"/g, "'"); // Reeemplaza las comillas dobles por comillas simples
                    /*FIN INTÉNTALO TÚ*/

                    let casillaHTML = divContenedorSubapartados[m].querySelector(".escribir-HTML"); // Accede a la casilla para saber si la persona quiere mostrar el código HTML
                    casillaHTML.checked = true; // Si la persona selecciona ejemplo dinámico, siempre tiene que estar marcada esta casilla para que el ejemplo dinámico aparezca solo a la derecha y no en los dos contenedores

                    if (casillaHTML.checked) { // Si la casilla de escribir en HTML está seleccionada, se cambian las etiquetas de apertura y cierre para que aparezca el código como ejemplo
                        // CONTENEDOR DE LA IZQUIERDA (SE INTRODUCE COMO UN PÁRRAFO)
                        subContenidoHTML = subContenidoHTML.replace(/</g, "&lt;"); // Reemplaza < con &lt;
                        subContenidoHTML = subContenidoHTML.replace(/>/g, "&gt;"); // Reemplaza > con &gt;
                    }

                    subContenidoHTML = subContenidoHTML.replace(/\n/g, "<br>"); // Para reemplazar los saltos de línea por br 


                    // BOTÓN DE INTÉNTALO TÚ MISMO 
                    let botonIntentaloTu = divContenedorSubapartados[m].querySelector(".SUBbotonIntentalo2"); // Accede al chebox de "añadir inténtalo tú mismo" 
                    
                    let codigoIntentalo = ""; // Inicializa una variable para agregar el código del "inténtalo tú mismo" en caso de haber seleccionado la casilla

                    if (botonIntentaloTu.checked) { // Si el botón está selecionado

                        codigoIntentalo = `<button class='display' onclick="abrirNuevaVentana('${carpeta}_${nombreDelArchivo}.html-${z}');">Inténtalo tú mismo</button>`;

                    /*BOTÓN DE INTÉNTALO TU*/
                    infoIntentalo += `case "${carpeta}_${nombreDelArchivo}.html-${z}": \n codigo = "${nuevoCodigo}" \n break; \n\n`  // Esta variable la usamos al final de la función principal (Nota: ahora mismo está programado para que la información aparezca en un párrafo al final del formulario. Pero si lo cambiamos para que se muestre en la consola (o para modificar el javascript), hay que sustituir <br> por \n)
                    /*FIN DE INTÉNTALO TÚ*/

                        z += 1; // Se va incrementando en 1 el valor de z
                    } 


                    // Creamos una variable que incluye el código correspondiente a un contenedor de ejemplo, introducimos el contenido del html en el lugar correspondiente, y la ruta de la iamgen (obtenida con la función anterior) en el lugar correspondiente
                    let ejemplo2 = `
                    <div class="contenedor">

                        <!-- Código ejemplo -->

                        <div class="codigo">
                            <code>
                                ${subContenidoHTML} 
                            </code>
                        </div>

                        <!-- Fin código ejemplo -->

                        <!-- Resultado ejemplo -->

                        <div class="resultado">
                            <div style="padding: 10px;"> <!--Para que el ejemplo no aparezca pegado al borde-->
                            ${contenidoOriginalHTML}
                            </div>
                        </div>

                        <!-- Fin resultado ejemplo -->
                    </div>

                    <!-- FIN EJEMPLO CON CÓDIGO -->

                    <!-- Botón inténtalo tú mismo -->

                    <div>
                        ${codigoIntentalo}
                    </div>

                    <!-- Fin botón inténtalo tú mismo --><br>

                    <!-- Inicio del rango -->

                    <div>
                        <label for="rango" class="fuenterango">Elige anchura de visualización: </label>
                        <input type="range" class="rango" min="0" max="100" value="45" onchange="cambiarAncho(${y})">
                    </div>
                    <p></p>

                    <!-- Fin del rango -->`

                    y += 1; // Suma 1 cada vez que llama. Importante ponerla después del código para que la primera vez sea 0

                    divCuerpo.insertAdjacentHTML('beforeend', ejemplo2); // Añade el html con el contenido al div principal del "cuerpo del documento". En este caso hay que poner lo de inserAdjacentHTML porque el contenido es html como tal, no está incluido en una etiqueta <p> por ejemplO
                
                } // fin de ejemplo dinámico

                
                // SI LA CASILLA SELECCIONADA ES LA DE INSERTAR IFRAME
                if (valorSeleccionado == "IFRAME") {

                    /*BOTÓN DE INTÉNTALO TU*/
                    let nuevoCodigo = ""; // Inicialidad una nueva variable 
                    nuevoCodigo += subContenidoHTML;
                    nuevoCodigo = nuevoCodigo.replace(/\n/g, "\\n"); //Reemplaza los saltos de línea por nada
                    nuevoCodigo = nuevoCodigo.replace(/"/g, "'"); // Reeemplaza las comillas dobles por comillas simples
                    /*FIN BOTÓN INTÉNTALO*/                    

                    let casillaHTML = divContenedorSubapartados[m].querySelector(".escribir-HTML"); // Accede a la casilla para saber si la persona quiere mostrar el código HTML

                    if (casillaHTML.checked) { // Si la casilla de escribir en HTML está seleccionada, se cambian las etiquetas de apertura y cierre para que aparezca el código como ejemplo
                        // CONTENEDOR DE LA IZQUIERDA
                        subContenidoHTML = subContenidoHTML.replace(/</g, "&lt;"); // Reemplaza < con &lt;
                        subContenidoHTML = subContenidoHTML.replace(/>/g, "&gt;"); // Reemplaza > con &gt;
                    }

                    subContenidoHTML = subContenidoHTML.replace(/\n/g, "<br>"); // Para reemplazar los saltos de línea por br 
    
                    // PARA SABER QUÉ OPCIÓN DE IFRAME HA ELEGIDO
                    let opcionesIframe = divContenedorSubapartados[m].getElementsByClassName("SUBelegir-iframe"); // Crea un objeto que incluye las casillas de elegir el tipo de iframe: insertar pagina externa / insertar archivo / incrustar codigo
                    let iframeSeleccionado;
                    
                    for (let h = 0; h < opcionesIframe.length; h++) {
                        
                        if (opcionesIframe[h].checked) {
                            iframeSeleccionado = opcionesIframe[h].value; // Devuelve el valor seleccionado (el valor puede ser "PAGINA" o "ARCHIVO" o "INCRUSTAR")
                            break;
                        }
                    }

                    let ejemplo3; //Inicializamos esta variable que tendrá un valor u otro dependiendo de la opción seleccionada
                    let direccionIframe =  "";

                    switch (iframeSeleccionado) {
                        case "PAGINA": 
                            let direccionIntroducida = divContenedorSubapartados[m].getElementsByClassName("SUBdireccion-iframe")[0].value;  // Accede a la dirección introducida por el usuario
                            direccionIframe = `<iframe src="${direccionIntroducida}" title="Ejemplo de position fixed" style="width:99%; height:330px"></iframe>`;
                            break;
                        
                        case "ARCHIVO":
                            let archivo = divContenedorSubapartados[m].getElementsByClassName("SUBarchivo")[0].value; //Accede al archivo seleccionado
                            // Como no queremos la ruta entera, sino quedarnos solo con el nombre de la imagen, pedimos que se divida la ruta utilizando la barra invertida como separador 
                            var partes = archivo.split('\\');
                            // Obtener el último elemento del array resultante
                            let rutaArchivo = partes[partes.length - 1];
                            direccionIframe = `<iframe src="./recursos/${rutaArchivo}" title="Ejemplo de position fixed" style="width:99%; height:330px"></iframe>`;
                            break;

                        case "INCRUSTAR":
                            direccionIframe = divContenedorSubapartados[m].getElementsByClassName("SUBcodigo-incrustracion")[0].value;  // Accede a la dirección introducida por el usuario
                    } 

                    
                    // BOTÓN DE INTÉNTALO TÚ MISMO 
                    
                    let botonIntentaloTu = divContenedorSubapartados[m].querySelector(".SUBbotonIntentalo3"); // Accede al chebox de "añadir inténtalo tú mismo" 
                    
                    let codigoIntentalo = ""; // Inicializa una variable para agregar el código del "inténtalo tú mismo" en caso de haber seleccionado la casilla

                    if (botonIntentaloTu.checked) { // Si el botón está selecionado

                    codigoIntentalo = `<button class='display' onclick="abrirNuevaVentana('${carpeta}_${nombreDelArchivo}.html-${z}');">Inténtalo tú mismo</button>`;

                    /*BOTÓN DE INTÉNTALO TU*/
                    infoIntentalo += `case "${carpeta}_${nombreDelArchivo}.html-${z}": \n codigo = "${nuevoCodigo}" \n break; \n\n`  // Esta variable la usamos al final de la función principal (Nota: ahora mismo está programado para que la información aparezca en un párrafo al final del formulario. Pero si lo cambiamos para que se muestre en la consola (o para modificar el javascript), hay que sustituir <br> por \n)
                    /*BOTÓN INTÉNTALO TÚ*/

                        z += 1; // Se va incrementando en 1 el valor de z
                    } 
                
                    
                    // COMÚN A LAS TRES ELECCIONES:Creamos una variable que incluye el código correspondiente a un contenedor de ejemplo, introducimos el contenido del html en el lugar correspondiente, y añadimos un iframe donde incorporamos la variable que contiene la ruta introducida por el usuario
                    ejemplo3 = `
                    <div class="contenedor">

                        <!-- Código ejemplo -->

                        <div class="codigo">
                            <code>
                                ${subContenidoHTML} 
                            </code>
                        </div>

                        <!-- Fin código ejemplo -->

                        <!-- Resultado ejemplo -->

                        <div class="resultado">
                            <div style="padding: 10px;"> <!--Para que el ejemplo no aparezca pegado al borde-->
                            ${direccionIframe}
                            </div>
                        </div>

                        <!-- Fin resultado ejemplo -->
                    </div>

                    <!-- FIN EJEMPLO CON CÓDIGO -->

                    <!-- Botón inténtalo tú mismo -->

                    <div>
                    ${codigoIntentalo}
                    </div>

                    <!-- Fin botón inténtalo tú mismo --><br>

                    <!-- Inicio del rango -->

                    <div>
                        <label for="rango" class="fuenterango">Elige anchura de visualización: </label>
                        <input type="range" class="rango" min="0" max="100" value="45" onchange="cambiarAncho(${y})">
                    </div>
                    <p></p>

                    <!-- Fin del rango -->`

                    y += 1; // Suma 1 cada vez que llama. Importante ponerla después del código para que la primera vez sea 0
                        
                    divCuerpo.insertAdjacentHTML('beforeend', ejemplo3); // Añade el html con el contenido al div principal del "cuerpo del documento". En este caso hay que poner lo de inserAdjacentHTML porque el contenido es html como tal, no está incluido en una etiqueta <p> por ejemplo
                     
                }  // Fin ejemplo iframe

            } // FIN EJEMPLOS


            /*BOTÓN ATENCIÓN, CONOCE MÁS O PRUEBA ESTO*/

            // Casilla principal
            let casillaPrincipal = divContenedorSubapartados[m].getElementsByClassName("SUBcasilla-boton")[0]; // Casilla principal, que pregunta si quieres introducir un ejemplo y si la marcas ya aparecen las tres opciones

            // Casillas
            let casillaAtencion = divContenedorSubapartados[m].getElementsByClassName("SUBmostrarAtencion")[0]; // Accede a la casilla de atencion
            let casillaConoceMas = divContenedorSubapartados[m].getElementsByClassName("SUBmostrarConoceMas")[0]; // Accede a la casilla de conoce más
            let casillaPruebaEsto = divContenedorSubapartados[m].getElementsByClassName("SUBmostrarPruebaEsto")[0]; // Accede a la casilla de pruebaEsto

            let contenidoAtencion = divContenedorSubapartados[m].getElementsByClassName("SUBatencion")[0].value; // Accede al contenido de atencion
            let contenidoConoceMas = divContenedorSubapartados[m].getElementsByClassName("SUBconoceMas")[0].value; // Accede al contenido de conoceMas
            let contenidoPruebaEsto = divContenedorSubapartados[m].getElementsByClassName("SUBpruebaEsto")[0].value; // Accede al contenido de pruebaEsto

            // Para reemplazar los saltos de línea por br
            contenidoAtencion = contenidoAtencion.replace(/\n/g, '<br>'); // En el contenido de atención
            contenidoConoceMas = contenidoConoceMas.replace(/\n/g, '<br>'); // En el contenido de conoce mas
            contenidoPruebaEsto = contenidoPruebaEsto.replace(/\n/g, '<br>'); // En el contenido de prueba esto

            // Crea una variable donde se va a ir sumando el contenido que hay que agregar
            let contenidoHtmlBotones = "";
           
            // Para que los botones aparezcan uno al lado del otro:
            let divFlexible = document.createElement("div"); // Crea un nuevo div
            divFlexible.className = "cuadroflex"; // Le añade la clase flexible

            if(casillaPrincipal.checked) { // Si la casilla principal está marcada, significa que habrá algún botón

                if(casillaAtencion.checked && contenidoAtencion !== "") { // Si la casilla de introducir botón de atención está marcada y el contenido no está vacío, añade a la varaible el siguiente contenido
                    
                    contenidoHtmlBotones += `
                    <div class="cuadroext2">
                        <svg class="img3" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect class="AtencionFondo" width="800" height="800" fill="#FAE73B"/>
                            <circle class="AtencionCirculo" cx="400" cy="400" r="322" fill="white" stroke="#9A8B00" stroke-width="12"/>
                            <path class="AtencionPaloFill" d="M336.457 140.69C338.133 137.625 341.694 134.751 344.614 132.757C347.481 130.799 350.935 130 354.41 130H399.769H401.231H446.59C450.065 130 453.519 130.799 456.386 132.757C459.306 134.751 462.867 137.625 464.543 140.69C467.028 145.238 467.033 153.262 466.991 155.282C466.985 155.599 466.964 155.912 466.936 156.227L436.249 505.463C435.959 508.765 434.935 511.961 433.25 514.819C431.725 517.406 429.692 519.659 427.272 521.443L426.654 521.899C422.162 525.212 416.722 527 411.136 527H401.231H399.769H389.864C384.278 527 378.838 525.212 374.346 521.899L373.728 521.443C371.308 519.659 369.275 517.406 367.75 514.819C366.065 511.961 365.041 508.765 364.751 505.463L334.064 156.227C334.036 155.912 334.015 155.599 334.009 155.282C333.967 153.262 333.972 145.238 336.457 140.69Z" fill="#FAE73B"/>
                            <path class="AtencionPaloStroke" d="M401.231 527H389.864C384.278 527 378.838 525.212 374.346 521.899L373.728 521.443C371.308 519.659 369.275 517.406 367.75 514.819C366.065 511.961 365.041 508.765 364.751 505.463L334.064 156.227C334.036 155.912 334.015 155.599 334.009 155.282C333.967 153.262 333.972 145.238 336.457 140.69C338.133 137.625 341.694 134.751 344.614 132.757C347.481 130.799 350.935 130 354.41 130H401.231M399.769 527H411.136C416.722 527 422.162 525.212 426.654 521.899L427.272 521.443C429.692 519.659 431.725 517.406 433.25 514.819C434.935 511.961 435.959 508.765 436.249 505.463L466.936 156.227C466.964 155.912 466.985 155.599 466.991 155.282C467.033 153.262 467.028 145.238 464.543 140.69C462.867 137.625 459.306 134.751 456.386 132.757C453.519 130.799 450.065 130 446.59 130H399.769" stroke="#9A8B00" stroke-width="12"/>
                            <path class="AtencionExclamCirculo" d="M448 616C448 642.562 426.681 664 400.5 664C374.319 664 353 642.562 353 616C353 589.438 374.319 568 400.5 568C426.681 568 448 589.438 448 616Z" fill="#FAE73B" stroke="#9A8B00" stroke-width="12"/>
                            </svg>            <div class="cuadro2">
                            <h4>¡Atención!</h4>
                            <p>
                                ${contenidoAtencion}
                            </p>
                        </div>
                    </div>`
                }

                if(casillaConoceMas.checked && contenidoConoceMas !== "") { // Si la casilla de introducir botón de conoce más está marcada y el contenido no está vacío, añade a la varaible el siguiente contenido
                    contenidoHtmlBotones += `
                    <div class="cuadroext">
                        <svg class="img3" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect class="ConoceFondo" width="800" height="800" fill="#F46B73"/>
                            <path class="ConoceCristal" d="M313.156 519.307L320.104 562H400.5H480.896L487.844 519.307L499.755 468.671L503.754 456.435C512.199 430.593 527.042 407.308 546.901 388.745L561.4 372.63C575.384 357.087 585.78 338.659 591.852 318.65C596.912 301.978 598.875 284.52 597.643 267.14L596.729 254.235C595.606 238.384 592.71 222.708 588.096 207.502L584.744 196.459C580.379 182.074 574.096 168.342 566.065 155.635C539.179 113.093 494.586 84.9097 444.633 78.8894L441.194 78.475L435.032 77.9423C412.383 75.9843 389.608 75.9608 366.955 77.8719L359.806 78.475L356.367 78.8894C306.415 84.9097 261.821 113.093 234.935 155.635C226.904 168.342 220.621 182.074 216.256 196.459L212.904 207.502C208.29 222.708 205.394 238.384 204.271 254.235L203.357 267.14C202.125 284.52 204.088 301.978 209.148 318.65C215.22 338.659 225.616 357.087 239.6 372.63L254.099 388.745C273.958 407.308 288.801 430.593 297.246 456.435L301.245 468.671L313.156 519.307Z" fill="white" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceFilamento" d="M368.509 561V284.254C368.509 271.964 358.35 262 346.059 262V262C333.982 262 324 271.79 324 283.867V283.867C324 295.944 333.79 305.734 345.867 305.734H456.133C468.21 305.734 478 295.944 478 283.867V283.867C478 271.79 468.21 262 456.133 262H454.41C441.382 262 430.821 272.561 430.821 285.59V561" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceRosca" d="M319.616 588.28L319.031 587.864C310.585 581.862 311.166 569.139 320.123 563.931C322.298 562.666 324.769 562 327.285 562H477.445C480.435 562 483.348 562.947 485.766 564.705C493.079 570.019 493.603 580.733 486.845 586.736L486.249 587.266C483.541 589.671 480.045 591 476.422 591H328.139C325.085 591 322.106 590.049 319.616 588.28Z" fill="#FFD3D3" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceRosca" d="M319.418 618.041L318.808 617.592C310.339 611.366 310.933 598.526 319.941 593.107C322.233 591.728 324.857 591 327.531 591H477.16C480.331 591 483.415 592.03 485.95 593.936C493.257 599.43 493.789 610.208 487.057 616.395L486.441 616.96C483.614 619.558 479.914 621 476.075 621H328.44C325.194 621 322.033 619.963 319.418 618.041Z" fill="#FFD3D3" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceRosca" d="M334.552 714.502L333.78 713.426C328.053 705.448 328.584 694.574 335.061 687.191C339.07 682.621 344.854 680 350.934 680H453.227C460.046 680 466.437 683.323 470.354 688.905C475.019 695.553 475.416 704.3 471.372 711.343L470.726 712.469C466.63 719.602 459.034 724 450.809 724H353.06C345.72 724 338.831 720.464 334.552 714.502Z" fill="#FFD3D3" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceRosca" d="M319.418 648.041L318.808 647.592C310.339 641.366 310.933 628.526 319.941 623.107C322.233 621.728 324.857 621 327.531 621H477.16C480.331 621 483.415 622.03 485.95 623.936C493.257 629.43 493.789 640.208 487.057 646.395L486.441 646.96C483.614 649.558 479.914 651 476.075 651H328.44C325.194 651 322.033 649.963 319.418 648.041Z" fill="#FFD3D3" stroke="#A24349" stroke-width="12"/>
                            <path class="ConoceRosca" d="M319.616 677.28L319.031 676.864C310.585 670.862 311.166 658.139 320.123 652.931C322.298 651.666 324.769 651 327.285 651H477.445C480.435 651 483.348 651.947 485.766 653.705C493.079 659.019 493.603 669.733 486.845 675.736L486.249 676.266C483.541 678.671 480.045 680 476.422 680H328.139C325.085 680 322.106 679.049 319.616 677.28Z" fill="#FFD3D3" stroke="#A24349" stroke-width="12"/>
                            </svg>            <div class="cuadro">
                            <h4>Conoce más...</h4>
                            <p>
                                ${contenidoConoceMas}
                            </p>
                        </div>
                    </div>`
                    
                }

                if(casillaPruebaEsto.checked && contenidoPruebaEsto !== "") { // Si la casilla de introducir botón de prueba esto está marcada y el contenido no está vacío, añade a la varaible el siguiente contenido
                    contenidoHtmlBotones += `
                    <div class="cuadroext3">
                        <svg class="img3" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect class="PruebaFondo" width="800" height="800" fill="#409A4E"/>
                            <path class="PruebaCable" d="M400 101V101C409.352 75.4383 431.032 56.366 457.578 50.3491L469.583 47.6278C483.056 44.5739 497.006 44.2671 510.601 46.7256L514.038 47.3473C557.175 55.1487 592.62 85.8613 606.483 127.449L609 135L624.585 181.105C630.026 197.201 640.882 210.912 655.303 219.899L659.654 222.61C684.751 238.251 717.157 235.46 739.21 215.759V215.759C761.537 195.813 767.802 163.417 754.522 136.586L738.336 103.884C731.515 90.1025 727.54 75.0885 726.648 59.7375L725.5 40V0" stroke="#1C6227" stroke-width="12"/>
                            <path class="PruebaRaton" d="M281.021 134.118L299.131 124.719C313.375 117.326 328.614 111.817 344.424 108.345C357.574 105.458 371.026 104 384.522 104H400H415.478C428.974 104 442.426 105.458 455.576 108.345C471.386 111.817 486.625 117.326 500.869 124.719L518.979 134.118C533.481 141.644 546.434 151.603 557.213 163.514L558.969 165.455C569.929 177.565 578.188 191.667 583.245 206.907C587.059 218.398 589 230.378 589 242.43V554.597C589 567.008 587.441 579.459 584.397 591.528C578.62 614.433 567.454 635.963 551.805 654.216C544.562 662.664 536.413 670.37 527.491 677.209L524.636 679.397C508.774 691.556 490.756 700.92 471.432 707.049C459.633 710.791 447.44 713.298 435.07 714.524L400 718L364.93 714.524C352.56 713.298 340.367 710.791 328.568 707.049C309.244 700.92 291.226 691.556 275.364 679.397L272.509 677.209C263.587 670.37 255.438 662.664 248.195 654.216C232.546 635.963 221.38 614.433 215.603 591.528C212.559 579.459 211 567.008 211 554.597V242.43C211 230.378 212.941 218.398 216.755 206.907C221.812 191.667 230.071 177.565 241.031 165.455L242.787 163.514C253.566 151.603 266.519 141.644 281.021 134.118Z" fill="white" stroke="#1C6227" stroke-width="12"/>
                            <path class="PruebaLinea" d="M211 334V334C335.171 318.148 461.84 318.065 586 334V334" stroke="#1C6227" stroke-width="12"/>
                            <path class="PruebaLinea" d="M398 108V316.5" stroke="#1C6227" stroke-width="12"/>
                            <path class="PruebaRueda" d="M392.563 166H398.5H404.437C412.948 166 420.482 170.957 423.072 178.261C423.687 179.995 424 181.805 424 183.625V265.137C424 269.071 422.873 272.939 420.729 276.366C416.231 283.553 407.659 288 398.5 288C389.341 288 380.769 283.553 376.271 276.366C374.127 272.939 373 269.071 373 265.137V183.625C373 181.805 373.313 179.995 373.928 178.261C376.518 170.957 384.052 166 392.563 166Z" fill="#C3DFC8" stroke="#1C6227" stroke-width="12"/>
                            </svg>            <div class="cuadro3">
                            <h4>Prueba esto</h4>
                            <p>
                                ${contenidoPruebaEsto}
                            </p>
                        </div>   
                    </div>`
                }  

                divFlexible.insertAdjacentHTML('beforeend', contenidoHtmlBotones); // Añade el contenido sumado en la varaible "contenidoHtmlBotones" al div creado con la clase "cuadroflex"
                divCuerpo.appendChild(divFlexible); // Añade el html con el contenido al div principal del "cuerpo del documento".      
            }


        } // FIN DE SUBAPARTADOS


        /*PARA AÑADIR LÍNEA DIVISORA AL FINAL DE CADA APARTADO*/
        let linea = document.createElement("hr"); // Crear línea 
        divCuerpo.appendChild(linea); // Insertar al final
    }
    
/*FIN DE CADA APARTADO*/


    /*PRUEBA ESTO (FINAL - Siempre está)*/
    let pruebaEsto = document.getElementById("prueba-esto").value; // Accede al valor introducido

    pruebaEsto = pruebaEsto.replace(/\n/g, '<br>'); // Para reemplazar los saltos de línea por br
    
    
    /*RESUMEN*/
    let resumen = document.getElementById("resumen").value; // Accede al valor introducido en la textarea con el id "resumen"

    resumen = resumen.replace(/\n*<(o|u)l>\s*\n*<li>/g, '<$1l><li>') // Elimina los saltos de línea manuales antes de una lista (ol o ul)
    .replace(/<\/li>\s*\n*<\/(o|u)l>\n*/g, '</li></$1l>') // Elimina los espacios después de </ol> o </ul>
    .replace(/<\/li>\n<li>/g, '</li><li>') // Elimina los saltos de línea entre <li>  (ESTAS TRES LÍNEAS SON PARA CONTROLAR LOS SALTOS DE LÍNEA EN LAS LISTAS)
    .replace(/(<\/li>)\n+(?=<li>|<\/?(o|u)l>)/g, '$1\n') // Reduce múltiples saltos de línea entre elementos <li> a uno solo NUEVO
    .replace(/<\/li>\s*\n*<\/(o|u)l>\n*/g, '</li></$1l>') // Elimina los espacios después de </ol> o </ul> NUEVO
    // TABLAS
    .replace(/\s*\n*<t(able|head|body|r|h|d)>/g, '<t$1>') // Para eliminar los espacios al principio
    .replace(/<\/t(able|head|body|r|h|d)>\s/g, '</t$1>'); // Para eliminar los espacios al final

    resumen = resumen.replace(/\n/g, '<br>'); // Para reemplazar los saltos de línea por br 

    // Para añadir el resumen al índice:
    let enlaceResumen = document.createElement("a"); // Crea un a (etiqueta de enlace)

    enlaceResumen.href = "#resumen";  // A la etiqueta a le añade un href con #resumen --> <a href="#resumen"></a>

    enlaceResumen.className = "indicecolor"; // A la etiqueta le añade la clase para que los enlaces no cambien de color una vez pulsados -- <a href="#resumen" class="indicecolor"></a>

    let liResumen = document.createElement("li"); // Crea un nuevo li

    liResumen.innerHTML = "Resumen"; // Incorporta la palabra "Resumen" introducida en el li. ---> <li>Resumen</li>

    enlaceResumen.appendChild(liResumen); // Incorpora el li dentro del enlace  --- <a href="#resumen" class="indicecolor"><li>Resumen</li></a>

    indiceH2.appendChild(enlaceResumen); // Agrega el enlace con el título como último elemento del h2 (Esto ocurre al pulsar el botón final de "actualizar plantilla", por lo que en este momento ya se habrán añadido todos los títulos necesarios, así que este enlace será el último del índice)

    
    /*ENLACES DE REFERENCIA*/
    let referencia = document.getElementById("referencia").value;

    referencia = referencia.replace(/\n*<(o|u)l>\s*\n*<li>/g, '<$1l><li>') // Elimina los saltos de línea manuales antes de una lista (ol o ul)
    .replace(/<\/li>\s*\n*<\/(o|u)l>\n*/g, '</li></$1l>') // Elimina los espacios después de </ol> o </ul>
    .replace(/<\/li>\n<li>/g, '</li><li>'); // Elimina los saltos de línea entre <li>  (ESTAS TRES LÍNEAS SON PARA CONTROLAR LOS SALTOS DE LÍNEA EN LAS LISTAS)

    referencia = referencia.replace(/\n/g, '<br>');

    /*PAGINA ANTERIOR*/
    let nombrePaginaAnterior = document.getElementById("selectPaginaAnterior").value; // Accede al valor introducido en el input

    
    let paginaAnterior = "";

    if (nombrePaginaAnterior !== "") {
        paginaAnterior += 
        `<a href="./${carpeta}_${nombrePaginaAnterior}.html"> 
            <div class="svgContainer">
                <svg class="flechaizq" title="Ir a Página Anterior" version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt" height="64.000000pt"
                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,215.000000) scale(0.040000,-0.040000)" fill="#000000" stroke="none">
                        <path d="M1908 4865 c-136 -41 -221 -103 -346 -249 -119 -141 -611 -724 -752
                        -892 -41 -49 -108 -128 -150 -175 -41 -47 -140 -163 -220 -258 -80 -95 -179
                        -212 -220 -260 -95 -108 -140 -183 -176 -291 -15 -47 -32 -86 -36 -88 -15 -6
                        -8 -153 9 -206 62 -193 79 -219 310 -486 93 -107 193 -225 223 -261 30 -36
                        129 -153 221 -260 138 -163 509 -600 805 -950 144 -171 280 -245 469 -256 289
                        -17 540 150 620 412 49 160 30 344 -51 486 -48 86 -64 107 -269 349 -266 313
                        -355 423 -355 436 0 6 6 16 13 22 9 8 402 12 1287 15 1392 4 1337 1 1472 61
                        133 59 266 203 301 327 9 30 26 64 37 74 18 16 20 30 20 138 0 86 -4 125 -13
                        136 -8 9 -26 47 -41 85 -55 139 -160 264 -274 324 -38 20 -100 41 -155 53 -87
                        18 -154 19 -1358 19 -1130 0 -1268 2 -1279 15 -11 13 -10 20 6 40 10 13 41 52
                        69 87 27 35 140 169 250 298 283 331 302 358 344 494 16 52 21 94 21 180 0
                        124 -17 195 -72 300 -39 73 -151 188 -228 233 -125 73 -330 93 -482 48z" />
                    </g>
                </svg>
            </div>
        </a>`;
    }


    /*PÁGINA SIGUIENTE*/
    let nombrePaginaSiguiente = document.getElementById("selectPaginaSiguiente").value;

    let paginaSiguiente = "";

    if (nombrePaginaSiguiente !== "") {
        paginaSiguiente +=  
        `<a href="./${carpeta}_${nombrePaginaSiguiente}.html"> 
            <div class="svgContainer">
                <svg class="flechader" title="Ir a Página Siguiente" version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt" height="64.000000pt"
                    viewBox="0 0 300.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,215.000000) scale(0.040000,-0.040000)" fill="#000000" stroke="none">
                        <path d="M2865 4869 c-207 -58 -351 -197 -420 -409 -26 -77 -26 -282 0 -360
                        27 -83 76 -166 155 -260 39 -47 107 -128 149 -180 43 -52 114 -135 157 -185
                        193 -219 235 -281 204 -300 -5 -3 -569 -6 -1252 -6 -1231 0 -1320 -2 -1431
                        -34 -174 -51 -321 -197 -382 -382 -16 -46 -32 -83 -36 -83 -5 0 -9 -52 -9
                        -115 0 -66 4 -115 10 -115 5 0 12 -16 16 -36 3 -19 18 -59 31 -87 85 -175 208
                        -284 382 -341 65 -21 77 -21 1370 -26 1200 -5 1305 -6 1314 -22 13 -20 15 -18
                        -313 -403 -288 -340 -325 -394 -360 -532 -61 -240 20 -491 202 -630 108 -83
                        190 -112 339 -120 182 -10 336 41 456 150 31 29 154 169 274 312 221 265 353
                        420 784 925 133 157 289 339 345 405 132 155 177 222 211 313 15 41 35 82 43
                        91 12 14 16 42 16 124 0 59 -4 107 -9 107 -5 0 -23 37 -41 82 -44 116 -111
                        210 -336 473 -108 127 -220 257 -248 291 -124 148 -494 584 -631 744 -184 215
                        -345 406 -364 431 -21 29 -130 114 -179 138 -118 60 -313 77 -447 40z" />
                    </g>
                </svg>
            </div>
        </a>`; // Para que, si no pone dirección en el campo de "página siguiente", no aparezca la flecha
    }

    
    /*NOMBRE DEL ARCHIVO*/
    // let nombreArchivo = document.getElementById("nombre-archivo").value; // Accede al valor ¿REPETIDO?

    /*PALABRAS CLAVE*/
    var palabrasClave = document.getElementById("palabras-clave").value;
    

    /*Crear una variable con todo el contenido de la página HTML de plantilla*/
        var nuevoHTML = `
        <!DOCTYPE html>
        <html lang="es-ES">

        <head>
            <meta charset="utf-8">
            <title>${titulo}</title>

            <meta name="description" content="${palabrasClave}">
            <meta name="title" content="${titulo}">
            <meta name="keywords" content="${palabrasClave}">
            <meta name="author" content="IMFE">

            <link rel="icon" type="image/png" href="logo.svg">
            <link rel="icon" type="image/gif" href="logo.svg">
            <link rel="icon" type="image/vnd.microsoft.icon" href="logo.svg">
            <link rel="icon" type="image/svg+xml" href="${imagen64}">
            <link rel="icon" type="image/png" href="${imagen64}">

            <link rel="stylesheet" href="./CSS/tutorial.css">
            <link rel="stylesheet" href="../CSS/tutorial.css">
            <link rel="stylesheet" href="../../CSS/tutorial.css">

            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="../../JS/MenuTuto.js"></script> <!--Para vincular la función que hace que funcione el menú y el buscador-->
            <script src="../../JS/intentalotumismo.js"></script> <!--Para vincular la función que hace que funcionen los inténtalo tú mismo-->
            
            <script src="https://www.aptussum.org/abririntentalotumismo.js"></script> <!--También para los inténtalo tú mismo-->
            <script> 
            /*variables necesarias para la funcionalidad de intentalotumismo. */
                var referenciaVentana;
                var codigo;
            </script>
        </head>

        <body>

            <!--div class=" padre overlap-group"-->

            <div class="padre overlap-group">

                <!-- header -->

                <div id="header">
                    <div>
                        <a href="https://www.malaga.eu/">
                            <img class="ayuntamiento" src="../../img/logo-imf-1.png" alt="ayuntamiento 1" />
                        </a>
                        <a href="https://imfe.malaga.eu/">
                            <img class="imfe" src="../../img/logo-imfe-ok-2019-1.png" alt="imfe 1" />
                        </a>
                    </div>
                    
                    <div id="eliPagInt">
                        <script>
                            /*esta funcion dependiendo de la variable tipoPaginaIntermedia pone en la página los logos de HTML, CSS, FORMULARIO, O, CSS.
                            y añade un borde al logo que le indiques, de forma que si estás trajando en el grupo de html debes inicializar su valor a
                            HTML, y si estás en otro grupo de trabajo haces lo mismo pero para tu grupo de trabajo (HTML, CSS, FORMULARIO, O, JAVASCRIPT) */
                            var tipoPaginaIntermedia = "${inicialSeleccionada}";
                            eligePaginaIntermedia(tipoPaginaIntermedia);
                        </script>

                        <a href="../../index.html">
                            ${codigoLogo}
                        </a>
                        <a href="" class="abrir" onmousedown="Abrir()" onclick="crearMenu()">
                            <div class="svgContainer">
                                <svg class="menu" width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#000000" stroke="none">
                                    <path
                                        d="M46.6667 40C48.5075 40 50 41.4925 50 43.3333C50 45.1742 48.5075 46.6667 46.6667 46.6667C45.665 46.6667 14.335 46.6667 13.3333 46.6667C11.4925 46.6667 10 45.1742 10 43.3333C10 41.4925 11.4925 40 13.3333 40C14.335 40 45.665 40 46.6667 40ZM46.6667 26.6667C48.5075 26.6667 50 28.1592 50 30C50 31.8408 48.5075 33.3333 46.6667 33.3333C45.665 33.3333 14.335 33.3333 13.3333 33.3333C11.4925 33.3333 10 31.8408 10 30C10 28.1592 11.4925 26.6667 13.3333 26.6667C14.335 26.6667 45.665 26.6667 46.6667 26.6667ZM46.6667 13.3333C48.5075 13.3333 50 14.8258 50 16.6667C50 18.5075 48.5075 20 46.6667 20C45.665 20 14.335 20 13.3333 20C11.4925 20 10 18.5075 10 16.6667C10 14.8258 11.4925 13.3333 13.3333 13.3333C14.335 13.3333 45.665 13.3333 46.6667 13.3333Z" />
                                    </g>
                                </svg>
                            </div> 
                            <pre> MENU</pre>
                        </a>

                    </div>

                </div>

                <!-- Fin header -->


                <!-- --------------------------------------------------------------------------------------------------- -->


                <div class="main">

                    <!-- TITULO PRINCIPAL -->

                    <h1 class="tituloprincipal">${titulo}</h1>

                    <!-- FIN TITULO PRINCIPAL -->

                    <!-- ORIENTACIONES PEDAGOGICAS -->

                    <h2>Orientaciones pedagógicas:</h2>
                    <div class="pedagogica">
                        <p>${orientaciones}</p>
                    </div>

                    <!-- FIN ORIENTACIONES PEDAGOGICAS -->

                    <!-- ÍNDICE -->

                    <h2>Índice:</h2>
                    <div class="indice">
                        <ul class="indiceul">
                            <h2>
                            ${indiceH2.innerHTML}
                            </h2>
                        </ul>
                    </div>

                    <!-- FIN ÍNDICE -->

                    <hr>

                    ${divCuerpo.innerHTML}  

                    <!-- --------------------------------------------------------------------------------------------------- -->

                    <!-- RESUMEN -->

                    <p id="resumen"></p>

                        <!-- PRUEBA ESTO -->

                        <div class="cuadroflex">

                            <div class="cuadroext3">

                            <!--SVG-->

                            <svg class="img3" width="800" height="800" viewBox="0 0 800 800" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect class="PruebaFondo" width="800" height="800" fill="#409A4E" />
                                <path class="PruebaCable"
                                    d="M400 101V101C409.352 75.4383 431.032 56.366 457.578 50.3491L469.583 47.6278C483.056 44.5739 497.006 44.2671 510.601 46.7256L514.038 47.3473C557.175 55.1487 592.62 85.8613 606.483 127.449L609 135L624.585 181.105C630.026 197.201 640.882 210.912 655.303 219.899L659.654 222.61C684.751 238.251 717.157 235.46 739.21 215.759V215.759C761.537 195.813 767.802 163.417 754.522 136.586L738.336 103.884C731.515 90.1025 727.54 75.0885 726.648 59.7375L725.5 40V0"
                                    stroke="#1C6227" stroke-width="12" />
                                <path class="PruebaRaton"
                                    d="M281.021 134.118L299.131 124.719C313.375 117.326 328.614 111.817 344.424 108.345C357.574 105.458 371.026 104 384.522 104H400H415.478C428.974 104 442.426 105.458 455.576 108.345C471.386 111.817 486.625 117.326 500.869 124.719L518.979 134.118C533.481 141.644 546.434 151.603 557.213 163.514L558.969 165.455C569.929 177.565 578.188 191.667 583.245 206.907C587.059 218.398 589 230.378 589 242.43V554.597C589 567.008 587.441 579.459 584.397 591.528C578.62 614.433 567.454 635.963 551.805 654.216C544.562 662.664 536.413 670.37 527.491 677.209L524.636 679.397C508.774 691.556 490.756 700.92 471.432 707.049C459.633 710.791 447.44 713.298 435.07 714.524L400 718L364.93 714.524C352.56 713.298 340.367 710.791 328.568 707.049C309.244 700.92 291.226 691.556 275.364 679.397L272.509 677.209C263.587 670.37 255.438 662.664 248.195 654.216C232.546 635.963 221.38 614.433 215.603 591.528C212.559 579.459 211 567.008 211 554.597V242.43C211 230.378 212.941 218.398 216.755 206.907C221.812 191.667 230.071 177.565 241.031 165.455L242.787 163.514C253.566 151.603 266.519 141.644 281.021 134.118Z"
                                    fill="white" stroke="#1C6227" stroke-width="12" />
                                <path class="PruebaLinea" d="M211 334V334C335.171 318.148 461.84 318.065 586 334V334"
                                    stroke="#1C6227" stroke-width="12" />
                                <path class="PruebaLinea" d="M398 108V316.5" stroke="#1C6227" stroke-width="12" />
                                <path class="PruebaRueda"
                                    d="M392.563 166H398.5H404.437C412.948 166 420.482 170.957 423.072 178.261C423.687 179.995 424 181.805 424 183.625V265.137C424 269.071 422.873 272.939 420.729 276.366C416.231 283.553 407.659 288 398.5 288C389.341 288 380.769 283.553 376.271 276.366C374.127 272.939 373 269.071 373 265.137V183.625C373 181.805 373.313 179.995 373.928 178.261C376.518 170.957 384.052 166 392.563 166Z"
                                    fill="#C3DFC8" stroke="#1C6227" stroke-width="12" />
                            </svg>

                                <div class="cuadro3">
                                    <h4>Prueba esto</h4>
                                    <p>
                                        ${pruebaEsto}
                                    </p>
                                </div>   
                            </div>

                        </div><br>

                        <!-- FIN PRUEBA ESTO -->
                        
                    
                    <div class="resumen">
                        <details>
                            <summary><h2 style="display: inline-block;">Resumen</h2></summary>
                            <p>${resumen}</p>
                        </details>
                    </div><br>

                    <!-- FIN RESUMEN -->


                    <!-- --------------------------------------------------------------------------------------------------- -->


                    <!-- ENLACES DE REFERENCIA -->

                    <hr>
                    <h3>Enlaces de referencia:</h3>
                    <div class="referencia">
                        <p>${referencia}</p>
                    </div><br>

                    <!-- FIN ENLACES DE REFERENCIA -->


                    <!-- --------------------------------------------------------------------------------------------------- -->


                    <hr><br>

                    <!-- pie de página -->

                    <div class="pie">
                        <div class="formulario">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSebNH1TrpXBxKQN-mKTVJnTt3OEVLhVuFMbdRqyUTHTRwOECw/viewform?embedded=true"
                                width="700" height="460" frameborder="0" marginheight="0" marginwidth="0">Cargando…
                            </iframe>
                        </div>

                        <div class="sobrenosotros">
                            <a href="../../index.html">
                            ${codigoLogo}
                            </a>
                            <a href="../../OTRAS/sobrenosotros.html">
                                <p class="blanco">SOBRE NOSOTROS</p>
                            </a>
                            <div class="divpoliticas">
                                <ul class="politicas">
                                    <li><a href="../../OTRAS/cookies.html">
                                            <p class="cookies">Cookies</p>
                                        </a></li>
                                    <li><a href="../../OTRAS/privacidad.html">
                                            <p class="cookies">· Política de privacidad</p>
                                        </a></li>
                                    <li><a href="../../OTRAS/legal.html">
                                            <p class="cookies">· Aviso legal</p>
                                        </a></li>
                                </ul>
                            </div>
                            <div class="redes">
                                <a href="https://es-es.facebook.com/imfemalaga/"> <!-- LOGO FACEBOOK -->
                                
                                    <!--SVG-->
                                    <div class="svgContainer">

                                        <svg class="facebook" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="25.000000pt" height="25.000000pt" viewBox="0 0 50.000000 50.000000"
                                            preserveAspectRatio="xMidYMid meet">

                                            <g transform="translate(-5.000000,53.000000) scale(0.115000,-0.115000)"
                                                fill="#000000" stroke="none">
                                                <path d="M57 442 c-15 -16 -17 -45 -17 -194 0 -157 2 -177 18 -191 16 -15 45
                                                -17 194 -17 157 0 177 2 191 18 15 16 17 45 17 194 0 157 -2 177 -18 191 -16
                                                15 -45 17 -194 17 -157 0 -177 -2 -191 -18z m378 -192 l0 -185 -52 -3 -53 -3
                                                0 70 c0 64 2 71 20 71 13 0 20 7 20 19 0 11 3 26 6 35 5 12 0 16 -20 16 -16 0
                                                -26 6 -26 15 0 9 9 15 25 15 21 0 25 5 25 30 0 25 -4 30 -35 36 -47 9 -82 -15
                                                -91 -61 -3 -20 -12 -35 -20 -35 -9 0 -14 -12 -14 -35 0 -24 5 -35 15 -35 12 0
                                                15 -14 15 -70 l0 -71 -92 3 -93 3 -3 175 c-1 96 0 180 3 187 3 11 44 13 187
                                                11 l183 -3 0 -185z m-75 87 c0 -7 -10 -17 -22 -22 -14 -6 -24 -21 -26 -37 -3
                                                -24 0 -28 23 -28 32 0 29 -23 -3 -28 -20 -3 -22 -9 -22 -83 0 -72 -2 -79 -20
                                                -79 -18 0 -20 7 -20 80 0 64 -3 80 -15 80 -8 0 -15 7 -15 15 0 8 7 15 15 15
                                                10 0 15 10 15 31 0 49 16 69 55 69 22 0 35 -5 35 -13z" />
                                                        </g>
                                        </svg>
                                    </div>
                                </a>

                                <a href="https://twitter.com/malagaimfe?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                                
                                    <!--SVG-->
                                    <div class="svgContainer">
                                        <svg class="twitter" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="25.500000pt" height="25.000000pt" viewBox="0 0 45.000000 44.000000"
                                            preserveAspectRatio="xMidYMid meet">

                                            <g transform="translate(5.000000,40.000000) scale(0.080000,-0.080000)"
                                                fill="#000000" stroke="none">
                                                <path d="M66 358 c32 -46 68 -97 81 -115 13 -17 23 -35 23 -40 0 -4 -37 -51
                                            -82 -103 -65 -77 -77 -96 -62 -99 18 -3 55 31 135 126 l36 43 57 -85 58 -85
                                            64 0 c35 0 64 3 64 6 0 3 -38 61 -84 128 l-84 122 79 92 c73 83 78 92 55 92
                                            -18 0 -41 -19 -88 -74 -44 -52 -66 -71 -75 -65 -6 6 -30 39 -53 75 l-42 64
                                            -69 0 -69 0 56 -82z m183 -134 c67 -97 121 -178 121 -181 0 -2 -10 -3 -21 -1
                                            -15 2 -58 55 -140 173 -65 94 -118 173 -119 178 0 4 9 7 19 7 14 0 54 -49 140
                                            -176z" />
                                            </g>
                                        </svg>
                                    </div>
                                </a>

                                <a href="https://www.youtube.com/user/imfecanaltv"> <!-- LOGO YOUTUBE -->
                                
                                    <!--SVG-->
                                    <div class="svgContainer">
                                        <svg class="youtube" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="33.000000pt" height="24.000000pt" viewBox="0 0 66.000000 48.000000"
                                            preserveAspectRatio="xMidYMid meet">

                                            <g transform="translate(1.200000,45.000000) scale(0.08000,-0.08000)" fill="#000000"
                                                stroke="none">
                                                <path d="M204 550 c-106 -11 -129 -18 -158 -49 -38 -39 -55 -181 -38 -313 18
                                                -149 38 -164 242 -180 105 -9 171 -9 274 0 142 12 184 25 211 65 25 39 40 202
                                                27 302 -18 141 -41 161 -193 175 -119 11 -262 11 -365 0z m453 -62 c48 -23 58
                                                -58 58 -208 -1 -222 -2 -223 -325 -224 -336 -1 -335 -1 -335 231 0 151 0 153
                                                26 178 20 21 41 28 95 35 102 13 447 4 481 -12z" />
                                                                <path d="M303 420 c-36 -15 -45 -45 -41 -140 3 -94 20 -130 60 -130 20 0 148
                                                70 181 98 27 23 22 67 -10 90 -32 22 -158 92 -164 91 -2 0 -14 -4 -26 -9z
                                                m165 -128 c3 -9 -131 -92 -149 -92 -10 0 -13 163 -2 173 7 8 146 -67 151 -81z" />
                                            </g>
                                        </svg>
                                    </div>
                                </a>

                                <a href="https://imfemalaga.blogspot.com/">
                                
                                    <div class="svgContainer">
                                        <svg class="blog" version="1.0" xmlns="http://www.w3.org/2000/svg" width="30.000000pt"
                                            height="25.600000pt" viewBox="0 0 72.000000 62.000000"
                                            preserveAspectRatio="xMidYMid meet">
                                            <g transform="translate(0.000000,55.000000) scale(0.09000,-0.09000)" fill="#000000"
                                                stroke="none">
                                                <path d="M45 608 c-43 -25 -44 -33 -45 -295 0 -138 3 -259 6 -268 16 -41 50
                                                -45 354 -45 296 0 319 3 347 39 9 12 12 86 13 268 0 138 -3 259 -6 268 -16 41
                                                -49 45 -356 45 -202 -1 -299 -4 -313 -12z m629 -34 c24 -23 24 -505 0 -528
                                                -13 -14 -56 -16 -314 -16 -258 0 -301 2 -314 16 -24 23 -24 505 0 528 13 14
                                                56 16 314 16 258 0 301 -2 314 -16z" />
                                                                    <path d="M191 492 c-55 -29 -71 -71 -71 -180 0 -104 13 -144 58 -177 24 -17
                                                46 -20 172 -23 126 -2 149 0 179 16 48 26 71 73 71 148 0 66 -8 80 -56 93 -21
                                                5 -30 16 -37 42 -19 75 -65 99 -189 99 -71 0 -101 -4 -127 -18z m223 -16 c38
                                                -16 66 -50 66 -82 0 -26 27 -51 60 -56 23 -3 25 -8 28 -58 2 -38 -2 -65 -14
                                                -87 -26 -50 -66 -63 -194 -63 -180 0 -210 25 -210 180 0 104 14 139 64 164 39
                                                20 156 21 200 2z" />
                                                                    <path d="M254 420 c-29 -11 -35 -33 -18 -59 13 -18 25 -21 79 -21 65 0 95 14
                                                95 45 0 37 -98 59 -156 35z m124 -37 c3 -10 -13 -13 -57 -13 -48 0 -61 3 -61
                                                15 0 13 11 15 57 13 34 -2 58 -8 61 -15z" />
                                                                    <path d="M242 268 c-19 -19 -14 -56 9 -69 13 -6 59 -10 121 -7 85 2 102 6 114
                                                22 12 17 12 23 0 40 -12 19 -25 21 -122 24 -77 2 -113 -1 -122 -10z m218 -33
                                                c0 -12 -18 -15 -100 -15 -82 0 -100 3 -100 15 0 12 18 15 100 15 82 0 100 -3
                                                100 -15z" />
                                            </g>
                                        </svg>
                                    </div>
                                </a>

                            </div>
                            <div class="divcopyright">
                                <p class="copyright">
                                    ©2023 <a href="../../OTRAS/licencias.html">Tutorialimfe.com</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!--Fin pie de página-->

                </div>

                <!--Fin div main-->


                <!-- --------------------------------------------------------------------------------------------------- -->


                <!-- Flecha ir arriba, siguiente página y anterior página -->

                <a href="#"> 

                    <div class="svgContainer">
                        <svg class=flecha title="Ir a Inicio" version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt"
                            height="64.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,215.000000) scale(0.040000,-0.040000)" fill="#000000"
                                stroke="none">
                                <path d="M2410 5112 c0 -5 -32 -22 -70 -37 -117 -47 -173 -90 -636 -487 -73
                                -62 -172 -147 -220 -188 -49 -41 -123 -104 -164 -140 -41 -36 -178 -153 -305
                                -260 -126 -107 -262 -222 -301 -255 -38 -33 -125 -106 -192 -163 -172 -146
                                -231 -224 -271 -360 -29 -96 -29 -268 0 -372 52 -191 191 -335 385 -401 58
                                -20 89 -23 194 -23 194 0 286 36 460 182 52 44 203 171 335 282 132 111 250
                                206 262 212 55 27 51 108 56 -1294 4 -1247 5 -1295 24 -1358 25 -84 76 -179
                                126 -236 57 -65 165 -138 253 -170 41 -15 77 -31 80 -35 3 -5 62 -9 131 -9 95
                                0 129 3 137 14 6 7 43 24 81 36 84 26 192 96 243 156 58 70 112 172 133 254
                                18 71 20 136 25 1355 7 1366 5 1328 52 1294 11 -8 149 -124 307 -259 411 -350
                                418 -356 551 -401 97 -33 287 -33 386 -1 164 54 284 156 362 310 77 153 75
                                407 -6 566 -50 98 -99 148 -353 361 -174 145 -831 704 -1209 1028 -324 278
                                -374 315 -475 358 -36 15 -67 32 -69 38 -4 13 -312 15 -312 3z" />
                            </g>
                        </svg>
                    </div>
                </a>
                ${paginaSiguiente}
                ${paginaAnterior}

                <!-- Fin flecha ir arriba, siguiente página y anterior página -->

                <!-- Menú -->

                <div class="desplegable" id="abrir">
                    <div class="iconos">
                        <div>
                            <a href="">
                                <div class="svgContainer2">
                                    <svg onclick="Cerrar()" class="menu2" width="60" height="60" viewBox="0 0 60 60"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#000000" stroke="none">
                                            <path
                                                d="M46.6667 40C48.5075 40 50 41.4925 50 43.3333C50 45.1742 48.5075 46.6667 46.6667 46.6667C45.665 46.6667 14.335 46.6667 13.3333 46.6667C11.4925 46.6667 10 45.1742 10 43.3333C10 41.4925 11.4925 40 13.3333 40C14.335 40 45.665 40 46.6667 40ZM46.6667 26.6667C48.5075 26.6667 50 28.1592 50 30C50 31.8408 48.5075 33.3333 46.6667 33.3333C45.665 33.3333 14.335 33.3333 13.3333 33.3333C11.4925 33.3333 10 31.8408 10 30C10 28.1592 11.4925 26.6667 13.3333 26.6667C14.335 26.6667 45.665 26.6667 46.6667 26.6667ZM46.6667 13.3333C48.5075 13.3333 50 14.8258 50 16.6667C50 18.5075 48.5075 20 46.6667 20C45.665 20 14.335 20 13.3333 20C11.4925 20 10 18.5075 10 16.6667C10 14.8258 11.4925 13.3333 13.3333 13.3333C14.335 13.3333 45.665 13.3333 46.6667 13.3333Z" />
                                        </g>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <div class="svgContainer2">
                                    <svg class="x" onclick="Cerrar()" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="60" height="60" viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path d="M3735 4157 c-22 -8 -51 -19 -65 -26 -14 -7 -269 -257 -567 -554
                                    l-543 -542 -532 531 c-349 348 -550 541 -583 560 -45 26 -59 29 -145 29 -86 0
                                    -100 -3 -147 -29 -70 -39 -138 -108 -171 -176 -22 -46 -27 -68 -27 -135 0
                                    -133 -13 -117 593 -719 l537 -535 -531 -533 c-347 -348 -541 -550 -560 -583
                                    -26 -45 -29 -59 -29 -145 0 -86 3 -100 29 -147 39 -70 108 -138 176 -171 46
                                    -22 68 -27 135 -27 134 0 117 -13 720 593 l534 537 543 -542 c605 -604 584
                                    -587 715 -587 60 1 82 6 137 33 128 63 206 183 206 319 0 128 10 115 -588 715
                                    l-536 537 545 548 c608 609 584 579 584 717 0 59 -5 81 -32 136 -59 119 -173
                                    198 -297 205 -34 2 -79 -2 -101 -9z"/>
                                    </g>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!--Buscador dentro del menú-->
                    <div class="content-menu">
                        <form action="">
                            <label for="search">Buscador</label>
                            <input type="search" name="search" id="campoBusqueda" onkeypress="buscarConEnter(event)">
                        </form>
                        
                    </div>

                    <!-- Botón de búsqueda con evento onclick -->
                    
                    <div class="cuadroExtAyuda">
                        <button class="botonBuscador" onclick="realizarBusqueda()">Buscar</button>
                        
                        <div class="svgContainer2" style="display: inline;">
                            <svg class="imgInfo"  onclick="muestraInfo()" version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="20.000000pt" height="20.000000pt" viewBox="0 0 800.000000 800.000000"
                            preserveAspectRatio="xMidYMid meet">
                            
                            <g transform="translate(0.000000,800.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M3757 7989 c-1239 -74 -2383 -729 -3072 -1759 -124 -186 -209 -333
                            -287 -497 -444 -935 -515 -1989 -201 -2958 279 -862 828 -1592 1573 -2090 186
                            -124 333 -209 497 -287 935 -444 1989 -515 2958 -201 862 279 1592 828 2090
                            1573 124 186 209 333 287 497 444 935 515 1989 201 2958 -279 862 -828 1592
                            -1573 2090 -459 306 -921 498 -1455 604 -344 68 -674 91 -1018 70z m369 -2003
                            c170 -45 315 -190 360 -360 18 -65 18 -187 0 -252 -45 -170 -190 -315 -360
                            -360 -65 -18 -187 -18 -252 0 -170 45 -315 190 -360 360 -18 65 -18 187 0 252
                            44 167 189 314 355 360 62 17 194 17 257 0z m154 -1517 c82 -39 144 -99 182
                            -177 l33 -67 3 -736 2 -737 113 -4 c96 -3 120 -7 167 -29 82 -39 144 -99 182
                            -177 31 -62 33 -74 33 -167 0 -87 -3 -107 -26 -155 -39 -82 -99 -144 -177
                            -182 l-67 -33 -725 0 -725 0 -55 26 c-82 39 -144 99 -182 177 -31 62 -33 74
                            -33 167 0 87 3 107 26 155 39 82 99 144 177 182 l66 33 238 3 238 3 0 499 0
                            499 -237 3 c-233 3 -239 4 -293 29 -81 39 -144 99 -182 176 -44 89 -51 208
                            -18 296 41 109 125 191 233 229 48 16 91 17 512 15 l460 -2 55 -26z"/>
                            </g>
                            </svg>
                        </div>

                        <div id="cuadroAyuda">
                            <p>Ayuda</p>
                            <ul>
                                Para hacer una búsqueda efectiva, sigue las siguientes indicaciones:<br><br>
                                <li>Utiliza palabras completas, como 'tabla' o 'posicionamiento' en vez de 'tab' y 'pos'.</li>
                                <li>Fíjate en no incluir espacios al principio o al final de tu búsqueda.</li>
                            </ul>
                        </div>
                    </div>
                    <!-- Contenedor para mostrar los resultados -->
                    <div id="resultadosBusqueda"></div>

                    <!-- Modal para mostrar los resultados -->
                    <div id="myModal" class="modal">
                        <div class="modal-content">
                            <span class="close" onclick="cerrarModal()">&times;</span>
                            <div id="modalContent"></div>
                            <div id="mensajeSinResultados"></div>
                        </div>
                    </div>
                    <!--Fin buscador-->
                </div>

                <!-- Fin menú -->

            </div>

            <!-- FIN div class=" padre overlap-group"-->

        </body>

        </html>
            `;


    /*AL PULSAR EL BOTÓN DE DESCARGA*/
    if (boton == 'descarga') { // Si se ha pulsado el botón de actualizar plantilla (llama a la función con el argumento "descarga")

        /*PARA QUE SE DESCARGUE UN TXT CON LA INFORMACIÓN DEL INTÉNTALO TÚ MISMO, EL BUSCADOR Y EL MENÚ:*/
            // Accede a las palabras clave introduccidas por la persona
            var palabrasClave = document.getElementById("palabras-clave").value;

            // Contenido que aparecerá en el txt
            var contenidoTXT = `Información de "inténtalo tú mismo":\n\n${infoIntentalo}   \nInformación para el menú:\n\n{ texto: '${titulo}', url: cabeceraUrl + '${carpeta}/${carpeta}_${nombreDelArchivo}.html' }   \n\n\nInformación para el buscador:\n\n'${carpeta}_${nombreDelArchivo}': { url: '${carpeta}/${carpeta}_${nombreDelArchivo}', nombre: '${titulo}', contenido: '${palabrasClave}' }, `

            // Crear un Blob con el contenido TXT
            var blob = new Blob([contenidoTXT], { type: 'text/plain' });

            // Crear un enlace temporal para descargar el archivo
            var enlace = document.createElement('a');
            enlace.href = URL.createObjectURL(blob);
            enlace.download = `${carpeta}_${nombreDelArchivo}.txt`;

            console.log(carpeta)

            // Agregar el enlace al cuerpo y simular un clic
            document.body.appendChild(enlace);
            enlace.click();

            // Limpiar y liberar recursos
            document.body.removeChild(enlace);
            URL.revokeObjectURL(enlace.href);
       
       
       
        /*PARA QUE SE DESCARGUE EL ARCHIVO HTML*/
            // Crear un Blob con el contenido HTML
            var blob = new Blob([nuevoHTML], { type: 'text/html' });  

            // Crear un enlace temporal para descargar el archivo
            var enlace = document.createElement('a');
            enlace.href = URL.createObjectURL(blob);
            enlace.download = `${carpeta}_${nombreDelArchivo}.html`;  // Nombre con el que se va a descargar el archivo
            
            // Agregar el enlace al cuerpo y simular un clic
            document.body.appendChild(enlace);
            enlace.click();

            // Limpiar y liberar recursos
            document.body.removeChild(enlace);
            URL.revokeObjectURL(enlace.href); 

        
        /*PARA QUE SE DESCARGUE EL JSON CON LOS DATOS ALMACENADOS*/

            // Para hacer un objeto con todos los títulos y contenidos
            var apartados = document.querySelectorAll(".contenedorApartados"); // Objeto con todos los apartados
            var titulos = document.querySelectorAll(".titulo"); // Crea un objeto con todos los títulos de todos los apartados
            var contenidos = document.querySelectorAll(".contenido"); // Un objeto con los contenidos de todos los apartados
            var casillaMarcada = document.querySelectorAll(".casilla-ejemplo"); // Un objeto con todas las casillas para saber si habrá ejemplo
            var casillaCodigoHTML = document.querySelectorAll(".escribir-HTML"); // Un objeto con las casillas de si quiere mostrar el código html o quiere ejecularlo (en el contenedor azul de los ejemplos)
            var contenidoHTML = document.querySelectorAll(".contenidoHTML"); // Un objeto con todos los contenidos "html" (cuadrado azul de la izquierda en los ejemplos)
            

            // PARA LOS SUBAPARTADOS

            // Objeto con el contenido de cada apartado. Este objeto se introducirá dentro del objeto principal del json
            let datos = {
                // Apartados
                titulos: [],
                contenidos: [],
                casilla: [],
                casillaCodigo: [],
                contenidoHTML: [],
                tipoEjemplo: [],
                codigoImagen: [],
                ancho: [],
                medidaAncho: [],
                alto: [],
                medidaAlto: [],
                intentaloTuImagen: [],
                intentaloTuDinamico: [],
                intentaloTuIframe: [],
                tipoIframe: [],
                urlPagina: [],
                urlArchivo: [],
                urlIncrustar: [],
                casillaBotones: [],
                casillaAtencion: [],
                infoAtencion: [],
                casillaConoceMas: [],
                infoConoceMas: [],
                casillaPruebaEsto: [],
                infoPruebaEsto: [], 

                // Subapartados
                numeroSubapartados: [],
                conjuntoSubtitulos: [],
                conjuntoSubcontenidos: [],
                conjuntoCasillasSubejemplos: [],
                conjuntoCasillasCodigoHTML: [],
                conjuntoContenidosHTML: [],
                conjuntoTiposSubejemplos: [],
                conjuntointentaloTuImagen: [],
                conjuntoAnchos: [],
                conjuntoMedidasAnchos: [],
                conjuntoAltos: [],
                conjuntoMedidasAltos: [],
                conjuntoIntentaloTuDinamico: [],
                conjuntoIntentaloTuIframe: [],
                conjuntoTipoIframe: [],
                conjuntoUrlPagina: [],
                conjuntoUrlArchivo: [],
                conjuntoUrlIncrustar: [],
                conjuntocCasillaBotones: [],
                conjuntoCasillaAtencion: [],
                conjuntoInfoAtencion: [],
                conjuntoCasillaConoceMas: [],
                conjuntoInfoConoceMas: [],
                conjuntoCasillaPruebaEsto: [],
                conjuntoInfoPruebaEsto: [],
                conjuntoSubCodigosImagen: [],
            };


            // ITERAR SOBRE CADA APARTADO
            var contador = 1;

            for (let i = 0; i < apartados.length; i++) {
                datos.titulos.push(titulos[i].value); // Cada titulo de cada apartado
                datos.contenidos.push(contenidos[i].value); // cada contenido de cada apartado
                datos.contenidoHTML.push(contenidoHTML[i].value); // el contenido html de cada ejemplo

                // Para saber el estado de la casilla (si quiere ejemplo o no)
                var generarEjemplo = ""; 
                if (casillaMarcada[i].checked) {
                    generarEjemplo = "t"; 
                } else {
                    generarEjemplo = "f"; 
                }
                datos.casilla.push(generarEjemplo); 

                // Para saber si quiere mostrar el código HTML o no 
                var casillaCodigo = "";
                if (casillaCodigoHTML[i].checked) {
                    casillaCodigo = "t";
                } else {
                    casillaCodigo = "f";
                }
                datos.casillaCodigo.push(casillaCodigo);

                // Crea un objeto con las tres posibles casillas de ejemplo
                var casillasTipoEjemplo = document.getElementsByName(`elegir-ejemplo${[contador]}`); 
                var tipoEjemplo = ""; // tipo de ejemplo puede ser "IMAGEN", "DINAMICO" o "IFRAME"

                for (let z = 0; z < casillasTipoEjemplo.length; z++) {
                    if (casillasTipoEjemplo[z].checked) {
                        tipoEjemplo += casillasTipoEjemplo[z].value;
                    }
                }
                datos.tipoEjemplo.push(tipoEjemplo);


                // SI EL EJEMPLO ELEGIDO ES IMAGEN
                var intentaloTuImagen = "";
                let codigoImagen = "";
                let ancho = "";
                let alto = "";
                let medidaAncho = "";
                let medidaAlto = "";

                if(tipoEjemplo == "IMAGEN") {
                    // document.getElementsByClassName("contenedorApartados")[i].getElementsByClassName("imagen")[0]; // Accede al input correspondiente de cada ejemplo
                    codigoImagen = codigos64[i]; // Almacena el código en base 64 de la imagen

                    ancho = document.getElementsByClassName("anchoImagen")[i].value; // Accede al valor de ancho introducido por la persona
                    alto = document.getElementsByClassName("altoImagen")[i].value; // Accede al valor de alto introducido por la persona

                    if(ancho !== "") { // Si la persona ha escrito un número en el campo de ancho
                        medidaAncho = document.getElementsByClassName("medidaAnchoImagen")[i].value; // Accede a la unidad de medida seleccionada
                    }
                    
                    if (alto !== "") { // Si la persona ha escrito un número en el campo de alto
                        medidaAlto = document.getElementsByClassName("medidaAltoImagen")[i].value; // Accede a la unidad de medida seleccionada
                    }


                    if (document.getElementsByClassName("botonIntentalo")[i].checked) { // Si ha marcado la casilla de "inténtalo tú mismo"
                        intentaloTuImagen += "t";
                    } else {
                        intentaloTuImagen += "f";
                    } 
                }
                datos.intentaloTuImagen.push(intentaloTuImagen);
                datos.codigoImagen.push(codigoImagen); 
                datos.ancho.push(ancho);
                datos.alto.push(alto);
                datos.medidaAncho.push(medidaAncho);
                datos.medidaAlto.push(medidaAlto);

                
                // SI EL EJEMPLO ELEGIDO ES DINAMICO
                var intentaloTuDinamico = "";

                if(tipoEjemplo == "DINAMICO") {
                    if (document.getElementsByClassName("botonIntentalo2")[i].checked) {
                        intentaloTuDinamico += "t";
                    } else {
                        intentaloTuDinamico += "f";
                    } 
                }
                datos.intentaloTuDinamico.push(intentaloTuDinamico);


                // SI EL EJEMPLO ELEGIDO ES IFRAME
                var intentaloTuIframe = "";
                var tipoIframe = ""; // tipo de iframe puede ser "PAGINA", "ARCHIVO" o "INCRUSTAR"
                var urlPagina = "";
                var urlArchivo = ""; // Si elige introducir un archivo, por ejemplo, un pdf
                var urlIncrustar = ""; // Si elige incrustar un código, por ejemplo de youtube

                if(tipoEjemplo == "IFRAME") {
                    // Intentalo tú mismo
                    if (document.getElementsByClassName("botonIntentalo3")[i].checked) {
                        intentaloTuIframe += "t";
                    } else {
                        intentaloTuIframe += "f";
                    } 

                    // Para ver qué tipo de iframe ha elegido
                    var casillasIframe = document.getElementsByName(`elegir-iframe${contador}`); // crea un objeto con las tres posibles casillas de iframe
                
                    for (let z = 0; z < casillasIframe.length; z++) {
                        if (casillasIframe[z].checked) {
                            tipoIframe += casillasIframe[z].value;
                        }
                    }


                    if(tipoIframe == "PAGINA") { // Si el tipo de iframe elegido es una página externa
                        urlPagina = document.getElementsByClassName("direccion-iframe")[i].value; // Guarda la dirección introduccida por la persona
                    } 
                    else if(tipoIframe == "ARCHIVO") { // Si el tipo de iframe elegido es un archivo, por ejemplo un pdf
                        urlArchivo = document.getElementsByClassName("archivo")[i].value; // Esto sería la ruta del archivo insertada por la persona
                    }
                    else if(tipoIframe == "INCRUSTAR") { // Si elige incrustar un código, por ejemplo de youtube
                        urlIncrustar = document.getElementsByClassName("codigo-incrustracion")[i].value;
                    }

                }

                datos.intentaloTuIframe.push(intentaloTuIframe);
                datos.tipoIframe.push(tipoIframe);
                datos.urlPagina.push(urlPagina);
                datos.urlArchivo.push(urlArchivo);
                datos.urlIncrustar.push(urlIncrustar);


                // BOTONES DE ATENCIÓN, PRUEBA ESTO O CONOCE MÁS DE CADA APARTADO
                var casillaBotones = "";
                var casillaAtencion = "";
                var infoAtencion = "";
                var casillaConoceMas = "";
                var infoConoceMas = "";
                var casillaPruebaEsto = "";
                var infoPruebaEsto = "";

                if(document.getElementsByClassName("casilla-boton")[i].checked) { // Si la casilla de insertar un botón está marcada
                    casillaBotones = "t";
                    if(document.getElementsByClassName("mostrarAtencion")[i].checked) {
                        casillaAtencion = "t";
                        infoAtencion = document.getElementsByClassName("atencion")[i].value; // Guarda el contenido introducido en el apartado de atención
                    }
                    if(document.getElementsByClassName("mostrarConoceMas")[i].checked) {
                        casillaConoceMas = "t";
                        infoConoceMas = document.getElementsByClassName("conoceMas")[i].value; // Guarda el contenido introducido en el apartado de conoce más
                    }
                    if(document.getElementsByClassName("mostrarPruebaEsto")[i].checked) {
                        casillaPruebaEsto = "t";
                        infoPruebaEsto = document.getElementsByClassName("pruebaEsto")[i].value; // Guarda el contenido introducido en el apartado de prueba esto
                    }
                } else {
                    casillaBotones = "f";
                }
                datos.casillaBotones.push(casillaBotones);
                datos.casillaAtencion.push(casillaAtencion);
                datos.infoAtencion.push(infoAtencion);
                datos.casillaConoceMas.push(casillaConoceMas);
                datos.infoConoceMas.push(infoConoceMas);
                datos.casillaPruebaEsto.push(casillaPruebaEsto);
                datos.infoPruebaEsto.push(infoPruebaEsto); 

                
                // SUBAPARTADOS 

                var subapartados = apartados[i].querySelectorAll(".contenedorSubapartados"); // IMPORTANTE: Un objeto con todos los subapartados dentro del apartado concreto.

                let numeroSubapartados = ""; // Para saber cuántos subapartados hay
                let conjuntoSubtitulos = [];
                let conjuntoSubcontenidos = [];
                let conjuntoCasillasSubejemplos = [];
                let conjuntoCasillasCodigoHTML = [];
                let conjuntoContenidosHTML = [];
                let conjuntoTiposSubejemplos = []; 
                let conjuntointentaloTuImagen = [];
                let conjuntoAnchos = [];
                let conjuntoMedidasAnchos = [];
                let conjuntoAltos = [];
                let conjuntoMedidasAltos = [];
                let conjuntoIntentaloTuDinamico = [];
                let conjuntoIntentaloTuIframe = [];
                let conjuntoTipoIframe = [];
                let conjuntoUrlPagina = [];
                let conjuntoUrlArchivo = [];
                let conjuntoUrlIncrustar = [];
                let conjuntocCasillaBotones = [];
                let conjuntoCasillaAtencion = [];
                let conjuntoInfoAtencion = [];
                let conjuntoCasillaConoceMas = [];
                let conjuntoInfoConoceMas = [];
                let conjuntoCasillaPruebaEsto = [];
                let conjuntoInfoPruebaEsto = [];
                let conjuntoSubCodigosImagen = [];


                if (apartados[i].getElementsByClassName("contenedorSubapartados")) { // Si dentro de este apartado hay al menos un subapartado
                    
                    numeroSubapartados = subapartados.length; // Para saber el número concreto de subapartados

                    for (let j = 0; j < subapartados.length; j++) { // Itera sobre todos los subapartados que haya
                        
                        var subtitulo = apartados[i].getElementsByClassName("subtitulo")[j].value; // Subtítulo
                        conjuntoSubtitulos.push(subtitulo);
                        
                        var subcontenido = apartados[i].getElementsByClassName("subcontenido")[j].value; // Subcontenido
                        conjuntoSubcontenidos.push(subcontenido);

                        // Para saber el estado de la casilla (si quiere ejemplo o no)
                        var subcasillaMarcada = apartados[i].getElementsByClassName("casilla-subejemplo")[j]; // La casilla para saber si habrá ejemplo

                        var generarSubejemplo = ""; 
                        if (subcasillaMarcada.checked) {
                            generarSubejemplo = "t"; 
                        } else {
                            generarSubejemplo = "f"; 
                        }
                        conjuntoCasillasSubejemplos.push(generarSubejemplo); 

                        // Para saber el estado de la casilla de si queire mostrar el código html o no
                        var subcasillaCodigoHTML = apartados[i].getElementsByClassName("subescribir-HTML")[j]; // La casilla de si quiere mostrar el código html o quiere ejecularlo (en el contenedor azul de los ejemplos)
        
                        // Para saber si quiere mostrar el código HTML o no 
                        var subcasillaCodigo = "";
                        if (subcasillaCodigoHTML.checked) {
                            subcasillaCodigo = "t";
                        } else {
                            subcasillaCodigo = "f";
                        }
                        conjuntoCasillasCodigoHTML.push(subcasillaCodigo);

                        // Contenido html - Contenedor azul de ejemplo (el de la izquierda)
                        var subcontenidoHTML = apartados[i].getElementsByClassName("subContenidoHTML")[j].value; // El contenido "html" (contenedor azul de la izquierda en los ejemplos)
                        conjuntoContenidosHTML.push(subcontenidoHTML);

                        
                        // Crea un objeto con las tres posibles casillas de ejemplo
                        var casillasTipoEjemplo = subapartados[j].getElementsByClassName("elegir-subejemplo"); 
                        var tipoEjemplo = ""; // tipo de ejemplo puede ser "IMAGEN", "DINAMICO" o "IFRAME"

                        for (let z = 0; z < casillasTipoEjemplo.length; z++) {
                            if (casillasTipoEjemplo[z].checked) {
                                tipoEjemplo += casillasTipoEjemplo[z].value;
                            }
                        }
                        conjuntoTiposSubejemplos.push(tipoEjemplo);


                        // SI EL EJEMPLO ELEGIDO ES IMAGEN
                        let SUBintentaloTuImagen = "";
                        let subcodigoImagen = ""; 
                        let SUBancho = "";
                        let SUBalto = "";
                        let SUBmedidaAncho = "";
                        let SUBmedidaAlto = "";

                        if(tipoEjemplo == "IMAGEN") {

                            subcodigoImagen += subcodigos64[i][j]; // Almacena el código en base 64 de la imagen 

                            SUBancho = apartados[i].getElementsByClassName("SUBanchoImagen")[j].value; // Accede al valor de ancho introducido por la persona
                            SUBalto = apartados[i].getElementsByClassName("SUBaltoImagen")[j].value; // Accede al valor de alto introducido por la persona

                            if(SUBancho !== "") { // Si la persona ha escrito un número en el campo de ancho
                                SUBmedidaAncho = apartados[i].getElementsByClassName("SUBmedidaAnchoImagen")[j].value; // Accede a la unidad de medida seleccionada
                            }

                            
                            if (SUBalto !== "") { // Si la persona ha escrito un número en el campo de alto
                                SUBmedidaAlto = apartados[i].getElementsByClassName("SUBmedidaAltoImagen")[j].value; // Accede a la unidad de medida seleccionada
                            }


                            if (apartados[i].getElementsByClassName("SUBbotonIntentalo")[j].checked) { // Si ha marcado la casilla de "inténtalo tú mismo"
                                SUBintentaloTuImagen += "t";
                            } else {
                                SUBintentaloTuImagen += "f";
                            } 
                            
                        }
                        conjuntoSubCodigosImagen.push(subcodigoImagen);
                        conjuntointentaloTuImagen.push(SUBintentaloTuImagen);
                        conjuntoAnchos.push(SUBancho);
                        conjuntoAltos.push(SUBalto);
                        conjuntoMedidasAnchos.push(SUBmedidaAncho);
                        conjuntoMedidasAltos.push(SUBmedidaAlto)
                        

                        // SI EL EJEMPLO ELEGIDO ES DINAMICO
                        var SUBintentaloTuDinamico = "";

                        if(tipoEjemplo == "DINAMICO") {
                            if (apartados[i].getElementsByClassName("SUBbotonIntentalo2")[j].checked) {
                                SUBintentaloTuDinamico += "t";
                            } else {
                                SUBintentaloTuDinamico += "f";
                            } 
                        }
                        conjuntoIntentaloTuDinamico.push(SUBintentaloTuDinamico);


                         // SI EL EJEMPLO ELEGIDO ES IFRAME
                        var SUBintentaloTuIframe = "";
                        var SUBtipoIframe = ""; // tipo de iframe puede ser "PAGINA", "ARCHIVO" o "INCRUSTAR"
                        var SUBurlPagina = "";
                        var SUBurlArchivo = ""; // Si elige introducir un archivo, por ejemplo, un pdf
                        var SUBurlIncrustar = ""; // Si elige incrustar un código, por ejemplo de youtube

                        if(tipoEjemplo == "IFRAME") {
                            // Intentalo tú mismo
                            if (apartados[i].getElementsByClassName("SUBbotonIntentalo3")[j].checked) {
                                SUBintentaloTuIframe += "t";
                            } else {
                                SUBintentaloTuIframe += "f";
                            } 

                            // Para ver qué tipo de iframe ha elegido
                            var SUBcasillasIframe = subapartados[j].getElementsByClassName("SUBelegir-iframe");
                        
                            for (let z = 0; z < SUBcasillasIframe.length; z++) {
                                if (SUBcasillasIframe[z].checked) {
                                    SUBtipoIframe += SUBcasillasIframe[z].value;
                                }
                            }

                            if(SUBtipoIframe == "PAGINA") { // Si el tipo de iframe elegido es una página externa
                                SUBurlPagina = apartados[i].getElementsByClassName("SUBdireccion-iframe")[j].value; // Guarda la dirección introduccida por la persona
                            } 
                            else if(SUBtipoIframe == "ARCHIVO") { // Si el tipo de iframe elegido es un archivo, por ejemplo un pdf
                                SUBurlArchivo = apartados[i].getElementsByClassName("SUBarchivo")[j].value; // Esto sería la ruta del archivo insertada por la persona
                            }
                            else if(SUBtipoIframe == "INCRUSTAR") { // Si elige incrustar un código, por ejemplo de youtube
                                SUBurlIncrustar = apartados[i].getElementsByClassName("SUBcodigo-incrustracion")[j].value;
                            }
                        }
                        conjuntoIntentaloTuIframe.push(SUBintentaloTuIframe);
                        conjuntoTipoIframe.push(SUBtipoIframe);
                        conjuntoUrlPagina.push(SUBurlPagina);
                        conjuntoUrlArchivo.push(SUBurlArchivo);
                        conjuntoUrlIncrustar.push(SUBurlIncrustar);

                        // BOTONES DE ATENCIÓN, PRUEBA ESTO O CONOCE MÁS DE CADA APARTADO
                        var SUBcasillaBotones = "";
                        var SUBcasillaAtencion = "";
                        var SUBinfoAtencion = "";
                        var SUBcasillaConoceMas = "";
                        var SUBinfoConoceMas = "";
                        var SUBcasillaPruebaEsto = "";
                        var SUBinfoPruebaEsto = "";

                        if(apartados[i].getElementsByClassName("SUBcasilla-boton")[j].checked) { // Si la casilla de insertar un botón está marcada
                            SUBcasillaBotones = "t";
                            if(apartados[i].getElementsByClassName("SUBmostrarAtencion")[j].checked) {
                                SUBcasillaAtencion = "t";
                                SUBinfoAtencion = apartados[i].getElementsByClassName("SUBatencion")[j].value; // Guarda el contenido introducido en el apartado de atención
                            }
                            if(apartados[i].getElementsByClassName("SUBmostrarConoceMas")[j].checked) {
                                SUBcasillaConoceMas = "t";
                                SUBinfoConoceMas = apartados[i].getElementsByClassName("SUBconoceMas")[j].value; // Guarda el contenido introducido en el apartado de conoce más
                            }
                            if(apartados[i].getElementsByClassName("SUBmostrarPruebaEsto")[j].checked) {
                                SUBcasillaPruebaEsto = "t";
                                SUBinfoPruebaEsto = apartados[i].getElementsByClassName("SUBpruebaEsto")[j].value; // Guarda el contenido introducido en el apartado de prueba esto
                            }
                        } else {
                            SUBcasillaBotones = "f";
                        }
                        conjuntocCasillaBotones.push(SUBcasillaBotones);
                        conjuntoCasillaAtencion.push(SUBcasillaAtencion);
                        conjuntoInfoAtencion.push(SUBinfoAtencion);
                        conjuntoCasillaConoceMas.push(SUBcasillaConoceMas);
                        conjuntoInfoConoceMas.push(SUBinfoConoceMas);
                        conjuntoCasillaPruebaEsto.push(SUBcasillaPruebaEsto);
                        conjuntoInfoPruebaEsto.push(SUBinfoPruebaEsto); 


                    } // Fin de iteración sobre subapartados

                } else { // Si no hay subapartados
                    numeroSubapartados = 0;
                }
                datos.numeroSubapartados.push(numeroSubapartados);
                datos.conjuntoSubtitulos.push(conjuntoSubtitulos);
                datos.conjuntoSubcontenidos.push(conjuntoSubcontenidos);
                datos.conjuntoCasillasSubejemplos.push(conjuntoCasillasSubejemplos);
                datos.conjuntoCasillasCodigoHTML.push(conjuntoCasillasCodigoHTML);
                datos.conjuntoContenidosHTML.push(conjuntoContenidosHTML);
                datos.conjuntoTiposSubejemplos.push(conjuntoTiposSubejemplos);
                datos.conjuntointentaloTuImagen.push(conjuntointentaloTuImagen);
                datos.conjuntoAnchos.push(conjuntoAnchos);
                datos.conjuntoAltos.push(conjuntoAltos);
                datos.conjuntoMedidasAnchos.push(conjuntoMedidasAnchos);
                datos.conjuntoMedidasAltos.push(conjuntoMedidasAltos);
                datos.conjuntoIntentaloTuDinamico.push(conjuntoIntentaloTuDinamico);
                datos.conjuntoIntentaloTuIframe.push(conjuntoIntentaloTuIframe);
                datos.conjuntoTipoIframe.push(conjuntoTipoIframe);
                datos.conjuntoUrlPagina.push(conjuntoUrlPagina);
                datos.conjuntoUrlArchivo.push(conjuntoUrlArchivo);
                datos.conjuntoUrlIncrustar.push(conjuntoUrlIncrustar);
                datos.conjuntocCasillaBotones.push(conjuntocCasillaBotones);
                datos.conjuntoCasillaAtencion.push(conjuntoCasillaAtencion);
                datos.conjuntoInfoAtencion.push(conjuntoInfoAtencion);
                datos.conjuntoCasillaConoceMas.push(conjuntoCasillaConoceMas);
                datos.conjuntoInfoConoceMas.push(conjuntoInfoConoceMas);
                datos.conjuntoCasillaPruebaEsto.push(conjuntoCasillaPruebaEsto);
                datos.conjuntoInfoPruebaEsto.push(conjuntoInfoPruebaEsto); 
                datos.conjuntoSubCodigosImagen.push(conjuntoSubCodigosImagen);
                
                // FIN DE SUBAPARTADOS

                contador++;    

            } // fin de cada apartado 


            // Crear el JSON
            var informacionJSON = JSON.stringify({
                tituloPrincipal, // Título principal del tutorial (esta información viene del json de página intermedia)
                iniciales, // Array con las iniciales de los temas
                titulosTemas, // Array con los títulos de los temas
                titulo, // Título de esta página concreta
                color, // Array con los colores de los temas
                estadoCasilla, // Para saber qué tema ha elegido
                titulosBloques, // Array con todos los títulos de los posibles bloques
                nombreArchivos, // Array con todos los nombres de los archivos
                imagen64, // Logo

                orientaciones,
                pruebaEsto,
                resumen,
                referencia,
                nombrePaginaSiguiente,
                nombrePaginaAnterior,
                palabrasClave,

                datos, // Incluye directamente el objeto datos
            });

            // Crear Blobs para EL archivo JSON
            var blobJSON = new Blob([informacionJSON], { type: 'application/json' });

            // Crear enlace temporal para descargar el archivo
            var enlaceJSON = document.createElement('a');
            enlaceJSON.href = window.URL.createObjectURL(blobJSON);
            enlaceJSON.download = `${carpeta}_${nombreDelArchivo}.json`;

            // Agregar enlace al cuerpo y simular clic
            document.body.appendChild(enlaceJSON);
            enlaceJSON.click();
            document.body.removeChild(enlaceJSON);
            window.URL.revokeObjectURL(enlaceJSON.href);

    } // Fin de descarga


    /*PARA LA PREVISUALIZACIÓN*/
    if (boton == 'preview') {

        var myWindow = window.open('', '_blank');
        myWindow.document.write(nuevoHTML);

    }

}