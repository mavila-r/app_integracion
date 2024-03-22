// Declaración de variables globales para almacenar códigos base64 e imágenesdivCuerpotitulo
let imagen64; // ALMACENA EL CODIGO EN BASE 64 DE LA IMAGEN
var nuevoSvg = ""; // ALMACENA LOS ICONOS SVG DEL HEADER

/*FUNCIÓN PRINCIPAL*/
function funcionPrincipal(boton) {
    // INICIALIZACION DE VARIABLES

    let divCabecera = document.createElement("div"); // Crea un nuevo div que será la parte del header donde se contiene los logos de la página y del grupo además del menú
    let divCuerpo = document.createElement("div"); // Crea un nuevo div que será el "cuerpo del documento", aquí podemos ir introduciendo los títulos, contenido, ejemplos...

    /*ORINTACIONES DE ESTUDIO*/
    let orientacion = document.getElementById("orientacion").value;  // Esta variable la ponemos en la parte del código html correspondiente


    /*IMAGEN GRUPO*/
    let codigoImagen = "";  // Inicializa variable para almacenar la ruta que tendrá

    if (imagen64 == "") {
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

    /*PAGINA ANTERIOR*/
    let opcionesA = document.getElementsByName("radioAnterior"); // Accede al valor introducido en el input
    let nombrePaginaAnterior = "";

    // Iterar sobre los elementos de radio para encontrar el seleccionado
    for (var i = 0; i < opcionesA.length; i++) {
        if (opcionesA[i].checked) {
            // Asignar el valor seleccionado a la variable
            nombrePaginaAnterior = opcionesA[i].value;
            break;  // Salir del bucle una vez que se encuentra el valor seleccionado
        }
    }


    let paginaAnterior = "";
    if (nombrePaginaAnterior !== "") {
        paginaAnterior +=
            `<a href="./intermedio_${nombrePaginaAnterior}.html"> 
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

    /*PAGINA SIGUIENTE*/
    let opcionesS = document.getElementsByName("radioSiguiente"); // Accede al valor introducido en el input
    let nombrePaginaSiguiente = "";
    // Iterar sobre los elementos de radio para encontrar el seleccionado
    for (var i = 0; i < opcionesS.length; i++) {
        if (opcionesS[i].checked) {
            // Asignar el valor seleccionado a la variable
            nombrePaginaSiguiente = opcionesS[i].value;
            break;  // Salir del bucle una vez que se encuentra el valor seleccionado
        }
    }
    let paginaSiguiente = "";
    if (nombrePaginaSiguiente !== "") {
        paginaSiguiente +=
            `<a href="./intermedio_${nombrePaginaSiguiente}.html"> 
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

    var colorSeleccionado; // Guarda el color del radio seleccionado (tema)
    var inicialSeleccionada; // Guarda la inicial del radio seleccionado (tema)
    var tituloSeleccionado; // Guarda el titulo del radio seleccionado (tema)
    var numeroRadios = 0;

    for (let i = 0; i < iniciales.length; i++) {
        // ICONOS DE LAS DISTINTAS PÁGINAS, IMAGEN DEL GRUPO Y MENÚ IMPORTANTE!! HABRÍA QUE HACER UNA FUNCIÓN QUE LLEVE A CARGAR INFO Y TE HAGA LO DE LAS CONDICIONES ALLÍ
        // el archivo debe de ser preguntado en un label y quitarle los espacios y los acentos
        if (iniciales[i] != "" && titulos[i] != "" && color[i] != "") {
            var radioIntermedio = document.getElementsByName("radioIntermedio")[i];
            if (radioIntermedio.checked) {
                var nuevoSvg = `<a class="borde" href="../OTRAS/intermedio_${titulos[i]}.html">
                                    <div class="Tema${color[i]} logonosotros3" aria-label="Logo de ${titulos[i]}" title="Click para ir a página principal de ${titulos[i]}">
                                        ${iniciales[i]}
                                    </div>
                                </a>
                `;

                colorSeleccionado = color[i];
                inicialSeleccionada = iniciales[i];
                tituloSeleccionado = titulos[i]; //Para poner el nombre del JSON

            } else {
                var nuevoSvg = `<a class="borde2" href="../OTRAS/intermedio_${iniciales[i]}.html">
                                    <div class="Tema${color[i]} logonosotros3" aria-label="Logo de ${titulos[i]}" title="Click para ir a página Principal de ${titulos[i]}">
                                        ${iniciales[i]}
                                    </div>
                                </a>
                `;
            }
            divCabecera.insertAdjacentHTML('beforeend', nuevoSvg);
            numeroRadios++;
        }
    }

    /*CADA BLOQUE*/

    let divContenedorBloques = document.getElementsByClassName("contenedorBloquesInt"); // Accede a los div de cada bloque. Esto genera un array que contiene todos los div con la clase "contenedorBloques". Ahora, podemos ir accediendo a cada div gracias a su índice

    for (let i = 0; i < divContenedorBloques.length; i++) { // Va accediendo a cada div en orden

        /*TITULO*/
        let contenidoTitulos = divContenedorBloques[i].getElementsByClassName("titulosBloque")[0].value; // Accede al input de tituloBloques gracias a su clase. En vez de buscar el input con esta clase en el documento, lo busca dentro del div correspondiente

        /*INICIALES TITULO*/
        let contenidoDescripciones = divContenedorBloques[i].getElementsByClassName("descripcionBloques")[0].value; // Accede al input de descripcionBloques gracias a su clase. En vez de buscar el input con esta clase en el documento, lo busca dentro del div correspondiente

        let contenidoNombre = divContenedorBloques[i].getElementsByClassName("nombreBloques")[0].value; // Accede al input de nombreBloques gracias a su clase. En vez de buscar el input con esta clase en el documento, lo busca dentro del div correspondiente
        contenidoNombre = contenidoNombre.replace(/ /g, "_");
        if (contenidoDescripciones != "" && contenidoTitulos != "") {
            let article = `<article class="group">
                            <a href="../DETALLE/${inicialSeleccionada}/${inicialSeleccionada}_${contenidoNombre}.html">
                                <div class="Tema${colorSeleccionado} component-1-4">
                                    <div class="descripcion1">
                                    ${contenidoTitulos} 
                                    </div>
                                    <div class="descripcion2">
                                    ${contenidoDescripciones}
                                </div>
                            </div>
                        </a>
                    </article>
            `; // En esta variable se crea el bloque completo donde se va cambiando tanto el enlace, como la clase, el título y la descripción del enlace

            divCuerpo.insertAdjacentHTML('beforeend', article);
        }
    }
    /*NOMBRE DEL ARCHIVO*/
    let nombreArchivo = `intermedio_${inicialSeleccionada}`; // Accede al valor


    /*Crear una variable con todo el contenido de la página HTML de plantilla*/
    var nuevoHTML = `
        <!DOCTYPE html>
        <html lang="es-ES">

        <head>
            <meta charset="utf-8">
            <title>${tituloSeleccionado}</title>

            <meta name="title" content="${tituloSeleccionado}">
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
            <script src="../JS/MenuTuto.js"></script>
            <style>
            .logonosotros3{
                
                justify-content: center;
                align-items: center;
            }

            #eliPagInt a{
                text-decoration: none;
            }
            </style>
        </head>

        <body>

            <!--div class=" padre overlap-group"-->

            <div class="padre overlap-group">

                <!-- header -->

                <div id="header">
                    <div>
                        <a href="https://www.malaga.eu/">
                            <img class="ayuntamiento ayuntamiento_index" src="../img/logo-imf-1.png" alt="ayuntamiento 1" />
                        </a>
                        <a href="https://imfe.malaga.eu/">
                            <img class="imfe imfe_index" src="../img/logo-imfe-ok-2019-1.png" alt="imfe 1" />
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
    
                    <a href="../index.html">
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
                            <p class="titulo1">ORIENTACIONES AL ESTUDIO</p>
                            <p class="titulo2 small1">${orientacion}</p>
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
                            <a href="./index.html">
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

                <a href="">
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

    /*AL PULSAR EL BOTÓN DE DESCARGA*/
    if (boton == 'descarga') { // Si se ha pulsado el botón de actualizar plantilla (llama a la función con el argumento "descarga")

        /*PARA QUE SE DESCARGUE EL ARCHIVO HTML*/
        // Crear un Blob con el contenido HTML
        var blob = new Blob([nuevoHTML], { type: 'text/html' });

        // Crear un enlace temporal para descargar el archivo
        var enlace = document.createElement('a');
        enlace.href = URL.createObjectURL(blob);
        enlace.download = `${nombreArchivo}.html`;  // Nombre con el que se va a descargar el archivo

        // Agregar el enlace al cuerpo y simular un clic
        document.body.appendChild(enlace);
        enlace.click();

        // Limpiar y liberar recursos
        document.body.removeChild(enlace);
        URL.revokeObjectURL(enlace.href);


        /*PARA QUE SE DESCARGUE EL JSON CON LOS DATOS ALMACENADOS*/

        // Objeto con el contenido de cada apartado. Este objeto se introducirá dentro del objeto principal del json
        let datos = {
            titulosBloque: [],
            descripciones: [],
            nombre: [],
            estadoCasilla: [],
            estadoAnterior: [],
            estadoSiguiente: [],
        };

        // Para hacer un objeto con todos los datos
        var bloques = document.querySelectorAll(".contenedorBloquesInt"); // Objeto con todos los bloques
        var titulosBloque = document.querySelectorAll(".titulosBloque"); // Crea un objeto con todos los títulos de todos los bloques
        var descripciones = document.querySelectorAll(".descripcionBloques"); // Crea un objeto con todos los títulos de todos los bloques
        var nombre = document.querySelectorAll(".nombreBloques"); // Crea un objeto con todos los nombre de archivo de todos los bloques
        var estadoCasilla = "";
        var radioIntermedio = document.getElementsByName("radioIntermedio");
        for (let k = 0; k < numeroRadios; k++) {
            if (radioIntermedio[k].checked) {
                estadoCasilla = "t";
            } else {
                estadoCasilla = "f";
            }
            datos.estadoCasilla.push(estadoCasilla);
        }

        var estadoAnterior = "";
        var radioAnterior = document.getElementsByName("radioAnterior");
        for (let k = 0; k < numeroRadios; k++) {
            if (radioAnterior[k].checked) {
                estadoAnterior = "t";
            } else {
                estadoAnterior = "f";
            }
            datos.estadoAnterior.push(estadoAnterior);
        }

        var estadoSiguiente = "";
        var radioSiguiente = document.getElementsByName("radioSiguiente");
        for (let k = 0; k < numeroRadios; k++) {
            if (radioSiguiente[k].checked) {
                estadoSiguiente = "t";
            } else {
                estadoSiguiente = "f";
            }
            datos.estadoSiguiente.push(estadoSiguiente);
        }

        // iTERAR SOBRE CADA BLOQUE

        for (let l = 0; l < bloques.length; l++) {
            datos.titulosBloque.push(titulosBloque[l].value); // Cada titulo de cada bloque
            datos.descripciones.push(descripciones[l].value); // Cada descripción de cada bloque
            datos.nombre.push(nombre[l].value); // cada nombre de archivo de cada bloque
        } // fin de cada bloque

        // Crear el JSON
        var informacionJSON = JSON.stringify({
            titulo,
            iniciales,
            titulos,
            color,
            orientacion,
            nombrePaginaAnterior,
            nombrePaginaSiguiente,
            imagen64,
            datos, // Incluye directamente el objeto datos
        });

        // Crear Blobs para EL archivo JSON
        var blobJSON = new Blob([informacionJSON], { type: 'application/json' });

        // Crear enlace temporal para descargar el archivo
        var enlaceJSON = document.createElement('a');
        enlaceJSON.href = window.URL.createObjectURL(blobJSON);
        enlaceJSON.download = `${nombreArchivo}.json`;

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
