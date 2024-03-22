// Declaración de variables globales para almacenar códigos base64
let imagen64 = ""; // ALMACENA EL CODIGO EN BASE 64 DE LA IMAGEN

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


/*FUNCIÓN PRINCIPAL*/
function actualizarMenuTuto() {
   // INICIALIZACION DE VARIABLES
   let divCabecera = document.createElement("div"); // Crea un nuevo div que será la "cabecera del documento", donde se incluirá la función que crea la cabecera de cada página en MenuTuto.js

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
            ${divCabecera.innerHTML};default:
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

    // Para hacer un objeto con todos los títulos y contenidos
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
        datos,
        temasSeleccionados, // Incluye directamente el objeto datos
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

}
    