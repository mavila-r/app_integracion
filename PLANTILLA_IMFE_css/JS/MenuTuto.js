

function Abrir() {
    document.getElementById("abrir").className = "desplegable-abierto";
}
function Cerrar() {
    document.getElementById("abrir").className = "desplegable";
    event.preventDefault();
}

/*FUNCIÓN PARA EL BUSCADOR*/

// Función para inicializar la lista al cargar la página
//window.onload = function () {

/* ***INICIO*** FUNCIONALIDAD PARA DETECTAR EL DIRECTORIO DE LA PÁGINA HTML ACTUAL EN LA QUE VAMOS A UBICAR EL MENU (la cual podrá ser el index, alguna página intermedia del tutorial, o una página de detalle) */
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
var cabeceraUrl = "";
buscarCabeceraUrl("/DETALLE/html");
if (cabeceraUrl == "") {
    buscarCabeceraUrl("/DETALLE/css");
}
if (cabeceraUrl == "") {
    buscarCabeceraUrl("/DETALLE/form");
}
if (cabeceraUrl == "") {
    buscarCabeceraUrl("/OTRAS");
}

/*no hacemos un buscarCabeceraUrl("/tutorial_IMFE") ya que si no es una página intermedia o de detalle tiene por fuerza que ser la página principal, y por lo tanto no es necesario controlar esta condición*/

switch (cabeceraUrl) {
    case "/DETALLE/css":
        cabeceraUrl = '../';
        break;
    case "/DETALLE/html":
        cabeceraUrl = '../';
        break;
    case "/DETALLE/form":
        cabeceraUrl = '../';
        break;
    case "/OTRAS":
        cabeceraUrl = '../DETALLE/';
        break;
    default:
        cabeceraUrl = './DETALLE/';
        break;
}
//console.log('valor de cabeceraUrl: ' + cabeceraUrl)
/* ***FIN*** FUNCIONALIDAD PARA DETECTAR EL DIRECTORIO DE LA PÁGINA HTML ACTUAL EN LA QUE VAMOS A UBICAR EL MENU (la cual podrá ser el index, alguna página intermedia del tutorial, o una página de detalle) */


// Objeto que contiene el contenido de cada página con nombres amigables
const contenidoDePaginas = {

    /*HTML*/
    'html_introduccion': { url: 'html/html_introduccion', nombre: 'Introducción', contenido: 'introducción HTML HyperText Markup Language <!DOCTYPE html> etiqueta <div> index.html atributo hipertexto LIFO' },
    'html_estructura': { url: 'html/html_estructura', nombre: 'Estructura', contenido: 'etiqueta <header> <main> <aside> <section> <footer> <nav> <article> <head> <title> <style> <meta> <body> name keywords <title> <link> rel stylesheet href comentario estructura HTML' },
    'html_etiquetas_de_texto': { url: 'html/html_etiquetas_de_texto', nombre: 'Etiquetas de texto', contenido: 'texto <p> párrafo <br> salto línea <hr> horizontal <h1> <h2> <h3> <h4> <h5> <h6> título subtítulo <q> cita <blockquote> bloque citas <cite> citar <pre> <code> código <dfn> definición <sup> superíndice <sub> subíndice <ins> insertar <del> <strong> <b> <em> <mark> <i> enfatizar resaltar <u> subrayar' },
    'html_listas': { url: 'html/html_listas', nombre: 'Listas', contenido: 'lista <ul> <li> <ol> <dl> <dd> <dt> ordenada desordenada sublista atributos list-style-type list-style-image atributo style viñeta' },
    'html_imagenes': { url: 'html/html_imagenes', nombre: 'Imágenes', contenido: 'imagen insertar <img> src alt vspace formato height width altura anchura px porcentaje' },
    'html_hipervinculos': { url: 'html/html_hipervinculos', nombre: 'Hipervínculos', contenido: 'enlace hipervínculo atributo <a> href target _blank _self rel <img>' },
    'html_tablas': { url: 'html/html_tablas', nombre: 'Tablas', contenido: 'tabla celda fila columna borde estilo <table> <thead> <tbody> <tfoot> <th> <tr> <td> <caption> propiedad rowspan colspan border-collapse' },
    'html_inline': { url: 'html/html_inline', nombre: 'Inline', contenido: 'inline linea elemento <span> <input> <code> <em> <u> <i> <strong> <a> <img> <sub> <sup>' },
    'html_block': { url: 'html/html_block', nombre: 'Block', contenido: 'block bloque elemento <div> <p> <h1> <h6> <ul> <li> <ol> <table> <tr> <td> <dl> <dd> <dt> contener contenedor' },
    'html_atributos_comunes': { url: 'html/html_atributos_comunes', nombre: 'Atributos comunes', contenido: 'atributo común comunes id class style title accesskey atajo de teclado idioma lang translate dir direccionalidad texto estilo CSS' },
    'html_media': { url: 'html/html_media', nombre: 'Media', contenido: 'atributo audio vídeo insertar YouTube src controls autoplay loop <audio> <video> <source> <iframe> reproducción' },
    'html_svg': { url: 'html/html_svg', nombre: 'SVG', contenido: '<svg> vector borde stroke relleno fill <line/> <line> <polyline/> <polyline> <rect/> <rect> width height radio círculo rx ry rectángulo polígono polilínea línea triángulo <circle/> <circle> posición cx cy <elipse/> <elipse> <animate/> <animate> <path/> <path> <canvas/> <canvas> attributeName repeatCount coordenada' },

    /* CSS */
    'css_introduccion': { url: 'css/css_introduccion', nombre: 'Introducción', contenido: 'línea <head> rel comentario' },
    'css_herencia': { url: 'css/css_herencia', nombre: 'Herencia', contenido: 'padre hijo herencia estilo heredar' },
    'css_estilos_texto': { url: 'css/css_estilos_texto', nombre: 'Estilos para texto', contenido: 'font-family familia genérica font-size tamaño fuente font-style cursiva italic font-weight lighter bold font-variant mayúscula small-caps color valor rgb hex background-color fondo color text-align alineado alineación vertical-align text-decoration línea text-shadow sombra desenfoque blur text-indent sangría text-transfrom case word-spacing espacio white-space blanco' },
    'css_Anchura_Altura': { url: 'css/css_Anchura_Altura', nombre: 'Anchura y altura', contenido: 'anchura altura width height max-height min-height max-width min-width' },
    'css_Modelo_Cajas': { url: 'css/css_Modelo_Cajas', nombre: 'Modelo de cajas', contenido: 'margen relleno borde margin padding border border-radius border-width border-color border-style' },
    'css_listas': { url: 'css/css_listas', nombre: 'Estilo para listas', contenido: 'lista <ol> <ul> <li> ordenada desordenada list-style-image list-style-position list-style color' },
    'css_Background-color_Background-image': { url: 'css/css_Background-color_Background-image', nombre: 'Background-color y background-image', contenido: 'color fondo imagen dinámica fija background-color background-image background-repeat background-attachment background-shorthand background-size background-clip' },
    'css_tablas': { url: 'css/css_tablas', nombre: 'Estilo para tablas', contenido: 'tabla <table> border-collapse border-spacing caption-side empty-cells table-layout color responsive' },
    'css_enlaces': { url: 'css/css_enlaces', nombre: 'Estilo para enlaces', contenido: 'enlace link visited hover active' },
    'css_cursor': { url: 'css/css_cursor', nombre: 'Personalización del cursor', contenido: 'cursor personalizar efecto aplicar estilo puntero visual' },
    'css_display': { url: 'css/css_display', nombre: 'Propiedad display', contenido: 'elemento línea bloque display inline block' },
    'css_visibility': { url: 'css/css_visibility', nombre: 'Propiedad Visibility', contenido: 'visible hidden collapse initial inherit' },
    'css_position': { url: 'css/css_position', nombre: 'Propiedad position', contenido: 'position posicionamiento posicion relative absolute fixed sticky elemento capa' },
    'css_float_clear': { url: 'css/css_float_clear', nombre: 'Propiedad float y clear', contenido: 'propiedad float elemento flotante posicionamiento css diseño responsivo clear limpiar despejar' },
    'css_overflow': { url: 'css/css_overflow', nombre: 'Overflow', contenido: 'overflow visible hidden scroll auto overflow-x overflow-y' },
    'css_Z-index': { url: 'css/css_Z-index', nombre: 'Z-Index', contenido: 'z-index posición' },
    'css_text-shadow': { url: 'css/css_text-shadown', nombre: 'Propiedad text shadow', contenido: 'text-shadow sombra texto múltiple' },
    'css_word-wrap': { url: 'css/word-wrap', nombre: 'Word-wrap', contenido: 'word-wrap break-word contenedor' },
    'css_font_face': { url: 'css/font_face', nombre: 'Regla @font-face', contenido: '@font-face fuente personalizada tipografia importar personalizar externa formato font-face' },
    'css_Box-shadow': { url: 'css/Box-shadow', nombre: 'Box-shadow', contenido: 'sombra box-shadow caja' },
    'css_degradados': { url: 'css/degradados', nombre: 'Degradados', contenido: 'degradado background-gradient gradiente linear-gradient radial-gradient color fondo transiciones' },
    'css_opacity': { url: 'css/css_opacity', nombre: 'Opacity', contenido: 'opacity opacidad transparencia' },
    'css_transiciones': { url: 'css/css_transiciones', nombre: 'Transiciones', contenido: 'transiciones transition animacion efecto transición duración timing functioncolor opacidad posición tamaño hover' },
    'css_pseudo-clases_pseudo-elementos': { url: 'css/css_pseudo-clases_pseudo-elementos', nombre: 'Pseudo-clases y Pseudo-elementos', contenido: 'pseudo-clase pseudo-elemento first-child last-child only-child invalid hover focus first-line first-letter selection content before after marker' },
    'css_transformaciones': { url: 'css/css_transformaciones', nombre: 'Propiedad transform', contenido: 'propiedad transform transformaciones transformacion rotate translate scale skew origin matrix' },
    'css_Display-grid': { url: 'css/css_Display-grid', nombre: 'Display y grid', contenido: 'display grid grid-column grid-rows grid-template-areas' },
    'css_flexbox': { url: 'css/css_flexbox', nombre: 'Propiedad display: flex', contenido: 'flexbox display flex direction row reverse colum wrap nowrap flow justify content start end center space between around evenly align items stretch baseline self content order' },

    /*FORMULARIOS*/
    'Form_Atributos_de_formularios': { url: 'form/Form_Atributos_de_formularios', nombre: 'Atributos de formularios', contenido: '<form> formulario target acción enctype codificar method método autocomplete autocompletar novalidate validar' },
    'Form_Atributos_form_etiqueta_input': { url: 'form/Form_Atributos_form_etiqueta_input', nombre: 'Atributos form de la etiqueta input', contenido: '<form> formaction action acción formenctype enctype codificar formmethod method método formtarget  target formnovalidate no validar blank self parent top framename' },
    'Form_Atributos_para_la_etiqueta_input': { url: 'Form_Atributos_para_la_etiqueta_input', nombre: 'Atributos para la etiqueta input', contenido: 'value valor readonly lectura disabled deshabilitar size tamaño maxlength max máximo min mínimo múltiple pattern patrón placeholder sugerencia required requerido step intervalo pasar autofocus centrar width anchura ancho height altura alto list lista autocomplete autocompletar' },
    'Form_Elementos_de_formularios': { url: 'form/Form_Elementos_de_formularios', nombre: 'Elementos de formulario', contenido: '<form> formato <input> entrada <label> etiqueta <select> seleccionar <option> opción <datalist> datalist <textarea> área texto <meter> medidor <progress> progreso' },
    'Form_Tipos_de_Input': { url: 'form/Form_Tipos_de_Input', nombre: 'Tipos de input', contenido: 'type tipo button botón checkbox check color colour date fecha datetime-local datetime local email correo electrónico file archivo hidden ocultar image imagen month mes number número password contraseña radio range rango reset resetear reiniciar borrar search buscar submit enviar teléfono  phone tel móvil  text texto time tiempo url week semana' },
    'Form_Elementos_de_formularios': { url: 'form/Form_Elementos_de_formularios', nombre: 'Atributos de validaciones', contenido: 'minlength min mínimo maxlength max máximo length longitud step pasar required requerido disabled deshabilitado readonly lectura pattern patron' }
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
        return palabra.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
            enlace.href = cabeceraUrl + `${infoPagina.url}.html`;
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

/*es necesario escribir el menú dentro de la capa (div) con id = abrir*/
/*además habrá que adaptar los estilos de lo programado por Tere en el menu a los programados por
Samu*/

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

    /* ***INICIO*** FUNCIONALIDAD PARA DETECTAR EL DIRECTORIO DE LA PÁGINA HTML ACTUAL EN LA QUE VAMOS A UBICAR EL MENU (la cual podrá ser el index, alguna página intermedia del tutorial, o una página de detalle) */
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
            //console.log("window.location.href si contiene la subcadena." + subStrLocation);
        } else {
            //console.log("window.location.href no contiene la subcadena." + subStrLocation);
        }
    }
    var cabeceraUrl = "";
    buscarCabeceraUrl("/DETALLE/html");
    if (cabeceraUrl == "") {
        buscarCabeceraUrl("/DETALLE/css");
    }
    if (cabeceraUrl == "") {
        buscarCabeceraUrl("/DETALLE/form");
    }
    if (cabeceraUrl == "") {
        buscarCabeceraUrl("/OTRAS");
    }

    /*no hacemos un buscarCabeceraUrl("/tutorial_IMFE") ya que si no es una página intermedia o de detalle tiene por fuerza que ser la página principal, y por lo tanto no es necesario controlar esta condición*/

    switch (cabeceraUrl) {
        case "/DETALLE/css":
            cabeceraUrl = '../';
            break;
        case "/DETALLE/html":
            cabeceraUrl = '../';
            break;
        case "/DETALLE/form":
            cabeceraUrl = '../';
            break;
        case "/OTRAS":
            cabeceraUrl = '../DETALLE/';
            break;
        default:
            cabeceraUrl = './DETALLE/';
            break;
    }
    //console.log('valor de cabeceraUrl: ' + cabeceraUrl)
    /* ***FIN*** FUNCIONALIDAD PARA DETECTAR EL DIRECTORIO DE LA PÁGINA HTML ACTUAL EN LA QUE VAMOS A UBICAR EL MENU (la cual podrá ser el index, alguna página intermedia del tutorial, o una página de detalle) */

    var ul = document.createElement('ul');  // Crear un nuevo elemento <ul>
    ul.id = 'miLista'; // Establecer el id del <ul>

    // Datos para la lista, cada elemento tiene un texto y una lista de subelementos

    var datosLista = [
        {
            textoElemento: 'HTML',
            subelementos: [
                { texto: 'Introducción', url: cabeceraUrl + 'html/html_introduccion.html' },
                { texto: 'Estructura', url: cabeceraUrl + 'html/html_estructura.html' },
                { texto: 'Etiquetas de texto', url: cabeceraUrl + 'html/html_etiquetas_de_texto.html' },
                { texto: 'Listas', url: cabeceraUrl + 'html/html_listas.html' },
                { texto: 'Imágenes', url: cabeceraUrl + 'html/html_imagenes.html' },
                { texto: 'Hipervínculos', url: cabeceraUrl + 'html/html_hipervinculos.html' },
                { texto: 'Tablas', url: cabeceraUrl + 'html/html_tablas.html' },
                { texto: 'Elementos inline', url: cabeceraUrl + 'html/html_inline.html' },
                { texto: 'Elementos block', url: cabeceraUrl + 'html/html_block.html' },
                { texto: 'Atributos comunes', url: cabeceraUrl + 'html/html_atributos_comunes.html' },
                { texto: 'Media', url: cabeceraUrl + 'html/html_media.html' },
                { texto: 'SVG', url: cabeceraUrl + 'html/html_svg.html' },
            ]
        },
        {
            textoElemento: 'CSS',
            subelementos: [
                { texto: 'Introducción', url: cabeceraUrl + 'css/css_introduccion.html' },
                { texto: 'Herencia', url: cabeceraUrl + 'css/css_herencia.html' },
                { texto: 'Estilos para textos', url: cabeceraUrl + 'css/css_estilos_texto.html' },
                { texto: 'Anchura y altura', url: cabeceraUrl + 'css/css_Anchura_Altura.html' },
                { texto: 'Modelo de cajas', url: cabeceraUrl + 'css/css_Modelo_Cajas .html' },
                { texto: 'Estilos para listas', url: cabeceraUrl + 'css/css_listas.html' },
                { texto: 'Background-color y background-image', url: cabeceraUrl + 'css/css_Background-color_Background-image.html' },
                { texto: 'Estilos para tablas', url: cabeceraUrl + 'css/css_tablas.html' },
                { texto: 'Estilos para enlaces', url: cabeceraUrl + 'css/css_enlaces.html' },
                { texto: 'Personalización del cursor', url: cabeceraUrl + 'css/css_cursor.html' },
                { texto: 'Propiedad display', url: cabeceraUrl + 'css/css_display.html' },
                { texto: 'Propiedad Visibility', url: cabeceraUrl + 'css/css_visibility.html' },
                { texto: 'Propiedad position', url: cabeceraUrl + 'css/css_position.html' },
                { texto: 'Propiedad float y clear', url: cabeceraUrl + 'css/css_float_clear.html' },
                { texto: 'Overflow', url: cabeceraUrl + 'css/css_overflow.html' },
                { texto: 'Z-Index', url: cabeceraUrl + 'css/css_Z-index.html' },
                { texto: 'Propiedad text shadow', url: cabeceraUrl + 'css/css_text-shadow.html' },
                { texto: 'Word-wrap', url: cabeceraUrl + 'css/css_word-wrap.html' },
                { texto: 'Regla @font-face', url: cabeceraUrl + 'css/css_font_face.html' },
                { texto: 'Box-shadow', url: cabeceraUrl + 'css/css_Box-shadow.html' },
                { texto: 'Degradados', url: cabeceraUrl + 'css/css_degradados.html' },
                { texto: 'Opacity', url: cabeceraUrl + 'css/css_opacity.html' },
                { texto: 'Pseudo-clases y Pseudo-elementos', url: cabeceraUrl + 'css/css_pseudo-clases_pseudo-elementos.html' },
                { texto: 'Transiciones', url: cabeceraUrl + 'css/css_transiciones.html' },
                { texto: 'Propiedad transform', url: cabeceraUrl + 'css/css_transformaciones.html' },
                { texto: 'Display y grid', url: cabeceraUrl + 'css/css_Display-grid.html' },
                { texto: 'Propiedad display: flex', url: cabeceraUrl + 'css/css_flexbox.html' }
            ]
        },
        {
            textoElemento: 'Formularios',
            subelementos: [
                { texto: 'Elementos de formulario', url: cabeceraUrl + 'form/Form_Elementos_de_formularios.html' },
                { texto: 'Atributos de la etiqueta form', url: cabeceraUrl + 'form/Form_Atributos_de_formularios.html' },
                { texto: 'Tipos de input', url: cabeceraUrl + 'form/Form_Tipos_de_Input.html' },
                { texto: 'Atributos form de la etiqueta input', url: cabeceraUrl + 'form/Form_Atributos_form_etiqueta_input.html ' },
                { texto: 'Atributos para la etiqueta input', url: cabeceraUrl + 'form/Form_Atributos_para_la_etiqueta_input.html' },
                { texto: 'Atributos de validaciones', url: cabeceraUrl + 'form/Form_Validaciones.html' }
            ]
        },
        {
            textoElemento: 'JavaScript',
            subelementos: [
                { texto: 'Subelemento 4.1', url: 'https://ejemplo.com/4.1' },
                { texto: 'Subelemento 4.2', url: 'https://ejemplo.com/4.2' },
                { texto: 'Subelemento 4.3', url: 'https://ejemplo.com/4.3' }
            ]
        }
    ];

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

/*FUNCION ELEGIR PAGINA INTERMEDIA (HTML, CSS, FORMULARIOS, O, JAVASCRIPT) jose */

function eligePaginaIntermedia(tipoPaginaIntermedia) {
    let codigo, elemento;
    switch (tipoPaginaIntermedia) {
        case "HTML":
            codigo = "<a class='borde' href='../../OTRAS/intermedio_html.html'>\n<img class='logonosotros' src='./img/logohtml.png' alt='logo html' title='Click para ir a página Principal de HTML'/><\/a>"
            codigo = codigo + "<a class='borde2' href='../../OTRAS/intermedio_css.html'>\n<img class='logonosotros3' src='./img/logocss.png' alt='logo css' title='Click para ir a página Principal de CSS'/><\/a>"
            codigo = codigo + "<a class='borde2' href='../../OTRAS/intermedio_form.html'><img class='logonosotros3' src='./img/logoform.png' alt='logo form' title='Click para ir a página Principal de FORMULARIO'/><\/a>"
            codigo = codigo + "<a class='borde2' href='../../OTRAS/intermedio_javascript.html'><img class='logonosotros3' src='./img/logojs.png' alt='logo js' title='Click para ir a página Principal de JAVASCRIPT'/></a>"
            elemento = document.getElementById("eliPagInt");
            elemento.innerHTML = codigo;
            break;

        case "CSS":
            codigo = "<a class='borde2' href='../../OTRAS/intermedio_html.html'>\n<img class='logonosotros3' src='../../img/logohtml.png' alt='logo html' title='Click para ir a página Principal de HTML'/><\/a>"
            codigo = codigo + "<a class='borde' href='../../OTRAS/intermedio_css.html'>\n<img class='logonosotros' src='../../img/logocss.png' alt='logo css' title='Click para ir a página Principal de CSS'/><\/a>"
            codigo = codigo + "<a class='borde2' href='../../OTRAS/intermedio_form.html'><img class='logonosotros3' src='../../img/logoform.png' alt='logo form' title='Click para ir a página Principal de FORMULARIO'/><\/a>"
            codigo = codigo + "<a class='borde2' href='../../OTRAS/intermedio_javascript.html'><img class='logonosotros3' src='../../img/logojs.png' alt='logo js' title='Click para ir a página Principal de JAVASCRIPT'/></a>"
            elemento = document.getElementById("eliPagInt");
            elemento.innerHTML = codigo;
            break;

        case "FORMULARIO":
            codigo = "<a class='borde2' href='../../OTRAS/intermedio_html.html'>\n<img class='logonosotros3' src='../../img/logohtml.png' alt='logo html' title='Click para ir a página Principal de HTML'/><\/a>"
            codigo = codigo + "<a class='borde2' href='../../OTRAS/intermedio_css.html'>\n<img class='logonosotros3' src='../../img/logocss.png' alt='logo css'  title='Click para ir a página Principal de CSS'/><\/a>"
            codigo = codigo + "<a class='borde' href='../../OTRAS/intermedio_form.html'><img class='logonosotros' src='../../img/logoform.png' alt='logo form' title='Click para ir a página Principal de FORMULARIO'/><\/a>"
            codigo = codigo + "<a class='borde2' href='../../OTRAS/intermedio_javascript.html'><img class='logonosotros3' src='../../img/logojs.png' alt='logo js' title='Click para ir a página Principal de JAVASCRIPT'/></a>"
            elemento = document.getElementById("eliPagInt");
            elemento.innerHTML = codigo;
            break;

        case "JAVASCRIPT":
            codigo = "<a class='borde2' href='../../OTRAS/intermedio_html.html'>\n<img class='logonosotros3' src='../../img/logohtml.png' alt='logo html' title='Click para ir a página Principal de HTML'/><\/a>"
            codigo = codigo + "<a class='borde2' href='../../OTRAS/intermedio_css.html'>\n<img class='logonosotros3' src='../../img/logocss.png' alt='logo css' title='Click para ir a página Principal de CSS'/><\/a>"
            codigo = codigo + "<a class='borde2' href='../../OTRAS/intermedio_form.html'><img class='logonosotros3' src='../../img/logoform.png' alt='logo form' title='Click para ir a página Principal de FORMULARIO'/><\/a>"
            codigo = codigo + "<a class='borde' href='../../OTRAS/intermedio_javascript.html'><img class='logonosotros' src='../../img/logojs.png' alt='logo js' title='Click para ir a página Principal de JAVASCRIPT'/></a>"
            elemento = document.getElementById("eliPagInt");
            elemento.innerHTML = codigo;
            break;

        default:
            break;
    }
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
