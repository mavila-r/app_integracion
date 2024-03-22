// Declaración de variables globales para almacenar códigos base64
let imagen64 = ""; // ALMACENA EL CODIGO EN BASE 64 DE LA IMAGEN

/*PARA ELIMINAR UN BLOQUE*/
function eliminarTema() {
    var numeroTema = prompt("Introduce el número del bloque a eliminar:"); // Obtener el número del tema a eliminar


    if (numeroTema !== null && !isNaN(numeroTema) && numeroTema >= 1 && numeroTema <= 9) { // Verificar si se ingresó un número válido

        var contenedorTema = document.querySelector(`.contenedorBloques:nth-child(${numeroTema})`); // Seleccionar el contenedor del tema correspondiente 


        var camposTexto = contenedorTema.querySelectorAll('input[type="text"]');

        camposTexto.forEach(function (campo) {  //Eliminar el contenido de los campos de texto dentro del tema
            campo.value = '';
            campo.readOnly = false;  //Permitir que se pueda volver a escribir en cada campo
        });

        var botonesRadio = contenedorTema.querySelectorAll('input[type="radio"]');

        botonesRadio.forEach(function (radio) { //Deseleccionar los botones de radio dentro del tema
            radio.checked = false;
            radio.disabled = false;
        });

        alert(`Bloque ${numeroTema} eliminado correctamente.`);   //Mensaje que se muestra al eliminar el bloque
    } else {
        alert('Número de bloque inválido. Inténtalo de nuevo.'); //Mensaje que se muestra si no se puede eliminar el bloque
    }
}

// PARA CONVERTIR EN BASE 64 (ALMACENA EL CODIGO DE LA IMAGEN EN LA VARIABLE CODIGOIMAGEN)
function cargarImagen(index) {
    let imagenInputs = document.getElementsByClassName("imagenGrupo"); // Obtiene todos los elementos con la clase "imagen" (los input)
    let imagenInput = imagenInputs[index]; // Obtiene el input de tipo archivo específico según el índice (Si has llamado a la función con el índice 0, accede al primer input con esa clase)

    let imagen = imagenInput.files[0]; // Accede a la imagen como tal
    let reader = new FileReader(); // Crea un objeto FileReader para leer el contenido del archivo

    // Manejador de evento que se ejecuta cuando se completa la lectura del archivo
    reader.onload = function (e) {
        // Obtiene la representación base64 del contenido del archivo
        let codigo64 = e.target.result;
        imagen64 = codigo64;
    };

    reader.readAsDataURL(imagen); // Inicia la lectura del contenido del archivo como una URL base64
}

/* COMPROBAR INICIALES DUPLICADAS */
function checkDuplicates() {
    const values = new Set(); // Usamos un conjunto para mantener valores únicos
    const elements = document.querySelectorAll('.inicialesBloque'); // Seleccionamos todos los elementos por su clase
    let flag = false;

    elements.forEach(element => {
        const value = element.value.trim().toLowerCase(); // Obtenemos el valor del elemento y lo normalizamos

        if (value !== '') { // Verificamos si el valor no está vacío

            if (values.has(value)) {  // Verificamos si el valor ya está en el conjunto
                alert('¡Hay iniciales duplicadas en el formulario! Por favor, cambialas para que no sean iguales.'); // Si encontramos un duplicado, mostramos un mensaje de error y retornamos verdadero
                flag = true; // Hay duplicados
            }
            values.add(value); // Si el valor no está duplicado, lo añadimos al conjunto
        }
    });
    return flag; // Si no se encontraron duplicados, retornamos falso
}

/* COMPROBAR COLORES DUPLICADAS */
function checkDuplicatesColor() {
    const colors = new Set(); // Usamos un conjunto para mantener valores únicos
    let flag = false;

    const radioButtons = document.querySelectorAll('.elegir-color:checked'); // Obtener todos los botones de radio de color en todos los bloques

    radioButtons.forEach(radioButton => {     // Iterar sobre los botones de radio marcados
        const color = radioButton.value; // Obtener el valor del botón de radio
        if (colors.has(color)) {         // Verificar si el color ya está en el conjunto
            alert('¡Hay colores duplicados en el formulario! Por favor, selecciona colores diferentes para cada bloque.'); // Si encontramos un duplicado, mostramos un mensaje de error y cambiamos el flag a verdadero
            flag = true; // Hay duplicados
        }
        colors.add(color); // Si el color no está duplicado, lo añadimos al conjunto
    });

    return flag; // Verdadero si hay duplicados, falso si no hay duplicados
}

/* COMPROBAR NUMERO DE TEMAS DUPLICADAS */
function checkDuplicatesTemas() {
    const values = new Set(); // Usamos un conjunto para mantener valores únicos
    const elements = document.querySelectorAll('.ordenTemas'); // Seleccionamos todos los elementos por su clase
    let flag = false;

    elements.forEach(element => {
        const value = element.value.trim().toLowerCase(); // Obtenemos el valor del elemento y lo normalizamos

        if (value !== '') { // Verificamos si el valor no está vacío
            if (values.has(value)) { // Verificamos si el valor ya está en el conjunto
                alert('¡Hay números de temas duplicados en el formulario! Por favor, cambialos para que no sean iguales.');  // Si encontramos un duplicado, mostramos un mensaje de error y retornamos verdadero
                flag = true; // Hay duplicados
            }
            values.add(value); // Si el valor no está duplicado, lo añadimos al conjunto
        }
    });

    return flag; // Verdadero si hay duplicados, falso si no hay duplicados
}


/*FUNCIÓN PRINCIPAL*/
function funcionPrincipal(boton) {
    // INICIALIZACION DE VARIABLES
    let divCabecera = document.createElement("div"); // Crea un nuevo div que será la "cabecera del documento", donde se incluirá la función que crea la cabecera de cada página en MenuTuto.js
    let divCuerpo = document.createElement("div"); // Crea un nuevo div que será el "cuerpo del documento", aquí se introducirán los divs por cada tema

    /*TÍTULO PRINCIPAL*/
    let titulo = document.getElementById("titulo").value;  // Esta variable la ponemos en la parte del código html correspondiente

    /*IMAGEN GRUPO*/
    let codigoImagen = "";  // Inicializa variable para almacenar la ruta que tendrá

    let imagen = document.getElementsByClassName("imagenGrupo")[0].value;  // Accede al valor de la imagen (en este caso, es la ruta de la imagen)

    if (imagen == "") {
        codigoImagen = `<div class="svgContainer">
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
    } else {
        codigoImagen += `<img class='logonosotros3 logonosotros3_index logo_bajado' src='${imagen64}' alt='logo grupo' title='Ir a página principal del tutorial'/>`; // Cómo queda la ruta completa, esto es lo que se añade al ejemplo
    }

    const selectTemas = document.querySelectorAll('.ordenTemas'); // Obtener todos los elementos select con la misma clase

    const valoresTemas = []; // Crear un array para almacenar los valores de los temas

    selectTemas.forEach(select => { // Iterar sobre los elementos select y obtener sus valores
        valoresTemas.push(select.value);
    });

    var nuevoMenu = `var datosLista = [ 
        `; // Variable de texto para crear el nuevo menú
    var nuevaURL = `var cabeceraUrl = "";
        var cabeceraDir = "";
        `; // Variable de texto para crear la función de la cabecera

    var nuevaSwitchURL = `switch (cabeceraUrl) {
            `; // Variable de texto para crear la función switch de la cabecera


    //CREAR LOS TEMAS Y ORDENARLOS
    var temasDesordenados = {}; //Crear un objeto para incluir los temas tal como se ingresan, sin ordenar
    let datosMenuPorTema = {}; //Crear un objeto para incluir los datos del menú en función del tema

    var numeroTema = document.querySelectorAll('.ordenTemas'); // Obtiene todos los elementos con esa clase (para el orden de los temas)
    var tituloTema = document.querySelectorAll('.titulosBloque'); // Obtiene todos los elementos con esa clase (para los títulos de los temas)
    var colorTema = document.querySelectorAll('.elegir-color'); // Obtiene todos los elementos con esa clase (para los colores de los temas)
    var coloresSeleccionados = []; //Selecciona exclusivamente los colores seleccionados
    colorTema.forEach(function (elemento) { // Recorre todos los colores
        if (elemento.checked) { //Si está seleccionado
            coloresSeleccionados.push(elemento.value); //Incluye el color seleccionado en la variable coloresSeleccionados
        }
    })
    var inicialTema = document.querySelectorAll('.inicialesBloque'); // Obtiene todos los elementos con esa clase (para las iniciales de los temas)

    for (let i = 0; i < numeroTema.length; i++) { //Recorre a lo largo del número de temas
        const tema = numeroTema[i].value; //Toma el valor concreto del número de cada tema
        const titulo = tituloTema[i].value; //Toma el valor concreto del título de cada tema
        const color = coloresSeleccionados[i]; //Toma el valor concreto del color de cada tema
        const inicial = inicialTema[i].value; //Toma el valor concreto de la inicial de cada tema

        if (tema.trim() != "") { //Si el tema concreto existe
            const temaActual = { //Juntamos los valores en la variable "temaActual"
                iniciales: inicial, //Se añade la inicial de ese tema
                titulo: titulo, //Se añade el título de ese tema
                casillaColores: 't', //Se verifica que en ese tema la casilla es "true"
                color: color //Se añade el color de ese tema
            };

            temasDesordenados[tema] = temaActual; //Se incluye "temaActual" en el valor actual de temasDesordenados
        }
    }

    const datosOrdenados = Object.keys(temasDesordenados).sort(); //Se ordenan los temasDesordenados en función del tema
    const temasOrdenados = {}; //Objeto para incluir los temas en el orden correcto
    datosOrdenados.forEach(tema => { //Se reccore datosOrdenados
        temasOrdenados[tema] = temasDesordenados[tema]; //Se incluye cada tema en temasOrdenados en el orden correcto
    });

    var cabeceraDir = "' + cabeceraDir + '" //Variable que incluimos en la función de cabecera para que cabeceraDir se comporte en MenuTuto.js como una variable

    //BUCLE PARA CADA TEMA
    for (const tema in temasOrdenados) { //Recorre cada tema en orden
        //CABECERA
        switchCases = `case "${temasOrdenados[tema].iniciales}":\n`; //Case del switch de cabecera para cada tema

        for (const otroTema in temasOrdenados) { //Recorre otro tema en orden (un bucle dentro del bucle anterior)
            if (otroTema === tema) { //Si tema es igual al otro tema (para que se comporte de manera específica según el tema en el que se esté)
                switchCases += `                codigo = codigo + '<a class='borde' href="` + cabeceraDir + `../OTRAS/intermedio_${temasOrdenados[otroTema].iniciales}.html"><div class='Tema${temasOrdenados[otroTema].color} logonosotros3' aria-label='Logo de ${temasOrdenados[otroTema].titulo}' title='Click para ir a página principal de ${temasOrdenados[otroTema].titulo}'> ${temasOrdenados[otroTema].iniciales} </div></a>'\n`;
            } else { //Si no lo es
                switchCases += `                codigo = codigo + '<a class='borde2' href="` + cabeceraDir + `../OTRAS/intermedio_${temasOrdenados[otroTema].iniciales}.html"><div class='Tema${temasOrdenados[otroTema].color} logonosotros3' aria-label='Logo de ${temasOrdenados[otroTema].titulo}' title='Click para ir a página principal de ${temasOrdenados[otroTema].titulo}'> ${temasOrdenados[otroTema].iniciales} </div></a>'\n`;
            }
        }
        switchCases += `                elemento = document.getElementById("eliPagInt");
                elemento.innerHTML = codigo;
            break;\n
            `; //Final de cada case del switch

        divCabecera.insertAdjacentHTML('beforeend', switchCases); // Insertar los casos switch generados en el documento

        //HTML DEL INDEX
        let article = `<article class="group">
            <a href="./OTRAS/intermedio_${temasOrdenados[tema].iniciales}.html">
                <div class="${temasOrdenados[tema].color} component-1-4">
                    <div class="descripcion1">
                    ${temasOrdenados[tema].titulo} 
                    </div>
                    <div class="descripcion2">
                    ${temasOrdenados[tema].iniciales} 
                </div>
            </div>
        </a>
    </article>
    `; //Crea el bloque de texto html en función de cada tema, para ir incluyéndolos en orden
        divCuerpo.insertAdjacentHTML('beforeend', article); // Insertar los bloques generados en el documento 
        //FUNCION CABECERA
        nuevaURL += `if (cabeceraUrl == "") {
            buscarCabeceraUrl("/DETALLE/${temasOrdenados[tema].iniciales}");
        }
            `; //Crea el bloque de texto para buscar la cabecera en función de cada tema
        //SWITCH CABECERA
        nuevaSwitchURL += `case "/DETALLE/${temasOrdenados[tema].iniciales}":
                cabeceraUrl = '../';
                cabeceraDir = '../';
            break;
            `; //Crea el bloque de texto de switch para buscar la cabecera en función de cada tema

        //BUSCADOR
        var nuevoBuscador = document.querySelectorAll(".contenedorBuscador"); //Guarda todos los valores ingresados del buscador
        var nuevoBuscadorTxt = ""; //Para guardar el contenido
        nuevoBuscador.forEach(function (elemento) { //Por cada elemento del buscador que haya
            var valor = elemento.value.trim();
            if (valor !== "") { //Si existe el valor
                nuevoBuscadorTxt += valor + `
        `; //Añade cada valor del buscador
            }
        });
        //MENU
        var menuTxt = document.querySelectorAll(".contenedorMenu"); //Guarda todos los valores ingresados del menú
        var nuevoMenuTxt = ""; //Para guardar el contenido
        menuTxt.forEach(function (elemento) {  //Por cada elemento del menu que haya
            var valor = elemento.value.trim();
            if (valor !== "") { //Si existe el valor
                nuevoMenuTxt += valor + "\n"; //Añade cada valor del menú
            }
        });
        var arrayMenu = nuevoMenuTxt.split('\n'); //Array que separa cada valor en función de los saltos de línea

        var textoBuscadoInicio = "url: cabeceraUrl + '"; //Usa como inicio de búsqueda la cadena de texto
        var textoBuscadoFin = "/"; //Usa como fin de búsqueda la cadena de texto
        var elementosAgrupados = {}; //Objeto para guardar los elementos agrupados

        for (let i = 0; i < arrayMenu.length; i++) { //Recorre la longitud del array
            var elementoActual = arrayMenu[i]; //Guarda el valor de cada posición como elementoActual
            var indiceInicio = elementoActual.indexOf(textoBuscadoInicio); //Busca el textoBuscadoInicio en el elementoActual
            if (indiceInicio !== -1) { //Si lo encuentra
                var indiceFin = elementoActual.indexOf(textoBuscadoFin, indiceInicio + textoBuscadoInicio.length); //Busca el textoBuscadoFin
                if (indiceFin !== -1) { //Si lo encuentra
                    var textoDeseado = elementoActual.substring(indiceInicio + textoBuscadoInicio.length, indiceFin); //Saca la inicial del tema del elementoActual (Es el texto que estábamos buscando)
                }
            }
            if (elementosAgrupados.hasOwnProperty(textoDeseado)) {   // Verificar si ya existe una entrada para el texto deseado en el objeto
                elementosAgrupados[textoDeseado].push(elementoActual);  // Si ya existe, agregar el elemento al grupo correspondiente

            } else {
                elementosAgrupados[textoDeseado] = [elementoActual];  // Si no existe, crear un nuevo grupo con el elemento
            }
        }
        const elementosMenu = elementosAgrupados[temasOrdenados[tema].iniciales] || ''; //Guarda los elementos por cada inicial o como vacío en caso de que no exista (para que salga vacío y no undefined)

        if (!datosMenuPorTema[tema]) {  // Agrupar elementos del menú por tema
            datosMenuPorTema[tema] = [];
        }

        datosMenuPorTema[tema].push({ //Guarda cada elemento respecto a su tema
            textoElemento: temasOrdenados[tema].titulo,
            subelementos: elementosMenu,
        });

        const elementos = datosMenuPorTema[tema]; //Coge cada tema de datosMenuPorTema con sus respectivos elementos
        for (let j = 0; j < elementos.length; j++) { //Recorre todos los elementos
            const elemento = elementos[j]; //Selecciona cada elemento concreto

            nuevoMenu += `                 {
                        textoElemento: '${elemento.textoElemento}',
                        subelementos: [
                        `;
            elemento.subelementos.forEach(subelemento => { //Recorre todos los subelementos para poder ponerlos con un salto de línea
                nuevoMenu +=                    `${subelemento},
                            `;
            })
        nuevoMenu += `]
                    },\n`; //Crea el bloque del texto que incluye cada tema y los elementos de cada tema
        }
    }
    //FIN DEL BUCLE GENERAL

    nuevoMenu += `                  ]
    `; //Final de la variable tras terminar el bucle

    nuevaURL += `if (cabeceraUrl == "") {
            buscarCabeceraUrl("/OTRAS");
        }
    `; //Final de la variable tras terminar el bucle
    nuevaSwitchURL += `case "/OTRAS":
                cabeceraUrl = '../DETALLE/';
                cabeceraDir = '';
            break;
            default:
                cabeceraUrl = './DETALLE/';
                cabeceraDir = '';
            break;
    }
    `; //Final de la variable tras terminar el bucle

    /*NOMBRE DEL ARCHIVO*/
    var infoPagina = "`${infoPagina.url}.html`"; //ESTO ES UNA VARIABLE QUE HACE FALTA PARA QUE NO PETE EL JS

    /*Crear una variable con todo el contenido de la página HTML de plantilla*/
    var nuevoHTML = `
        <!DOCTYPE html>
        <html lang="es-ES">

        <head>
            <meta charset="utf-8">
            <title>Tutorial ${titulo}</title>
            <meta name="title" content="${titulo}">
            <meta name="author" content="IMFE">

            <link rel="icon" type="image/png" href="logo.svg">
            <link rel="icon" type="image/gif" href="logo.svg">
            <link rel="icon" type="image/vnd.microsoft.icon" href="logo.svg">
            <link rel="icon" type="image/png" href="${imagen64}">

            <link rel="stylesheet" href="./CSS/tutorial.css">
            <link rel="stylesheet" href="../../CSS/tutorial.css">

            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="JS/MenuTuto.js"></script>
        </head>

        <body>

            <!--div class=" padre overlap-group"-->

            <div class="padre overlap-group">

                <!-- header -->

                <div id="header">
                    <div>
                        <a href="https://www.malaga.eu/">
                            <img class="ayuntamiento ayuntamiento_index" src="img/logo-imf-1.png" alt="ayuntamiento 1" />
                        </a>
                        <a href="https://imfe.malaga.eu/">
                            <img class="imfe imfe_index" src="img/logo-imfe-ok-2019-1.png" alt="imfe 1" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            ${codigoImagen}
                        </a>
                        <a href="" class="abrir" onmousedown="Abrir()" onclick="crearMenu()">
                            <div class="svgContainer">
                                <svg class="menu" width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#000000" stroke="none">
                                    <path
                                        d="M46.6667 40C48.5075 40 50 41.4925 50 43.3333C50 45.1742 48.5075 46.6667 46.6667 46.6667C45.665 46.6667 14.335 46.6667 13.3333 46.6667C11.4925 46.6667 10 45.1742 10 43.3333C10 41.4925 11.4925 40 13.3333 40C14.335 40 45.665 40 46.6667 40ZM46.6667 26.6667C48.5075 26.6667 50 28.1592 50 30C50 31.8408 48.5075 33.3333 46.6667 33.3333C45.665 33.3333 14.335 33.3333 13.3333 33.3333C11.4925 33.3333 10 31.8408 10 30C10 28.1592 11.4925 26.6667 13.3333 26.6667C14.335 26.6667 45.665 26.6667 46.6667 26.6667ZM46.6667 13.3333C48.5075 13.3333 50 14.8258 50 16.6667C50 18.5075 48.5075 20 46.6667 20C45.665 20 14.335 20 13.3333 20C11.4925 20 10 18.5075 10 16.6667C10 14.8258 11.4925 13.3333 13.3333 13.3333C14.335 13.3333 45.665 13.3333 46.6667 13.3333Z" />
                                    </g>
                                    </svg>
                            </div>                    <pre> MENU</pre>
                        </a>

                    </div>
                </div>

                <!-- Fin header -->


                <!-- --------------------------------------------------------------------------------------------------- -->

                <div class="main">

                    <div class="flex-container">
                        <div class="text">
                            <p class="titulo1">${titulo}</p>
                            <p class="titulo2 small1">Tutorial teórico práctico de aprendizaje</p>
                        </div>
                    </div>
                    <div class="line-container">
                        <div class="svgContainer">
                            <svg class="line" version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="990.000000pt" height="110.000000pt" viewBox="0 0 980.000000 131.000000"
                            preserveAspectRatio="xMidYMid meet">
                            
                            <g transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M4910 685 l0 -625 -2450 0 -2450 0 0 -30 0 -30 4895 0 4895 0 0 30 0
                            30 -2415 0 -2415 0 0 625 0 625 -30 0 -30 0 0 -625z"/>
                            </g>
                            </svg>
                        </div>
                    </div>
                    <div class="group-container">
                        ${divCuerpo.innerHTML} 
                    </div>
                    <div class="line-container">
                        <div class="svgContainer">
                            <svg class="line" version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="990.000000pt" height="110.000000pt" viewBox="0 0 980.000000 131.000000"
                            preserveAspectRatio="xMidYMid meet">
                            
                            <g transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M0 1280 l0 -30 2415 0 2415 0 0 -625 0 -625 30 0 30 0 0 625 0 625
                            2450 0 2450 0 0 30 0 30 -4895 0 -4895 0 0 -30z"/>
                            </g>
                            </svg>
                        </div>
                    </div>
                </div>

                    <!-- pie de página -->

                    <div class="pie">
                        <div class="formulario">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSebNH1TrpXBxKQN-mKTVJnTt3OEVLhVuFMbdRqyUTHTRwOECw/viewform?embedded=true"
                                width="700" height="460" frameborder="0" marginheight="0" marginwidth="0">Cargando…
                            </iframe>
                        </div>

                        <div class="sobrenosotros">
                            <a href="#">
                            ${codigoImagen}
                            </a>
                            <a href="./OTRAS/sobrenosotros.html">
                                <p class="blanco">SOBRE NOSOTROS</p>
                            </a>
                            <div class="divpoliticas">
                                <ul class="politicas">
                                    <li><a href="./OTRAS/cookies.html">
                                            <p class="cookies">Cookies</p>
                                        </a></li>
                                    <li><a href="./OTRAS/privacidad.html">
                                            <p class="cookies">· Política de privacidad</p>
                                        </a></li>
                                    <li><a href="./OTRAS/legal.html">
                                            <p class="cookies">· Aviso legal</p>
                                        </a></li>
                                </ul>
                            </div>
                            <div class="redes">
                                <a href="https://es-es.facebook.com/imfemalaga/"> <!-- LOGO FACEBOOK -->
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
                                    ©2023 <a href="./OTRAS/licencias.html">Tutorialimfe.com</a>
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
                            </div>                <div id="cuadroAyuda">
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

    var nuevoMenuTuto = ` /*-------------------------------------------------------------FUNCIONES BÁSICAS QUE SE MANTIENEN SIEMPRE IGUAL----------------------------------------------*/
    /*-------------------------------------------------------------FUNCIONES BÁSICAS QUE SE MANTIENEN SIEMPRE IGUAL----------------------------------------------*/
    /*-------------------------------------------------------------FUNCIONES BÁSICAS QUE SE MANTIENEN SIEMPRE IGUAL----------------------------------------------*/
    /*-------------------------------------------------------------FUNCIONES BÁSICAS QUE SE MANTIENEN SIEMPRE IGUAL----------------------------------------------*/
    
    function Abrir() {
        document.getElementById("abrir").className = "desplegable-abierto";
        // console.log("Abriste el menú");
    }
    function  Cerrar() {
        document.getElementById("abrir").className = "desplegable";
        event.preventDefault();
        // console.log("Cerraste el menú");
    
    }
    
    /* MUESTRA INFO ONCLICK */
    
    var displayOnOff = 1;
    function muestraInfo() {
        if (displayOnOff == 1) {
            document.getElementById("cuadroAyuda").style.display = "block";
            displayOnOff = 0;
        } else {
            document.getElementById("cuadroAyuda").style.display = "none";
            displayOnOff = 1;
        }
    }
    
    /*UTILIZACIÓN DE TABINDEX PARA TABULAR CONOCE MÁS, PRESTA ATENCIÓN Y PONTE A PRUEBA*/
    
    /*CONOCE MÁS*/
    document.addEventListener('DOMContentLoaded', function () {                                                
        var elementosConTabindex = document.querySelectorAll('.cuadroext');                                    // Selecciona todos los elementos con la clase 'cuadroext' y los almacena en elementosConTabindex
    
        elementosConTabindex.forEach(function (elemento, index) {                                              // Itera sobre cada elemento en elementosConTabindex
            elemento.setAttribute('tabindex', 0);                                                              // Establece el atributo tabindex de cada elemento en 0
    
            elemento.addEventListener('keydown', function (event) {                                            // Añade un event listener para el evento 'keydown' (pulsación de tecla)
                if (event.keyCode === 13) {                                                                    // Verifica si la tecla presionada es 'Enter' (código 13)
                    document.querySelectorAll('.cuadro')[index].classList.toggle('visible');                   // Toggle: Muestra si está oculto, y oculta si está visible
                }
            });
        });
    });
    
    /*PRESTA ATENCIÓN*/
    
    // Este código tiene el mismo funcionamiento que el anterior
    document.addEventListener('DOMContentLoaded', function () {                                                
        var elementosConTabindex = document.querySelectorAll('.cuadroext2');                                    // Selecciona todos los elementos con la clase 'cuadroext2' y los almacena en elementosConTabindex
    
        elementosConTabindex.forEach(function (elemento, index) {                                               
            elemento.setAttribute('tabindex', 0);                                                               
    
            elemento.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    document.querySelectorAll('.cuadro2')[index].classList.toggle('visible');
                }
            });
        });
    });
    
    /*PONTE A PRUEBA*/
    
    // Este código tiene el mismo funcionamiento que los anteriores
    document.addEventListener('DOMContentLoaded', function () {
        var elementosConTabindex = document.querySelectorAll('.cuadroext3');                                    // Selecciona todos los elementos con la clase 'cuadroext3' y los almacena en elementosConTabindex
    
        elementosConTabindex.forEach(function (elemento, index) {
            elemento.setAttribute('tabindex', 0);
    
            elemento.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    document.querySelectorAll('.cuadro3')[index].classList.toggle('visible');
                }
            });
        });
    });
    
    
    /* FUNCIÓN DEL RANGO, NO TOCAR!!!!!! */
    
    /*El numeroContenedor tiene que empezar en 0 y terminar en el número de contenedores - 1 de la página. */
    
    function cambiarAncho(numeroContenedor) {
        let rango = document.getElementsByClassName("rango");
        let codigo = document.getElementsByClassName("codigo");
        let resultado = document.getElementsByClassName("resultado");
    
        codigo[numeroContenedor].style.width = rango[numeroContenedor].value + "%";
    
        if (parseInt(rango[numeroContenedor].value) > 90) {
            resultado[numeroContenedor].style.display = "none";
        } else {
            resultado[numeroContenedor].style.display = "flex";
            resultado[numeroContenedor].style.width = 99 - parseInt(rango[numeroContenedor].value) + "%";
        }
    }
    
    /*-----------------------------------------------------------FUNCIÓN PARA ELEGIR LA PÁGINA INTERMEDIA ------------------------------------------------------*/
    /*-----------------------------------------------------------FUNCIÓN PARA ELEGIR LA PÁGINA INTERMEDIA ------------------------------------------------------*/
    /*-----------------------------------------------------------FUNCIÓN PARA ELEGIR LA PÁGINA INTERMEDIA ------------------------------------------------------*/
    /*-----------------------------------------------------------FUNCIÓN PARA ELEGIR LA PÁGINA INTERMEDIA ------------------------------------------------------*/
    /*-----------------------------------------------------------FUNCIÓN PARA ELEGIR LA PÁGINA INTERMEDIA ------------------------------------------------------*/
    
    function eligePaginaIntermedia(tipoPaginaIntermedia) {
        let codigo, elemento;
        codigo = "";
        switch (tipoPaginaIntermedia) {
            ${divCabecera.innerHTML}default:
                break;
        }
    }
    
    
    /*--------------------------------------------------------------FUNCION PARA SACAR LA CABECERA DE LA URL------------------------------------------------------------------------*/
    /*--------------------------------------------------------------FUNCION PARA SACAR LA CABECERA DE LA URL------------------------------------------------------------------------*/
    /*--------------------------------------------------------------FUNCION PARA SACAR LA CABECERA DE LA URL------------------------------------------------------------------------*/
    /*--------------------------------------------------------------FUNCION PARA SACAR LA CABECERA DE LA URL------------------------------------------------------------------------*/
    /*--------------------------------------------------------------FUNCION PARA SACAR LA CABECERA DE LA URL------------------------------------------------------------------------*/
    
        var url = window.location.href;
        var dir = url.split('/').slice(0, -1).join('/');
        console.log('El directorio donde se encuentra la página HTML es: ' + dir)
    
        /* Si dir termina en "/tutorial_IMFE" entonces estoy en el index y debo de poner url: './DETALLE/css/css_listas.html'
           Si dir termina en "/OTRAS" entonces estoy en una página intermedia y debo de poner url: '../DETALLE/css/css_hipervinculos.html'
           Si dir termina en "/DETALLE/css" , "/DETALLE/html", "/DETALLE/form", o "/DETALLE/js" entonces estoy en una página de detalle y debo de poner url: '../css/css_introduccion.html' } */
    
        function buscarCabeceraUrl(subStrLocation) {
            var str = dir;
            if (str.includes(subStrLocation)) {
                cabeceraUrl = subStrLocation
                console.log("window.location.href si contiene la subcadena." + subStrLocation);
            } else {
                //console.log("window.location.href no contiene la subcadena." + subStrLocation);
            }
        }
       ${nuevaURL}
    
        /*no hacemos un buscarCabeceraUrl("/tutorial_IMFE") ya que si no es una página intermedia o de detalle tiene por fuerza que ser la página principal, y por lo tanto no es necesario controlar esta condición*/
    
    ${nuevaSwitchURL}
        console.log(cabeceraUrl);
    
    
    /*---------------------------------------------------------------FUNCIÓN PARA EL MENU-----------------------------------------------------------------------------*/
    /*---------------------------------------------------------------FUNCIÓN PARA EL MENU-----------------------------------------------------------------------------*/
    /*---------------------------------------------------------------FUNCIÓN PARA EL MENU-----------------------------------------------------------------------------*/
    /*---------------------------------------------------------------FUNCIÓN PARA EL MENU-----------------------------------------------------------------------------*/
    /*---------------------------------------------------------------FUNCIÓN PARA EL MENU-----------------------------------------------------------------------------*/
    
    var listaVisible = false; // Variable global para rastrear la visibilidad de la lista
    var subelementoDesplegado = null;
    
    
    function crearMenu() {  // Función para mostrar u ocultar la lista al hacer clic en el botón
        var ul = document.getElementById('miLista'); // Obtener la referencia al elemento <ul> por su id
        // Si la lista está oculta, muéstrala; de lo contrario, ocúltala
        if (listaVisible) {
            ul.style.display = 'none';
            listaVisible = false;
        } else {
            ul.style.display = 'block';
            listaVisible = true;
        }
    }
    
    
    // Función para inicializar la lista al cargar la página
    window.onload = function () {
    
        var ul = document.createElement('ul');  // Crear un nuevo elemento <ul>
        ul.id = 'miLista'; // Establecer el id del <ul>
    
        // Datos para la lista, cada elemento tiene un texto y una lista de subelementos
    
        ${nuevoMenu}
    
        // Iterar sobre los datos y construir la lista
        datosLista.forEach(function (datos) {
            var li = document.createElement('li');  // Crear un nuevo elemento <li> para cada elemento principal
            li.textContent = datos.textoElemento; // Establecer el texto del <li> (HTML, CSS, ETC)
    
            var ulSubelementos = document.createElement('ul');  // Crear un nuevo elemento <ul> para los subelementos, inicialmente oculto
            ulSubelementos.style.display = 'none'; // Inicialmente, oculta la lista de subelementos
    
            datos.subelementos.forEach(function (subelemento) {    // Iterar sobre los subelementos y construir la lista de subelementos
                var liSubelemento = document.createElement('li');
                var enlace = document.createElement('a');
                enlace.textContent = subelemento.texto; // Establecer el texto del enlace
                enlace.href = subelemento.url; // Establecer la URL del enlace
                liSubelemento.appendChild(enlace);
                ulSubelementos.appendChild(liSubelemento);
            });
    
            li.addEventListener('click', function () {
                // Si hay un subelemento desplegado y es el mismo que el actual, pliégalo
                if (subelementoDesplegado === ulSubelementos) {
                    ulSubelementos.style.display = 'none';
                    subelementoDesplegado = null;
                } else {
                    // Si hay un subelemento desplegado, pliégalo
                    if (subelementoDesplegado) {
                        subelementoDesplegado.style.display = 'none';
                    }
    
                    // Alternar la visibilidad de la lista de subelementos del elemento actual
                    if (ulSubelementos.style.display === 'none' || ulSubelementos.style.display === '') {
                        ulSubelementos.style.display = 'block';
                        subelementoDesplegado = ulSubelementos;
                    } else {
                        ulSubelementos.style.display = 'none';
                        subelementoDesplegado = null;
                    }
                }
            });
    
            li.appendChild(ulSubelementos);  // Añadir la lista de subelementos al elemento principal
    
            ul.appendChild(li);  // Añadir el elemento principal a la lista principal
        });
    
        /*document.body.appendChild(ul); // Añadir la lista principal al cuerpo del documento*/
        const menu = document.getElementById('abrir'); // Obtener la referencia al <div> que contiene el menu por su id
        menu.appendChild(ul);
    };
    
    /*---------------------------------------------------------------FUNCIÓN PARA EL BUSCADOR-----------------------------------------------------------------------------*/
    /*---------------------------------------------------------------FUNCIÓN PARA EL BUSCADOR-----------------------------------------------------------------------------*/
    /*---------------------------------------------------------------FUNCIÓN PARA EL BUSCADOR-----------------------------------------------------------------------------*/
    /*---------------------------------------------------------------FUNCIÓN PARA EL BUSCADOR-----------------------------------------------------------------------------*/
    /*---------------------------------------------------------------FUNCIÓN PARA EL BUSCADOR-----------------------------------------------------------------------------*/
    
    const contenidoDePaginas = {
        ${nuevoBuscadorTxt}
    };
    
    function quitarTildesEnContenido(cadena) {
        const tildes = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', ü: 'u', ñ: 'n' };
        return cadena.replace(/[áéíóúüñ]/g, letra => tildes[letra] || letra);
    }
    
    function buscarEnContenido(query) {
        if (!query.trim()) {
            return [];
        }
    
        // Convertir la consulta a minúsculas y quitar tildes
        query = quitarTildesEnContenido(query.toLowerCase());
        const palabrasClave = query.split(' ');
        const resultados = [];
    
        function obtenerRaiz(palabra) {
            return palabra.endsWith('s') ? palabra.slice(0, -1) : palabra;
        }
    
        function escaparCaracteresEspeciales(palabra) {
            return palabra.replace(/[.*+?^$}{()|[\]\\]/g, '\\$&');
        }
    
        for (const [pagina, infoPagina] of Object.entries(contenidoDePaginas)) {
            const contenidoEnMinusculas = quitarTildesEnContenido(infoPagina.contenido.toLowerCase());
            const palabrasClaveEscapadas = palabrasClave.map(escaparCaracteresEspeciales);
    
            if (palabrasClaveEscapadas.some(palabra => contenidoEnMinusculas.includes(obtenerRaiz(palabra)))) {
                resultados.push(infoPagina);
            }
        }
    
        return resultados;
    }
    
    function realizarBusqueda() {
        const query = document.getElementById('campoBusqueda').value;
        const resultados = buscarEnContenido(query);
        mostrarResultados(resultados);
    }
    
    function mostrarResultados(resultados) {
        const contenedorResultados = document.getElementById('resultadosBusqueda');
        contenedorResultados.innerHTML = '';
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = '';
        let hayResultados = true;
    
        if (resultados.length > 0) {
            // Si hay resultados, mostrar el modal y enlaces
            abrirModal();
    
            resultados.forEach((infoPagina, index) => {
                const enlace = document.createElement('a');
                enlace.textContent = infoPagina.nombre;
                enlace.href = cabeceraUrl + ${infoPagina};
                enlace.classList.add('enlaceResultado');
                enlace.setAttribute('target', '_blank');
                modalContent.appendChild(enlace);
    
                // Agregar un salto de línea después de cada enlace, excepto el último
                if (index < resultados.length - 1) {
                    modalContent.appendChild(document.createElement('br'));
                    modalContent.appendChild(document.createElement('br'));
                }
            });
        } else {
            // Si no hay resultados, mostrar el mensaje
            hayResultados = false;
        }
    
        // Después del forEach, verifica si hay resultados y agrega el mensaje si no los hay
        if (!hayResultados) {
            const mensajeSinResultados = document.createElement('p');
            mensajeSinResultados.textContent = 'No se encontraron resultados. Revisa la ayuda para obtener más detalles.';
            mensajeSinResultados.id = 'mensajeSinResultados';
            modalContent.appendChild(mensajeSinResultados);
    
            // Muestra el modal incluso si no hay resultados
            abrirModal();
        }
    }
    
    function buscarConEnter(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            realizarBusqueda();
        }
    }
    
    // Funciones para el modal
    function abrirModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'flex';
    }
    
    function cerrarModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    }
    
    /*FINAL FUNCION BUSCADOR*/
    `;

    /*AL PULSAR EL BOTÓN DE DESCARGA*/
    if (boton == 'descarga' && !checkDuplicates() && !checkDuplicatesColor() && !checkDuplicatesTemas()) { // Si se ha pulsado el botón de actualizar plantilla (llama a la función con el argumento "descarga")

        /*PARA QUE SE DESCARGUE EL ARCHIVO HTML*/
        // Crear un Blob con el contenido HTML
        var blob = new Blob([nuevoHTML], { type: 'text/html' });

        // Crear un enlace temporal para descargar el archivo
        var enlace = document.createElement('a');
        enlace.href = URL.createObjectURL(blob);
        enlace.download = `index.html`;  // Nombre con el que se va a descargar el archivo

        // Agregar el enlace al cuerpo y simular un clic
        document.body.appendChild(enlace);
        enlace.click();

        // Limpiar y liberar recursos
        document.body.removeChild(enlace);
        URL.revokeObjectURL(enlace.href);


        /*PARA QUE SE DESCARGUE EL ARCHIVO JAVASCRIPT*/
        // Crear un Blob con el contenido HTML
        var blob = new Blob([nuevoMenuTuto], { type: 'script/javascript' });

        // Crear un enlace temporal para descargar el archivo
        var enlace = document.createElement('a');
        enlace.href = URL.createObjectURL(blob);
        enlace.download = `MenuTuto.js`;  // Nombre con el que se va a descargar el archivo

        // Agregar el enlace al cuerpo y simular un clic
        document.body.appendChild(enlace);
        enlace.click();

        // Limpiar y liberar recursos
        document.body.removeChild(enlace);
        URL.revokeObjectURL(enlace.href);

        /*PARA QUE SE DESCARGUE EL JSON CON LOS DATOS ALMACENADOS*/

        // Objeto con el contenido de cada apartado. Este objeto se introducirá dentro del objeto principal del json
        let datos = {
            iniciales: [],
            titulos: [],
            casillaColores: [],
            color: [],
            nuevoMenu: [],
            nuevoBuscador: [],
        };

        // Para hacer un objeto con todos los títulos, iniciales y contenidos en general
        var bloques = document.querySelectorAll(".contenedorContenidos"); // Objeto con todos los bloques
        var iniciales = document.querySelectorAll(".inicialesBloque"); // Crea un objeto con todos los títulos de todos los bloques
        var titulos = document.querySelectorAll(".titulosBloque"); // Crea un objeto con todos los títulos de todos los bloques
        var contador = 1;
        var nuevoMenu = document.querySelectorAll(".contenedorMenu");
        var nuevoBuscador = document.querySelectorAll(".contenedorBuscador");
        var temas = document.querySelectorAll(".ordenTemas");

        const temasSeleccionados = [];

        // Iterar sobre los elementos select
        temas.forEach(select => {
            // Obtener el valor seleccionado de cada select y agregarlo al array
            temasSeleccionados.push(select.value);
        });

        // iTERAR SOBRE CADA BLOQUE

        for (let k = 0; k < bloques.length; k++) {
            var casillaColores = "f";

            datos.titulos.push(titulos[k].value); // Cada titulo de cada bloque
            datos.iniciales.push(iniciales[k].value); // cada contenido de cada bloque

            // Crea un objeto con las nueve posibles casillas de colores
            var casillaColor = document.getElementsByName(`elegir-color${[contador]}`);
            var color = ""; // se guarda el color

            for (let l = 0; l < casillaColor.length; l++) {
                if (casillaColor[l].checked) {
                    casillaColores = "t";
                    color += casillaColor[l].value;
                }
            }
            datos.casillaColores.push(casillaColores);
            datos.color.push(color);

            contador++;
        } // fin de cada bloque
        /* PARA EL BUSCADOR */
        for (let k = 0; k < nuevoBuscador.length; k++) {
            if (nuevoBuscador[k].value != "") {
                datos.nuevoBuscador.push(nuevoBuscador[k].value);
            }
        }
        /*PARA EL MENU*/
        for (let k = 0; k < nuevoMenu.length; k++) {
            if (nuevoMenu[k].value != "") {
                datos.nuevoMenu.push(nuevoMenu[k].value);
            }
        }

        // Crear el JSON
        var informacionJSON = JSON.stringify({
            titulo,
            imagen64,
            datos, // Incluye directamente el objeto datos
            temasSeleccionados,
        });

        // Crear Blobs para EL archivo JSON
        var blobJSON = new Blob([informacionJSON], { type: 'application/json' });

        // Crear enlace temporal para descargar el archivo
        var enlaceJSON = document.createElement('a');
        enlaceJSON.href = window.URL.createObjectURL(blobJSON);
        enlaceJSON.download = `index.json`;

        // Agregar enlace al cuerpo y simular clic
        document.body.appendChild(enlaceJSON);
        enlaceJSON.click();
        document.body.removeChild(enlaceJSON);
        window.URL.revokeObjectURL(enlaceJSON.href);

    } else if (boton === 'descarga' && checkDuplicates()) {
        // Si hay duplicados, cancelar el evento (detener la descarga) y mostrar un mensaje de alerta
        event.preventDefault();
        alert('No se puede descargar debido a elementos duplicados en el formulario.');
    }// Fin de descarga


    /*PARA LA PREVISUALIZACIÓN*/
    if (boton == 'preview') {

        var myWindow = window.open('', '_blank');
        myWindow.document.write(nuevoHTML);

    }

}