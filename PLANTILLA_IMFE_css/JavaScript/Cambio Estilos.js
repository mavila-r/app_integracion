
function actualizarEstilos(boton) {

    event.preventDefault();
    // FUNCIÓN QUE CAMBIA DE COLOR PRIMARIO SVG

    // Obtener el valor del color seleccionado por el usuario
    var ColorPrimario = document.getElementById('colorInput').value;

    // FUNCIÓN QUE CAMBIA DE COLOR SECUNDARIO SVG

    // Obtener el valor del color seleccionado por el usuario
    var ColorSecundario = document.getElementById('colorInput2').value;

    // FUNCIÓN QUE CAMBIA DE COLOR SECUNDARIO SVG

    // Obtener el valor del color seleccionado por el usuario
    var ColorTerciario = document.getElementById('colorInput3').value;




    // FUNCIÓN PARA BOTON ATENCION

    /*OBTENER RADIO para el icono de la esquina superior derecha*/
    let opcionesA = document.getElementsByName("Atencion"); // Accede a las posibilidades de radio (es un OBJETO en el que están todos los valores)

    let valorAtencion = ""; // Inicializamos variable que almacenará el valor seleccionado. Esto se pondrá tal cuál en la parte correspondiente a la función para seleccionar el icono

    // Iterar sobre los elementos de radio para encontrar el seleccionado
    for (var i = 0; i < opcionesA.length; i++) {
        if (opcionesA[i].checked) {
            // Asignar el valor seleccionado a la variable
            valorAtencion = opcionesA[i].value;
            break;  // Salir del bucle una vez que se encuentra el valor seleccionado
        }
    }

    let AtencionFondo;
    let AtencionFondoH4;
    let AtencionTexto;
    let AtencionFondoCirculo;
    let AtencionTextoH4;

    switch (valorAtencion) {  // El valor seleccionado lo hemos obtenido con el ciclo for anterior. En función de su valor, la variable scriptIntentaloTuMismo tendrá el valor de un script u otro. Esta variable la ponemos en la parte del código correspondiente
        case "AtencionPrimario":
            AtencionFondo = "#F85858";
            AtencionFondoCirculo = "#FFFFFF";
            AtencionStroke = "#A42424";
            AtencionFondoH4 = "#A42424";
            AtencionTexto = "#FFFFFF";
            AtencionTextoH4 = "#FFFFFF";
            break;
        case "AtencionSecundario":
            AtencionFondo = "#FAE73B";
            AtencionFondoCirculo = "#FFFFFF";
            AtencionStroke = "#A65000";
            AtencionFondoH4 = "#FFA800";
            AtencionTexto = "#A65000";
            AtencionTextoH4 = "#FFFFFF";
            break;
        case "AtencionBlanco":
            AtencionFondo = "#FFFFFF";
            AtencionFondoH4 = "#000000";
            AtencionTextoH4 = "#FFFFFF";
            AtencionFondoCirculo = "#000000";
            AtencionTexto = "#000000";
            AtencionStroke = "#FFFFFF"
            break;
        case "AtencionNegro":
            AtencionFondo = "#000000";
            AtencionFondoH4 = "#FFFFFF";
            AtencionTextoH4 = "#000000";
            AtencionFondoCirculo = "#FFFFFF";
            AtencionTexto = "#FFFFFF";
            AtencionStroke = "#000000"
            break;
    }



    // FUNCIÓN PARA BOTON CONOCE MAS

    /*OBTENER RADIO para el icono de la esquina superior derecha*/
    let opcionesC = document.getElementsByName("Conoce"); // Accede a las posibilidades de radio (es un OBJETO en el que están todos los valores)

    let valorConoce = ""; // Inicializamos variable que almacenará el valor seleccionado. Esto se pondrá tal cuál en la parte correspondiente a la función para seleccionar el icono

    // Iterar sobre los elementos de radio para encontrar el seleccionado
    for (var i = 0; i < opcionesC.length; i++) {
        if (opcionesC[i].checked) {
            // Asignar el valor seleccionado a la variable
            valorConoce = opcionesC[i].value;
            break;  // Salir del bucle una vez que se encuentra el valor seleccionado
        }
    }

    switch (valorConoce) {  // El valor seleccionado lo hemos obtenido con el ciclo for anterior. En función de su valor, la variable scriptIntentaloTuMismo tendrá el valor de un script u otro. Esta variable la ponemos en la parte del código correspondiente
        case "ConocePrimario":
            ConoceFondo = "#54D8D0";
            ConoceCristal = "#207A75";
            ConoceCristalFill = "#FFFFFF";
            ConoceFilamento = "#207A75";
            ConoceRoscaFill = "#CDFDFA";
            ConoceRoscaStroke = "#207A75";
            ConoceTexto = "#FFFFFF";
            ConoceFondoH4 = "#207A75";
            ConoceTextoH4 = "#FFFFFF";

            break;
        case "ConoceSecundario":
            ConoceFondo = "#FF8C93";
            ConoceCristal = "#A24349";
            ConoceCristalFill = "#FFFFFF";
            ConoceFilamento = "#A24349";
            ConoceRoscaFill = "#FFD3D3";
            ConoceRoscaStroke = "#A24349";
            ConoceTexto = "#FFFFFF";
            ConoceFondoH4 = "#A24349";
            ConoceTextoH4 = "#FFFFFF";
            break;
        case "ConoceBlanco":
            ConoceFondo = "#FFFFFF";
            ConoceCristal = "#FFFFFF";
            ConoceCristalFill = "#000000";
            ConoceFilamento = "#FFFFFF";
            ConoceRoscaFill = "#000000";
            ConoceRoscaStroke = "#FFFFFF";
            ConoceTexto = "#000000";
            ConoceFondoH4 = "#000000";
            ConoceTextoH4 = "#FFFFFF";
            break;
        case "ConoceNegro":
            ConoceFondo = "#000000";
            ConoceCristal = "#000000";
            ConoceCristalFill = "#FFFFFF";
            ConoceFilamento = "#000000";
            ConoceRoscaFill = "#FFFFFF";
            ConoceRoscaStroke = "#000000";
            ConoceTexto = "#FFFFFF";
            ConoceFondoH4 = "#FFFFFF";
            ConoceTextoH4 = "#000000";
            break;
    }

    // FUNCIÓN PARA BOTON PONTE A PRUEBA

    /*OBTENER RADIO para el icono de la esquina superior derecha*/
    let opcionesP = document.getElementsByName("Prueba"); // Accede a las posibilidades de radio (es un OBJETO en el que están todos los valores)

    let valorPrueba = ""; // Inicializamos variable que almacenará el valor seleccionado. Esto se pondrá tal cuál en la parte correspondiente a la función para seleccionar el icono

    // Iterar sobre los elementos de radio para encontrar el seleccionado
    for (var i = 0; i < opcionesP.length; i++) {
        if (opcionesP[i].checked) {
            // Asignar el valor seleccionado a la variable
            valorPrueba = opcionesP[i].value;
            break;  // Salir del bucle una vez que se encuentra el valor seleccionado
        }
    }

    switch (valorPrueba) {  // El valor seleccionado lo hemos obtenido con el ciclo for anterior. En función de su valor, la variable scriptIntentaloTuMismo tendrá el valor de un script u otro. Esta variable la ponemos en la parte del código correspondiente
        case "PruebaPrimario":
            PruebaFondo = "#409A4E";
            PruebaCable = "#1C6227";
            PruebaRatonFill = "#FFFFFF";
            PruebaRatonStroke = "#1C6227";
            PruebaRuedaFill = "#C3DFC8";
            PruebaRuedaStroke = "#1C6227";
            PruebaTexto = "#FFFFFF";
            PruebaFondoH4 = "#1C6227";
            PruebaTextoH4 = "#FFFFFF";
            break;
        case "PruebaSecundario":
            PruebaFondo = "#559CDE";
            PruebaCable = "#1B4B77";
            PruebaRatonFill = "#FFFFFF";
            PruebaRatonStroke = "#1B4B77";
            PruebaRuedaFill = "#B2DAFF";
            PruebaRuedaStroke = "#1B4B77";
            PruebaTexto = "#FFFFFF";
            PruebaFondoH4 = "#1B4B77";
            PruebaTextoH4 = "#FFFFFF";
            break;
        case "PruebaBlanco":
            PruebaFondo = "#FFFFFF";
            PruebaCable = "#000000";
            PruebaRatonFill = "#000000";
            PruebaRatonStroke = "#FFFFFF";
            PruebaRuedaFill = "#000000";
            PruebaRuedaStroke = "#FFFFFF";
            PruebaTexto = "#000000";
            PruebaFondoH4 = "#000000";
            PruebaTextoH4 = "#FFFFFF";
            break;
        case "PruebaNegro":
            PruebaFondo = "#000000";
            PruebaCable = "#FFFFFF";
            PruebaRatonFill = "#FFFFFF";
            PruebaRatonStroke = "#000000";
            PruebaRuedaFill = "#FFFFFF";
            PruebaRuedaStroke = "#000000";
            PruebaTexto = "#FFFFFF";
            PruebaFondoH4 = "#FFFFFF";
            PruebaTextoH4 = "#000000";
            break;
    }

    /*Estilo de fuente*/

    let opcionesE = document.getElementsByName("EstiloFuente"); // Accede a las posibilidades de radio (es un OBJETO en el que están todos los valores)

    let valorEstilo = ""; // Inicializamos variable que almacenará el valor seleccionado. Esto se pondrá tal cuál en la parte correspondiente a la función para seleccionar el icono

    // Iterar sobre los elementos de radio para encontrar el seleccionado
    for (var i = 0; i < opcionesE.length; i++) {
        if (opcionesE[i].checked) {
            // Asignar el valor seleccionado a la variable
            valorEstilo = opcionesE[i].value;
            break;  // Salir del bucle una vez que se encuentra el valor seleccionado
        }
    }

    let serifa;

    switch (valorEstilo) {  // El valor seleccionado lo hemos obtenido con el ciclo for anterior. En función de su valor, la variable scriptIntentaloTuMismo tendrá el valor de un script u otro. Esta variable la ponemos en la parte del código correspondiente
        case "ConSerifa":
            serifa = "Cambria ,serif";

            break;
        case "SinSerifa":
            serifa = "Candara, sans-serif";
            break;
    }




    var nuevoCSS = `
    body {
        color: ${ColorPrimario};
        background-color: ${ColorTerciario};
        margin: 0;
        font-family: ${serifa};
        
    }
    
    /* FIN BODY */
    
    /* BOTON INTENTALO TU MISMO */
    
    .display {
        display: block;
        /* Poner a none para que no aparezcan estos botones en la página */
        padding: 15px;
        background-color: ${ColorPrimario};
        border: 2px gray outset;
        font-size: 18px;
        color: ${ColorSecundario};
        border-radius: 5px;
        margin-top: 5px;
        clear: left;
        cursor: pointer;
    }
    
    /* FIN BOTON INTENTALO TU MISMO */
    
    /* DIV PADRE (COGE TODO) */
    
    .padre {
        display: flex;
        align-items: flex-start;
        height: auto;
        max-width: 1440px;
        margin: auto;
    }
    
    /* FIN DIV PADRE (COGE TODO) */
    
    /* MAIN (CUERPO PAGINA) */
    
    .main {
        width: 100%;
        padding: 25px;
    }
    
    .estilo_pre {
        background-color: ${ColorTerciario};
        color: ${ColorPrimario};
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }
    
    /* FIN MAIN (CUERPO PAGINA) */
    
    /* TÍTULO PRINCIPAL DE LA PÁGINA */
    
    .tituloprincipal {
        text-align: center;
    }
    
    /* INDICE */
    
    .indice {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        overflow: auto;
    }
    
    .indice ul {
        list-style-type: decimal;
    }
    
    .indicecolor {
        color: ${ColorPrimario};
    }
    
    /* FIN INDICE */
    
    /* PARA QUE H2 SALGA CORRECTO AL IR DESDE EL INDICE */
    
    h2:target::before {
        content: "";
        display: block;
        height: 90px;
        margin: -90px 0 0;
    }
    
    /* FIN PARA QUE H2 SALGA CORRECTO AL IR DESDE EL INDICE */
    
    /* PEDAGOGICA Y REFERENCIA */
    
    .pedagogica {
        border: 2px solid ${ColorPrimario};
        width: auto;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        overflow: auto;
        padding: 10px;
    }
    
    .resumen {
        border: 2px solid ${ColorPrimario};
        width: auto;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        overflow: auto;
        padding: 10px;
        font-weight: bold;
        cursor: pointer;
    }
    
    .resumen p {
        font-weight: normal;
        cursor: auto;
    }
    
    .referencia {
        border: 2px solid ${ColorPrimario};
        width: auto;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        overflow: auto;
        padding: 10px;
        justify-content: baseline;
    }
    
    /* FIN PEDAGOCIA Y REFERENCIA */
    
    /* EJEMPLOS DE RESULTADO (IMAGENES Y CODIGO) */
    
    .contenedor {
        border: 3px solid ${ColorPrimario};
        width: 100%;
        height: 350px;
        display: flex;
        flex-flow: row wrap;
    }
    
    code {
        display: block;
        padding: 20px;
        background-color: ${ColorPrimario};
        color: ${ColorSecundario};
        width: 100%;
        height: 310px;
        overflow: auto;
    }
    
    .codigo {
        width: 30%;
        height: 350px;
        display: flex;
        flex-flow: row wrap;
    }
    
    .resultado {
        width: 68%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 2px;
        flex-direction: column;
        height: 350px;
        overflow: auto;
    }
    
    .img {
        display: flex;
        flex-flow: row wrap;
        height: auto;
        width: 100%;
        margin: 2px;
        max-width: 350px;
        max-height: 350px;
        overflow: auto;
    }
    
    /* FIN EJEMPLOS DE RESULTADO (IMAGENES Y CODIGO) */
    
    /* FLECHAS */
    
    .flecha {
        position: fixed;
        right: 0.5%;
        bottom: 0.5%;
    }
    
    .flechaizq {
        position: fixed;
        left: 0.5%;
        top: 40%;
    }
    
    .flechader {
        position: fixed;
        right: 0.5%;
        top: 40%;
    }
    
    /* FIN FLECHAS */
    
    /* PIE PAGINA */
    
    .pie {
        background-color: ${ColorTerciario};
        width: 100%;
        margin-top: 20px;
        border: 2px solid ${ColorPrimario};
        display: flex;
    }
    
    .formulario {
        display: flex;
        width: 50%;
    }
    
    .formulario input:focus {
        outline: 0;
        border: 1px solid ${ColorPrimario};
    }
    
    .formulario textarea:focus {
        outline: 0;
        border: 1px solid ${ColorPrimario};
    }
    
    .sobrenosotros {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
    }
    
    p.blanco {
        color: ${ColorPrimario};
        font-size: 23px;
        line-height: auto;
        font-weight: bold;
    }
    
    .sobrenosotros a {
        text-decoration: none;
    }
    
    p.blanco:hover {
        opacity: 0.8;
    }
    
    .redes{
        display: flex;
    }
    .facebook:hover {
        opacity: 0.6;
    }
    
    .twitter:hover {
        opacity: 0.6;
    }
    
    .youtube:hover {
        opacity: 0.6;
    }
    
    .blog:hover {
        opacity: 0.6;
    }
    
    .logonosotros2 {
        max-height: 100%;
        height: auto;
        object-fit: cover;
        max-width: 80px;
        width: auto;
    }
    
    /* Politicas */
    
    .divpoliticas {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        margin-top: -35px;
        margin-right: 5%;
    }
    
    ul.politicas li {
        display: inline;
    }
    
    p.cookies {
        display: inline;
        color: ${ColorPrimario};
        font-size: 13px;
    }
    
    .cookies a {
        text-decoration: none;
    }
    
    p.cookies:hover {
        opacity: 0.8;
    }
    
    /* Fin políticas */
    
    /* Copyright */
    
    .divcopyright {
        display: flex;
        font-size: 13px;
    }
    
    .copyright a {
        text-decoration: none;
        color: ${ColorPrimario};
    }
    
    /* Fin copyright */
    
    /* TODAS LAS PAGINAS DE POLITICAS */
    
    .paginapoliticas {
        border: 2px solid ${ColorPrimario};
        padding: 10px;
        width: auto;
    }
    
    .fueracuadro {
        text-align: center;
    }
    
    .logopoliticas {
        width: 70px;
        height: 70px;
    }
    
    .fotogrupo {
        width: 500px;
        height: 300px;
        border: 2px solid ${ColorPrimario};
    }
    
    /* FIN TODAS LAS PAGINAS DE POLITICAS */
    
    /* FIN PIE PAGINA */
    
    /* DIV OVERLAP-GROUP (COGE TODO) */
    
    .overlap-group {
        align-items: center;
        background-color: ${ColorSecundario};
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 5px 15px;
        margin: auto;
        width: 90%;
    }
    
    /* FIN DIV OVERLAP-GROUP (COGE TODO) */
    
    /* HEADER */
    
    #header {
        display: flex;
        justify-content: space-between;
        width: 102%;
        align-items: center;
        position: sticky;
        background-color: ${ColorSecundario};
        top: 0;
        z-index: 1;
        max-height: 20%;
    }
    
    #header div {
        display: flex;
    }
    
    .ayuntamiento {
        max-height: 100%;
        height: auto;
        object-fit: cover;
        max-width: 214px;
        width: auto;
    }
    
    .imfe {
        max-height: 80px;
        height: auto;
        margin-left: 6px;
        object-fit: cover;
        width: auto;
        max-width: 174px;
    }
    
    .logonosotros {
        max-height: 100%;
        height: auto;
        object-fit: cover;
        max-width: 80px;
        width: auto;
    }
    
    .logonosotros4 {
        max-height: 100%;
        height: auto;
        object-fit: cover;
        max-width: 80px;
        width: auto;
    }
    
    .logonosotros3 {
        max-height: 100%;
        height: 50px;
        object-fit: cover;
        max-width: 80px;
        width: 50px;
    }
    
    .logo_bajado {
        position: relative;
        top: 10px;
    }
    
    /* FIN HEADER */
    
    /* IMAGENES CONOCE MAS, ATENCION, PRUEBA */
    
    .img3 {
        width: 40px;
        height: 40px;
        border-radius: 5px;
    }
    
    .cuadroflex {
        display: flex;
    }
    
    /* CONOCE MAS */
    
    .cuadroext {
        width: 40px;
        margin-right: 5px;
    }
    
    .cuadro {
        width: 250px;
        height: 250px;
        background-color: ${ConoceFondo};
        color: ${ConoceTexto};
        display: none;
        /* Oculta el cuadro inicialmente */
        font-size: 14px;
        border: 3px outset ${ColorTerciario};
        border-radius: 5px;
    }
    
    .cuadro h4 {
        position: relative;
        top: -27px;
        background-color: ${ConoceFondoH4};
        height: 10%;
        font-size: 20px;
        text-align: center;
        padding: 3px;
        color: ${ConoceTextoH4};
    }
    
    .cuadro p {
        position: relative;
        top: -30px;
        text-align: justify;
        margin: 0px 10px;
    }
    
    /* Muestra el cuadro cuando se pasa el ratón sobre el contenedor */
    .cuadroext:hover .cuadro, .cuadro.visible {
        display: block;
        overflow: auto;
    }
    
    /* FIN CONOCE MAS */
    
    /* ATENCION */
    
    .cuadroext2 {
        width: 40px;
        margin-right: 5px;
    }
    
    .cuadro2 {
        width: 250px;
        height: 250px;
        background-color: ${AtencionFondo};
        color: ${AtencionTexto};
        display: none;
        /* Oculta el cuadro inicialmente */
        font-size: 14px;
        border: 3px outset ${ColorTerciario};
        border-radius: 5px;
    }
    
    .cuadro2 h4 {
        position: relative;
        top: -27px;
        background-color: ${AtencionFondoH4};
        height: 10%;
        font-size: 20px;
        text-align: center;
        padding: 3px;
        color: ${AtencionTextoH4};
    }
    
    .cuadro2 p {
        position: relative;
        top: -30px;
        text-align: justify;
        margin: 0px 10px;
    }
    
    /* Muestra el cuadro cuando se pasa el ratón sobre el contenedor */
    .cuadroext2:hover .cuadro2, .cuadro2.visible {
        display: block;
        overflow: auto;
    }
    
    /* FIN ATENCION */
    
    /* PRUEBA ESTO */
    
    .cuadroext3 {
        width: 40px;
        margin-right: 5px;
    }
    
    .cuadro3 {
        width: 250px;
        height: 250px;
        background-color: ${PruebaFondo};
        color: ${PruebaTexto};
        display: none;
        /* Oculta el cuadro inicialmente */
        font-size: 14px;
        border: 3px outset ${ColorTerciario};
        border-radius: 5px;
    }
    
    .cuadro3 h4 {
        position: relative;
        top: -27px;
        background-color: ${PruebaFondoH4};
        height: 10%;
        font-size: 20px;
        text-align: center;
        padding: 3px;
        color: ${PruebaTextoH4};
    }
    
    .cuadro3 p {
        position: relative;
        top: -30px;
        text-align: justify;
        margin: 0px 10px;
    }
    
    /* Muestra el cuadro cuando se pasa el ratón sobre el contenedor */
    .cuadroext3:hover .cuadro3, .cuadro3.visible {
        display: block;
        overflow: auto;
    }
    
    /* FIN PRUEBA ESTO */
    
    /* BORDE LOGO */
    
    .borde {
        border: 3px solid ${ColorPrimario};
        border-radius: 5px;
        padding: 10px;
    }
    
    .borde2 {
        padding: 10px;
    }
    
    /* FIN BORDE LOGO */
    
    /* MENU DESPLEGABLE */
    
    .menu {
        align-self: flex-start;
        height: 60px;
        margin-left: 9px;
        width: 60px;
    }
    
    .abrir {
        text-align: center;
        text-decoration: none;
        margin: auto;
    }
    
    .abrir pre {
        text-align: center;
        margin-top: -12px;
        color: ${ColorPrimario};
        font-size: 18px;
        font-weight: bold;
    }
    
    .desplegable-abierto {
        z-index: 3;
        display: flex;
        flex-direction: column;
        background-color: ${ColorPrimario};
        width: 30%;
        position: fixed;
        right: 0;
        top: 0px;
        height: 100%;
        color: ${ColorSecundario};
        font-size: 24px;
        opacity: 1;
    }
    
    .desplegable {
        display: flex;
        flex-direction: column;
        background-color: ${ColorPrimario};
        width: 30%;
        position: absolute;
        right: 0;
        top: 0px;
        z-index: -1;
        height: 100%;
        color: ${ColorSecundario};
        font-size: 24px;
        opacity: 0;
    }
    
    .x {
        max-height: 100%;
        height: auto;
        object-fit: cover;
        width: auto;
    }
    
    .content-menu {
        margin: 0 auto;
        width: 80%;
        max-height: 15%;
    }
    
    .content-menu form {
        margin-bottom: 20px;
    }
    
    .content-menu label {
        width: 100%;
        height: 30px;
    }
    
    .content-menu input {
        width: 100%;
        height: 30px;
    }
    
    .iconos {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        max-height: 20%;
    }
    
    .iconos div {
        display: flex;
        margin: 10px;
    }
    
    #miLista {
        /*LISTA COMPLETA Y ELEMENTOS PRINCIPALES*/
        background-color: ${ColorPrimario};
        color: ${ColorSecundario};
        cursor: pointer;
        overflow: auto;
        display: flex;
        /* Oculta la lista desordenada por defecto */
        padding-left: 20px;
        /* Añade un poco de sangría a la lista */
        list-style-type: none;
        font-weight: bolder;
        margin-bottom: 20px;
        letter-spacing: 2px;
        margin-left: 45px;
        flex-direction: column;
    }
    
    #miLista ul li a {
        /*ENLACES DE LA SUBLISTA*/
        color: ${ColorSecundario};
        text-decoration: none;
    }
    
    #miLista ul li {
        /*SUBLISTA CON SUS ELEMENTOS*/
        color: ${ColorSecundario};
        background-color: ${ColorPrimario};
        font-weight: normal;
        list-style-type: none;
    }
    
    #miLista li {
        margin-bottom: 5px;
    }
    
    /* FIN MENU DESPLEGABLE */
    
    @media only screen and (max-width:767px) {
    
        /* HEADER */
    
        /*.imfe {
            max-height: 84px;
            height: auto;
            margin-left: 6px;
            object-fit: cover;
            width: auto;
            max-width: 90%;
        }
    
        .ayuntamiento {
            max-height: 84px;
            height: auto;
            object-fit: cover;
            max-width: 90%;
            width: auto;
        }*/
    
        /* FIN HEADER */
    
        /* MENU DESPLEGABLE */
    
        .desplegable {
            width: 70%;
        }
    
        .desplegable-abierto {
            width: 70%;
        }
    
        /*RESPONSIVE BUSCADOR*/
    
        .close {
            position: absolute;
            top: 10px;
            right: 25px;
            color: #ffffff;
            font-size: 60px;
            font-weight: bold;
            cursor: pointer;
        }
    
        .cuadroExtAyuda {
            display: block;
            text-align: center;
            justify-content: center;
        }
    
        /* FIN MENU DESPLEGABLE */
    
        /*POSICIONAMIENTO ADECUADO DEL ANCLA PARA QUE EL LA CABECERA DE LAS SECCIONES NO QUEDE CUBIERTA POR LA CABECERA DE LA PANTALLA */
        h2:target::before {
            content: "";
            display: block;
            height: 90px;
            margin: -90px 0 0;
        }
    }
    
    @media only screen and (max-width:1300px) {
    
        #cuadroAyuda {
            height: 
    100px;
        }
    }
    
    @media only screen and (max-width:1024px) {
    
        /*POSICIONAMIENTO ADECUADO DEL ANCLA PARA QUE EL LA CABECERA DE LAS SECCIONES NO QUEDE CUBIERTA POR LA CABECERA DE LA PANTALLA */
        h2:target::before {
            content: "";
            display: block;
            height: 90px;
            margin: -90px 0 0;
        }
    }
    
    @media only screen and (max-width:910px) {
    
        /* EJEMPLOS DE RESULTADO (IMAGENES Y CODIGO) */
        
    
    
        /* FIN EJEMPLOS DE RESULTADO (IMAGENES Y CODIGO) */
    
        /* HEADER */
    
        .logonosotros {
            max-height: 100%;
            height: 20px;
            object-fit: cover;
            max-width: 80px;
            width: 20px;
        }
    
        .logonosotros4 {
            max-height: 100%;
            height: 20px;
            object-fit: cover;
            max-width: 80px;
            width: 20px;
            position: absolute;
            top: 30px;
            right: 60px;
        }
    
        .logonosotros3 {
            max-height: 100%;
            height: 20px;
            object-fit: cover;
            max-width: 80px;
            width: 20px;
        }
    
    
        /*RESPONSIVE BUSCADOR*/
    
        .close {
            position: absolute;
            top: 10px;
            right: 25px;
            color: #ffffff;
            font-size: 60px;
            font-weight: bold;
            cursor: pointer;
        }
    
        .cuadroExtAyuda {
            display: block;
            text-align: center;
            justify-content: center;
        }
    
        /* FIN HEADER */
    
    }
    
    @media only screen and (min-width:910px) {
    
        /*RESPONSIVE BUSCADOR*/
    
        .close {
           position: absolute;
           top: 10px;
           right: 25px;
           color: #ffffff;
           font-size: 60px;
           font-weight: bold;
           cursor: pointer;
       }
       .cuadroExtAyuda {
           display: block;
           text-align: center;
           justify-content: center;
       }
    
    }
    
    @media only screen and (min-width:615px) and (max-width: 700px) {
    
        /* HEADER */
    
        #header {
            width: 105%;
        }
    
        .logonosotros {
            max-height: 100%;
            height: 10px;
            object-fit: cover;
            max-width: 80px;
            width: 10px;
        }
    
        .logonosotros4 {
            max-height: 100%;
            height: 10px;
            object-fit: cover;
            max-width: 80px;
            width: 10px;
            position: absolute;
            top: 33.5px;
            right: 30px;
        }
    
        .logonosotros3 {
            max-height: 100%;
            height: 10px;
            object-fit: cover;
            max-width: 80px;
            width: 10px;
        }
    
    
        /*RESPONSIVE BUSCADOR*/
    
        .close {
            position: absolute;
            top: 10px;
            right: 25px;
            color: #ffffff;
            font-size: 60px;
            font-weight: bold;
            cursor: pointer;
        }
        .cuadroExtAyuda {
            display: block;
            text-align: center;
            justify-content: center;
        }
    
    
        /* FIN HEADER */
    
        /* MENU DESPLEGABLE */
    
        .menu {
            align-self: flex-start;
            height: 30px;
            margin-left: 5px;
            width: 30px;
        }
    
        .abrir pre {
            text-align: center;
            margin-top: -11px;
            color: ${ColorPrimario};
            font-size: 9px;
            font-weight: bold;
        }
    
        /* FIN MENU DESPLEGABLE */
    }
    
    @media only screen and (max-width:615px) {
    
        /* HEADER */
    
        .ayuntamiento,
        .imfe{
            max-width: 80px;
        }
        .menu {
            margin-right: 5px;
            max-width: 30px;
        }
        .logonosotros,
        .logonosotros4,
        .logonosotros3,
        .logo_bajado
        {
            max-width: 300%;
        }
    
        .abrir {
            margin-top: -11px;
        }
    
        .abrir pre {
            margin-top: -25px;
            font-size: 0.7em;
        }
    
        #header {
            width: 107%;
            align-items: baseline;
        }
    
        /*.ayuntamiento {
            max-width: 150px;
        }
    
        .imfe {
            max-width: 120px;
        }
    
        .logonosotros,
        .logonosotros4,
        .logonosotros3 {
            max-width: 60px;
            height: auto;
        }*/
    
        /*#header {
            width: 105%;
        }
    
        .logonosotros {
            max-height: 100%;
            height: 10px;
            object-fit: cover;
            max-width: 80px;
            width: 10px;
        }
    
        .logonosotros4 {
            max-height: 100%;
            height: 10px;
            object-fit: cover;
            max-width: 80px;
            width: 10px;
            position: absolute;
            top: 24.5px;
            right: 25px;
        }
    
        .logonosotros3 {
            max-height: 100%;
            height: 10px;
            object-fit: cover;
            max-width: 80px;
            width: 10px;
        }*/
    
        /* FIN HEADER */
    
        /* MENU DESPLEGABLE */
    
        /*.menu {
            width: 40px;
            height: 40px;
        }
    
        .abrir pre {
            font-size: 14px;
        }
    
        .desplegable-abierto,
        .desplegable {
            width: 100%;
        }*/
    
        .content-menu {
            margin: 0 auto;
            width: 70%;
            max-height: 15%;
            font-size: 18px;
        }
    
        .menu2 {
            width: 40px;
            height: 40px;
        }
    
        #miLista {
            font-size: 18px;
        }
    
    
        /*RESPONSIVE BUSCADOR*/
        .close {
            position: absolute;
            top: 13px;
            right: 25px;
            color:  ${ColorSecundario};
            font-size: 60px;
            font-weight: bold;
            cursor: pointer;
        }
    
        .cuadroExtAyuda {
            display: block;
            text-align: center;
            justify-content: center;
            margin-top: 18px;
        }
    
        /* FIN MENU DESPLEGABLE */
    
        /* APARTADO SOBRENOSOTROS FOTO GRUPO */
    
        .fotogrupo {
            width: 230px;
            height: 130px;
            border: 2px solid ${ColorPrimario};
        }
    
        /* FIN APARTADO SOBRENOSOTROS FOTO GRUPO */
    
        /* PIE PAGINA */
    
        .formulario {
            /* display: flex; */
            flex-direction: column;
            margin-bottom: 20px;
        }
    
        .sobrenosotros {
            flex-direction: column;
            width: 100%;
        }
    
        .pie {
            flex-direction: column;
        }
    
        iframe {
            width: 200%;
        }
    
        /* FIN PIE PAGINA */
    
    }
    
    @media only screen and (max-width:412px) {
    
        /* HEADER */
    
        .borde {
            border: 3px solid ${ColorPrimario};
            border-radius: 5px;
            padding: 10px;
            max-height: 20px;
        }
    
        .ayuntamiento,
        .imfe {
            max-width: 70px;
        }
        .menu {
            max-width: 30px;
        }
        .logonosotros,
        .logonosotros4,
        .logonosotros3,
        .logo_bajado {
            max-width: 300%;
        }
    
        .logonosotros3_index {
            width: 40px;
            height: 40px;
        }
    
        .abrir {
            margin-top: -11px;
        }
    
        #header {
            align-items: baseline;
        }
    
        .ayuntamiento_index,
        .imfe_index {
            max-width: 130px;
        }
    
        /*.ayuntamiento {
            max-width: 100px;
        }
    
        .imfe {
            max-width: 90px;
        }*/
    
        /*.logonosotros,
        .logonosotros4,
        .logonosotros3 {
            max-width: 40px;
            height: auto;
        }*/
    
        /*.imfe {
            max-height: 25%;
            object-fit: cover;
            max-width: 300%;
        }
    
        .ayuntamiento {
            max-height: 25%;
            object-fit: cover;
            max-width: 300%;
        }
    
        #header {
            width: 105%;
        }
    
        .logonosotros {
            max-height: 25%;
            height: auto;
            object-fit: cover;
            max-width: 50px;
            width: auto;
        }
    
        .logonosotros4 {
            max-height: 25%;
            height: auto;
            object-fit: cover;
            max-width: 50px;
            width: auto;
            position: absolute;
            top: 24.5px;
            right: 25px;
        }
    
        .logonosotros3 {
            max-height: 25%;
            height: auto;
            object-fit: cover;
            max-width: 50px;
            width: auto;
        }*/
    
        /* MENU DESPLEGABLE */
    
        .desplegable {
            width: 100%;
            text-align: center;
        }
    
        .desplegable-abierto {
            width: 100%;
        }
    
        .content-menu form {
            text-align: left;
        }
    
        /*RESPONSIVE BUSCADOR*/
    
        .close {
            position: absolute;
            top: 13px;
            right: 25px;
            color: ${ColorSecundario};
            font-size: 60px;
            font-weight: bold;
            cursor: pointer;
        }
    
        .cuadroExtAyuda {
            display: block;
            text-align: center;
            justify-content: center;
            margin-top: 18px;
        }
    
        /* FIN MENU DESPLEGABLE */
    
        .divpoliticas {
            width: auto;
        }
    
        /* PIE PAGINA */
    
        .formulario {
            /* display: flex; */
            flex-direction: column;
            margin-bottom: 20px;
        }
    
        .sobrenosotros {
            flex-direction: column;
            width: 100%;
        }
    
        .pie {
            flex-direction: column;
        }
    
        iframe {
            width: 200%;
        }
    
        /* FIN PIE PAGINA */
    
    
    }
    
    /* FIN RESPONSIVE */
    
    /* INICIO BUSCADOR */
    
    /*ESTILOS BUSCADOR*/
    
    /* Estilos para el modal */
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
    }
    
    .modal-content {
        background-color: #fefefe;
        padding: 35px;
        width: 80%;
        max-width: 600px;
        text-align: center;
        margin: auto;
        max-height: 40%;
        overflow: scroll;
    }
    
    .modal a {
        color: ${ColorPrimario};
        font-weight: bold;
        text-decoration: none;
    
    }
    
    .modal a:hover {
        text-decoration: underline;
    }
    
    /*Estilo X cierre búsqueda*/
    /*
    .close {
        position: absolute;
        top: 10px;
        right: 25px;
        color: #ffffff;
        font-size: 60px;
        font-weight: bold;
        cursor: pointer;
    }
    */
    
    /*Estilo mensaje error búsqueda*/
    #mensajeSinResultados {
        color: red;
        font-weight: bold;
        font-size: 14pt;
    }
    
    /*Estilo botón buscador*/
    .botonBuscador {
        background-color: ${ColorSecundario};
        border-radius: 5px;
        color: ${ColorPrimario};
        border-color: ${ColorPrimario};
        font-weight: bold;
        font-size: 14pt;
        width: auto;
    }
    
    /*Estilo Ayuda Buscador*/
    #cuadroAyuda {
        /* float: right; */
        width: 200px;
        /* height: 90px; */
        background-color: ${ColorTerciario};
        color: ${ColorSecundario};
        display: none;
        /* Oculta el cuadro inicialmente */
        font-size: 14px;
        border: 3px outset ${ColorTerciario};
        border-radius: 5px;
        padding: 5px;
        z-index: 10;
        text-align: justify;
        overflow: auto;
        margin: auto;
        /* position: relative;
        left: 20%;
        overflow:scroll;    */
    }
    
    .cuadroExtAyuda {
        display: block;
        text-align: center;
        justify-content: center;
    }
    
    #cuadroAyuda ul {
        padding: 0px 20px;
    }
    
    #cuadroAyuda p {
        position: relative;
        background-color: ${ColorPrimario};
        /* height: 10%; */
        font-size: 20px;
        text-align: center;
        border: 1px outset ${ColorSecundario};
        padding: 3px;
        margin: 0;
    }
    
    /*Estilo imagen ayuda*/
    .imgInfo {
        position: relative;
        top: 5px;
        width: 20px;
        height: 20px;
    
    }
    
    /* FIN BUSCADOR */
    
    
    
    /* INICIO PLANTILLA INTERMEDIA */
    
    .flex-container {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 0;
        margin-top: 15px;
        padding: 10px 30px 30px;
        border: 5px solid ${ColorPrimario};
        border-style: solid none solid none;
    }
    
    .text {
        line-height: normal;
        text-align: center;
        align-self: stretch;
        letter-spacing: 0;
    }
    
    .titulo1 {
        font-family: ${serifa};
        font-size: 48px;
        font-weight: 800;
        font-style: normal;
    }
    
    .titulo2 {
        font-family: ${serifa};
        font-size: 26px;
        font-weight: 700;
    }
    
    .line-container {
        margin: 0px auto;
        text-align: center;
    
    }
    
    .line {
        max-width: 100%;
        width: auto;
        height: auto;
    }
    
    .group-container {
        display: flex;
        justify-content: space-around;
        margin: 84px auto;
        width: 100%;
        flex-wrap: wrap;
        gap: 15px;
    }
    
    .group-container a {
        text-decoration: none;
    }
    
    .group {
        align-items: flex-start;
        display: flex;
        min-width: 190px;
        scale: 1;
        transition: scale 0.7s ease-in-out;
    }
    
    .group:hover {
        scale: 1.1;
    }
    
    .group:hover .content {
        opacity: 0;
    }
    
    .group:hover .descripcion {
        display: flex;
    }
    
    .group:hover .descripcion1 {
        opacity: 0;
        display: none;
    }
    
    .component-1-4 {
        align-items: flex-start;
        display: flex;
        min-height: 200px;
        height: auto;
        width: 200px;
    }
    
    .descripcion {
        text-align: center;
        color: ${ColorPrimario};
        font-family: ${serifa};
        font-size: 24px;
        justify-content: center;
        align-items: center;
        font-weight: 800;
        font-style: normal;
        letter-spacing: 0;
        line-height: normal;
        min-height: 200px;
        height: auto;
        width: 190px;
        word-break: break-word;
        display: none;
        margin: 10px;
    }
    
    .descripcion1 {
        display: flex;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        font-family: ${serifa};
        font-size: 24px;
        justify-content: center;
        align-items: center;
        font-weight: 800;
        font-style: normal;
        letter-spacing: 0;
        line-height: normal;
        min-height: 200px;
        height: auto;
        width: 190px;
        word-break: break-word;
        margin: 10px;
        z-index: 2;
    }
    
    .content {
        z-index: 2;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        align-items: center;
        opacity: 1;
        transition: opacity 0.7s ease-in-out;
    }
    
    .content img {
        width: 100%;
    }
    
    .html {
        background-color: rgba(255, 178, 61, 1);
        padding-top: 5px;
    }
    
    .html:hover {
        background-color: rgba(255, 178, 61, 0.3);
    }
    
    .css {
        background-color: rgba(82, 113, 255, 1);
        padding-top: 5px;
    }
    
    .css:hover {
        background-color: rgba(82, 113, 255, 0.3);
    }
    
    .form {
        background-color: #b68ed6;
    }
    
    .form:hover {
        background-color: rgba(182, 143, 214, 0.3);
    }
    
    .js {
        background-color: #ffde59;
    }
    
    .js:hover {
        background-color: rgba(255, 221, 87, 0.3);
    }
    
    .descripcion2 {
        text-align: center;
        color: ${ColorPrimario};
        font-family: ${serifa};
        font-size: 24px;
        justify-content: center;
        align-items: center;
        font-weight: 800;
        font-style: normal;
        letter-spacing: 0;
        line-height: normal;
        min-height: 200px;
        height: auto;
        width: 190px;
        word-break: break-word;
        display: none;
        margin: 10px;
    }
    
    .group:hover .descripcion2 {
        display: flex;
    }
    
    
    @media only screen and (max-width:430px) {
        .titulo1 {
            font-size: 28px;
        }
    
        .titulo2 {
            font-family: ${serifa};
            font-size: 16px;
            font-weight: 700;
        }
    
        .resultado img {
          /* display: none; */
          
        }
    }
    
    @media only screen and (max-width:767px) {
    
        .titulo1 {
            font-size: 36px;
        }
    
        .titulo2 {
            font-family: ${serifa};
            font-size: 20px;
            font-weight: 700;
        }
    }
    
    /* FIN PLANTILLA INTERMEDIA */
    
    /*ESTILOS SVG*/
    .svgContainer svg g {
        fill: ${ColorPrimario};
    }
    
    .svgContainer2 svg g {
        fill: ${ColorSecundario};
    }
    
    /*PRUEBA HR COLOR*/
    
    hr{
        border-color: ${ColorPrimario};
    }
    /*PRUEBA a COLOR*/
    a {
        color: ${ColorTerciario};
    }
    
    /*PRUEBAS BOTON*/
    .AtencionFondo{
        fill: ${AtencionFondo};
    }
    
    .AtencionCirculo{
        fill: ${AtencionFondoCirculo};
        stroke: ${AtencionStroke};
    }
    
    .AtencionPaloFill{
        fill: ${AtencionFondo};
    }
    
    .AtencionPaloStroke{
        stroke: ${AtencionStroke};
         stroke-width: 12;
    }
    .AtencionExclamCirculo{
        fill: ${AtencionFondo};
        stroke: ${AtencionStroke};
        stroke-width: 12;
    }
    
    
    /*BOTON CONOCE MAS*/
    .ConoceFondo{
        fill: ${ConoceFondo};
    }
    
    .ConoceCristal{
        fill: ${ConoceCristalFill}; 
        stroke: ${ConoceCristal};
        stroke-width: 12;
    }
    
    .ConoceFilamento{
        stroke: ${ConoceFilamento};
        stroke-width: 12;
    }
    
    .ConoceRosca{
        fill: ${ConoceRoscaFill};
        stroke: ${ConoceRoscaStroke};
        stroke-width: 12;
    }
    
/*BOTON PONTE A PRUEBA*/

.PruebaFondo{
    fill: ${PruebaFondo};
}
.PruebaCable{
    stroke: ${PruebaCable};
    stroke-width: 12;
}
.PruebaRaton{
    fill: ${PruebaRatonFill};
    stroke: ${PruebaRatonStroke};
    stroke-width: 12;
}
.PruebaLinea{
    stroke: ${PruebaRatonStroke};
    stroke-width: 12;
}
.PruebaRueda{
    fill: ${PruebaRuedaFill};
    stroke: ${PruebaRuedaStroke};
    stroke-width: 12;
}

.TemaRojo{
    background-color: #FE0000;
    color: #FFFFFF;
}
.TemaRojo:hover{
    background-color: #FFC6C6;
    color: #FE0000;
}
.TemaNaranja{
    background-color: #FF9901;
    color: #FFFFFF;
}
.TemaNaranja:hover{
    background-color: #FFE2B7;
    color: #FF9901;
}
.TemaAmarillo{
    background-color: #F9D101;
    color: #FFFFFF;
}
.TemaAmarillo:hover{
    background-color: #FFF3B4;
    color: #F9D101;
}
.TemaVerde{
    background-color: #60E53F;
    color: #FFFFFF;
}
.TemaVerde:hover{
    background-color: #CBFFBE;
    color: #60E53F;
}
.TemaTurquesa{
    background-color: #00D2A0;
    color: #FFFFFF;
}
.TemaTurquesa:hover{
    background-color: #C7F9ED;
    color: #00D2A0;
}
.TemaCeleste{
    background-color: #00C5E0;
    color: #FFFFFF;
}
.TemaCeleste:hover{
    background-color: #C9F8FF;
    color: #00C5E0;
}
.TemaAzul{
    background-color: #005AE0;
    color: #FFFFFF;
}
.TemaAzul:hover{
    background-color: #C7DDFF;
    color: #005AE0;
}
.TemaMorado{
    background-color: #AF1AF4;
    color: #FFFFFF;
}
.TemaMorado:hover{
    background-color: #EBC0FF;
    color: #AF1AF4;
}
.TemaRosa{
    background-color: #F01AF4;
    color: #FFFFFF;
}
.TemaRosa:hover{
    background-color: #FECCFF;
    color: #F01AF4;
}
.casita{
    color: ${ColorPrimario};
}

table {
    margin-top: -15px; /*Importante para que las tablas queden bien posicionadas, ya que eliminamos los saltos de línea*/
}

.logonosotros3{
    justify-content: center;
    align-items: center;
}

#eliPagInt a{
    text-decoration: none;
}

.resumen li{
    font-weight: 100;
}

h2:nth-of-type(2) {
    margin-bottom:-15px;
}
`;
    nuevoHTML = `<!DOCTYPE html>
<html lang="es-ES">

<head>
    <meta charset="utf-8">
    <title>Vista Previa Estilos</title>

    <meta name="description" content="Tutorial HTML, CSS, JavaScript y Formularios">
    <meta name="title" content="Confección y publicación de páginas web">
    <meta name="keywords" content="Tutorial de HTML, CSS, JavaScript y Formularios">
    <meta name="author" content="IMFE">

    <link rel="icon" type="image/png" href="../../img/logo.svg">
    <link rel="icon" type="image/gif" href="../../img/logo.svg">
    <link rel="icon" type="image/vnd.microsoft.icon" href="../../img/logo.svg">

    <link rel="stylesheet" href="../../CSS/tutorial.css">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./JS/MenuTuto.js"></script>
    <script src="../../JS/intentalotumismo-html.js"></script>
   <!-- <script src="../../JS/intentalotumismo-css.js"></script>
    <script src="../../JS/intentalotumismo-formulario.js"></script>
    <script src="../../JS/intentalotumismo-javascript.js"></script> -->
    <script src="https://www.aptussum.org/abririntentalotumismo.js"></script>
    <script> 
    /*variables necesarias para la funcionalidad de intentalotumismo. */
        var referenciaVentana;
        var codigo;
    </script>
    <style>${nuevoCSS}</style>
</head>

<body>

    <!--div class=" padre overlap-group"-->

    <div class="padre overlap-group">

        <!-- header -->

        <div id="header">
            <div>
                <a href="https://www.malaga.eu/">
                    <img class="ayuntamiento" src="../img/logo-imf-1.png" alt="ayuntamiento 1" />
                </a>
                <a href="https://imfe.malaga.eu/">
                    <img class="imfe" src="../img/logo-imfe-ok-2019-1.png" alt="imfe 1" />
                </a>
            </div>
            
            <div id="eliPagInt">
                <script>
                    /*esta funcion dependiendo de la variable tipoPaginaIntermedia pone en la página los logos de HTML, CSS, FORMULARIO, O, CSS.
                      y añade un borde al logo que le indiques, de forma que si estás trajando en el grupo de html debes inicializar su valor a
                      HTML, y si estás en otro grupo de trabajo haces lo mismo pero para tu grupo de trabajo (HTML, CSS, FORMULARIO, O, JAVASCRIPT) */
                    var tipoPaginaIntermedia = "HTML";
                    eligePaginaIntermedia(tipoPaginaIntermedia);
                </script>

                <a href="../../index.html">
                    <img class="logonosotros3 logo_bajado" src="../img/logo.svg" alt="logo grupo" title="Id a pagina principal tutorial" />
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

            <h1 class="tituloprincipal">Introducción a HTML</h1>

            <!-- FIN TITULO PRINCIPAL -->

            <!-- ORIENTACIONES PEDAGOGICAS -->

            <h2>Orientaciones pedagógicas:</h2>
            <div class="pedagogica">
            <p>¡Bienvenido a este tutorial!<br> En esta primera lección te sumergirás en HTML, descubrirás qué es, qué son las etiquetas, cómo funciona y para qué se utiliza.<br> <!-- poner enlace a la pagina web que tenga que ser y en ese enlace poner class=enlacetutorial-->
            <strong>¡Vamos a ello!</strong></p>
            </div>

            <!-- FIN ORIENTACIONES PEDAGOGICAS -->

            <!-- INDICE -->

            <h2>Índice:</h2>
            <div class="indice">
                <ul class="indiceul">
                    <h2>
                        <a href="#titulo1" class="indicecolor">
                            <li>HTML</li>
                        </a>
                        <a href="#titulo2" class="indicecolor">
                            <li>Hipertexto</li>
                        </a>
                        <a href="#titulo3" class="indicecolor">
                            <li>Etiquetas y atributos</li>
                        </a>
                        <a href="#titulo4" class="indicecolor">
                            <li>Index.html</li>
                        </a>
                        <a href="#resumen" class="indicecolor">
                            <li>Resumen</li>
                        </a>
                    </h2>
                </ul>
            </div>

            <!-- FIN INDICE -->

            <hr>

            <!-- Título -->

            <h2 id="titulo1">1. HTML</h2>

            <!-- Fin título -->

            <!-- Descripción -->

            <p> <strong>HyperText Markup Language</strong>, es un lenguaje que nos permite hacer páginas web por medio de etiquetas o elementos, como imágenes,enlaces, vídeos, texto, etc.
                En <strong>HTML</strong> (ahora HTML5) todo elemento se representa por una etiqueta.
                Estas son visualizadas por un navegador web los cuales visualizan e interpretan el documento. 
                
            </p>
            
            <!-- Fin descripción -->

            
 <!-- Título -->
<hr>
 <h2 id="titulo2">2. Hipertexto</h2>

 <!-- Fin título -->

 <!-- Descripción -->

 <p> Hace alusi&oacute;n a los enlaces que se conectan entre s&iacute; en las p&aacute;ginas web, estos son fundamentales. 
    Si vinculamos nuestro contenido a otras p&aacute;ginas creadas por otras personas hace que seamos part&iacute;cipes 
    de la <strong>&ldquo;World Wide Web&rdquo;</strong>(Red Inform&aacute;tica Mundial).<br><br>
    <strong>HTML</strong> (HyperText Markup Language) usa marcas para etiquetar contenidos como texto,
    im&aacute;genes, etc. Estas las muestra en el navegador web.
    Elementos <span class="estilo_pre">&lt;header&gt;</span>, <span class="estilo_pre">&lt;footer&gt;</span>, <span class="estilo_pre">&lt;p&gt;</span>, <span class="estilo_pre">&lt;span&gt;</span>, 
    <span class="estilo_pre">&lt;img&gt;</span>, <span class="estilo_pre">&lt;div&gt;</span>, <span class="estilo_pre">&lt;section&gt;</span> y muchos m&aacute;s.
     <strong>Las etiquetas</strong> consisten en el nombre del elemento entre <span class="estilo_pre">&ldquo;&lt;&rdquo;</span> y <span class="estilo_pre">&ldquo;&gt;&rdquo;</span>, 
    muchas de ellas terminan con <span class="estilo_pre">&ldquo;&lt;/(elemento)&gt;&rdquo;</span>.</p>


<!-- Fin descripción -->


  <!-- Título -->
  <hr>
  <h2 id="titulo3">3. Etiquetas y atributos</h2>

  <!-- Fin título -->
 
  <!-- Descripción -->
 
<p>Una etiqueta constituye un <strong>elemento t&eacute;cnico</strong> que un navegador web
     puede reconocer e interpretar. Contienen atributos que informan
     a los navegadores de lo que deben aplicar a una determinada etiqueta. 
     Las etiquetas <strong>siempre</strong> se escriben en min&uacute;sculas.</p>
  <p>Hay <strong>dos tipos</strong> de etiquetas. Puede haberlas con <strong>cierre</strong>,
     que son la mayor&iacute;a, y <strong>sin cierre</strong> (singleton tags), 
    que no necesitan un fin del marcado. Las etiquetas con cierre tienen como sintaxis 
    <span class="estilo_pre">&lt;tag&gt;</span> <span class="estilo_pre">&lt;/tag&gt;</span>. 
    Las etiquetas singleton pueden <strong>&ldquo;cerrarse&rdquo;</strong>
     en la propia etiqueta de apertura dando como resultado 
    <span class="estilo_pre">&lt;singleton/&gt;</span> para tener m&aacute;s 
    claro que est&aacute; &ldquo;cerrada&rdquo;, aunque este / no es obligatorio, 
    se <strong>recomienda usarlo</strong>. Las singleton no pueden llevar etiqueta de cierre y las etiquetas 
    con cierre no funcionan si no se usa la etiqueta de cierre.</p>
  <p>Las etiquetas pueden anidarse, pero siguen el esquema <strong>LIFO</strong> 
    (Last In First Out), es decir, la primera que se cierra es la &uacute;ltima 
    que se abri&oacute;. Por ejemplo <span class="estilo_pre">&lt;t1&gt;</span> 
     <span class="estilo_pre">&lt;t2&gt;</span>  <span class="estilo_pre">&lt;/t2&gt;</span> 
     <span class="estilo_pre">&lt;/t1&gt;</span>.</p>
  <p>En funci&oacute;n de <strong>la versi&oacute;n de HTML</strong>, pueden variar las etiquetas,
     sin embargo al trabajar siempre en <strong>HTML5</strong>, se usar&aacute;n 
    siempre las mismas. Adem&aacute;s, HTML5 incorpora las <strong>etiquetas sem&aacute;nticas</strong>. 
    Las etiquetas sem&aacute;nticas son etiquetas con su propio significado espec&iacute;fico.</p>
  
  <p>Por ejemplo, <strong>la etiqueta</strong> <span class="estilo_pre">&lt;div&gt;</span> separa los bloques 
    de la p&aacute;gina mediante divisores. En versiones HTML anteriores,
     <strong>la cabecera</strong>, <strong> el cuerpo</strong> y <strong>el pie de p&aacute;gina</strong>
      se separaban con <span class="estilo_pre">&lt;div&gt;</span>,
      pero ahora tienen sus propias etiquetas. Ya se usa, por ejemplo, 
    <span class="estilo_pre">&lt;header&gt;</span>,  <span class="estilo_pre">&lt;body&gt;</span> 
    <span class="estilo_pre">&lt;footer&gt;</span>, <span class="estilo_pre">&lt;main&gt;</span>
    <span class="estilo_pre">&lt;aside&gt;</span>, <span class="estilo_pre">&lt;article&gt;</span>,
    <span class="estilo_pre">&lt;section&gt;</span>, etc.
      Esto facilita la lectura del c&oacute;digo con independencia del navegador que se use 
      ya que el navegador <strong>identifica cada bloque</strong> como lo que es y no como un bloque aleatorio.</p>
  <p></p>
  <p>Dentro de las etiquetas se utiliza un <strong>n&uacute;mero variable de atributos</strong>, y estos a&ntilde;aden funcionalidades a su etiqueta. 
    El valor del atributo se entrecomilla y va seguido de un igual, <strong>siendo la sintaxis</strong> de los de apertura y cierre: <span class="estilo_pre"> &lt;tag 
    atributo=&rdquo;valor&rdquo;&gt;Contenido&lt;/tag&gt;</span> y <strong>los singleton</strong> <span class="estilo_pre">&lt;tag atributo=&rdquo;valor&rdquo;/&gt;</span>. Los atributos 
    siempre van en la <strong>etiqueta de apertura</strong> y se escriben en min&uacute;sculas siempre. Sin embargo, los <strong>valores del atributo</strong> dependen de, 
    por ejemplo, el nombre del archivo, ya que diferencia entre may&uacute;sculas y min&uacute;sculas. </p>
  </p>
 
  <!-- Fin descripción -->
  <p><u>Ejemplo:</u></p>

  <div class="contenedor">

      <!-- Código ejemplo -->

      <div class="codigo">
          <code>
                  <u><b>Código CSS:</b></u><br><br>
                  <p>&lt;html&gt;</p>
                  <p>&lt;head&gt;</p>
                  <p>&lt;/head&gt;</p>
                  <p>&lt;body&gt;</p>
                  <p>&lt;p&gt;Este es un párrafo de ejemplo&lt;/p&gt;</p>
                  <p>&lt;/body&gt;</p>
                  <p>&lt;/html&gt;</p>
              </code>
      </div>

      <!-- Fin código ejemplo -->

      <!-- Imagen ejemplo -->

      <div class="resultado">
          <img class="img" src="../img/texto_parrafo.PNG" alt="Ejemplo etiqueta de párrafo">
      </div>

      <!-- Fin imagen ejemplo -->
  </div>

  <!-- FIN EJEMPLO -->

   <!-- Título -->
<hr>
   <h2 id="titulo4">4. Index.html</h2>

   <!-- Fin título -->

   <!-- Descripción -->

   <p> Se trata de la <strong>página principal</strong> que los servidores van a buscar. Por eso,
     el archivo principal para nuestro <strong>sitio web</strong> debería llamarse así, 
     para que los usuarios puedan buscar la página usando solo 
     el dominio y no todo el título de la página.
   </p>

<!-- CONOCE MAS, ATENCION, PRUEBA ESTO -->

<div class="cuadroflex">

    <!-- Conoce más -->

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
            </svg>        <div class="cuadro">
            <h4>Conoce más...</h4>
            <p>
                <strong>HTML5</strong> es la quinta revisión importante del estándar HTML (<strong>Lenguaje de Marcado de Hipertexto</strong>) utilizado para estructurar el contenido en la web.
                La primera especificación de HTML5 se publicó en <strong>2008</strong>, pero se esperaba que no estuviera completa hasta <strong>2014</strong>. Sin embargo, muchos navegadores adoptaron características de HTML5 antes de que se completara la especificación.
                
            </p>
        </div>
   
    </div>

    <!-- Fin conoce más -->

    <!-- Atención -->

    <div class="cuadroext2">
        <svg class="img3" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="AtencionFondo" width="800" height="800" fill="#FAE73B"/>
            <circle class="AtencionCirculo" cx="400" cy="400" r="322" fill="white" stroke="#9A8B00" stroke-width="12"/>
            <path class="AtencionPaloFill" d="M336.457 140.69C338.133 137.625 341.694 134.751 344.614 132.757C347.481 130.799 350.935 130 354.41 130H399.769H401.231H446.59C450.065 130 453.519 130.799 456.386 132.757C459.306 134.751 462.867 137.625 464.543 140.69C467.028 145.238 467.033 153.262 466.991 155.282C466.985 155.599 466.964 155.912 466.936 156.227L436.249 505.463C435.959 508.765 434.935 511.961 433.25 514.819C431.725 517.406 429.692 519.659 427.272 521.443L426.654 521.899C422.162 525.212 416.722 527 411.136 527H401.231H399.769H389.864C384.278 527 378.838 525.212 374.346 521.899L373.728 521.443C371.308 519.659 369.275 517.406 367.75 514.819C366.065 511.961 365.041 508.765 364.751 505.463L334.064 156.227C334.036 155.912 334.015 155.599 334.009 155.282C333.967 153.262 333.972 145.238 336.457 140.69Z" fill="#FAE73B"/>
            <path class="AtencionPaloStroke" d="M401.231 527H389.864C384.278 527 378.838 525.212 374.346 521.899L373.728 521.443C371.308 519.659 369.275 517.406 367.75 514.819C366.065 511.961 365.041 508.765 364.751 505.463L334.064 156.227C334.036 155.912 334.015 155.599 334.009 155.282C333.967 153.262 333.972 145.238 336.457 140.69C338.133 137.625 341.694 134.751 344.614 132.757C347.481 130.799 350.935 130 354.41 130H401.231M399.769 527H411.136C416.722 527 422.162 525.212 426.654 521.899L427.272 521.443C429.692 519.659 431.725 517.406 433.25 514.819C434.935 511.961 435.959 508.765 436.249 505.463L466.936 156.227C466.964 155.912 466.985 155.599 466.991 155.282C467.033 153.262 467.028 145.238 464.543 140.69C462.867 137.625 459.306 134.751 456.386 132.757C453.519 130.799 450.065 130 446.59 130H399.769" stroke="#9A8B00" stroke-width="12"/>
            <path class="AtencionExclamCirculo" d="M448 616C448 642.562 426.681 664 400.5 664C374.319 664 353 642.562 353 616C353 589.438 374.319 568 400.5 568C426.681 568 448 589.438 448 616Z" fill="#FAE73B" stroke="#9A8B00" stroke-width="12"/>
            </svg>
            
        <div class="cuadro2">
            <h4>¡Atención!</h4>
            <p>
                El documento inicial de una página se recomienda que sea un archivo 
                denominado <strong>index.html</strong>, dado que es el que la mayoría 
                de los servidores web busca para identificar 
                la página principal o <strong>"home"</strong> del sitio que están alojando.
            </p>
        </div>
    </div>

    <!-- Fin atención -->

</div>

<!-- FIN CONOCE MAS, ATENCION, PRUEBA ESTO -->


<!-- Fin descripción -->
         <!--  <p> A continuación te dejamos con un ejemplo para que lo entiendas mejor y puedas ponerlo en práctica. </p> -->
    
            <!-- EJEMPLO CON CAPTURA (COMENTAR O ELIMINAR SI NO SE USA) -->

            <!--<p><u>Ejemplo (con captura):</u></p>-->

            

        <hr>
            <!-- --------------------------------------------------------------------------------------------------- -->

            
            <!-- RESUMEN -->

            <p id="resumen">
              <!--   <p><pre>   </pre></p>
                <p><pre>   </pre></p>
 -->
 <div class="cuadroflex">

    <!-- Prueba -->

    <div class="cuadroext3">
        <svg class="img3" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="PruebaFondo" width="800" height="800" fill="#409A4E"/>
            <path class="PruebaCable" d="M400 101V101C409.352 75.4383 431.032 56.366 457.578 50.3491L469.583 47.6278C483.056 44.5739 497.006 44.2671 510.601 46.7256L514.038 47.3473C557.175 55.1487 592.62 85.8613 606.483 127.449L609 135L624.585 181.105C630.026 197.201 640.882 210.912 655.303 219.899L659.654 222.61C684.751 238.251 717.157 235.46 739.21 215.759V215.759C761.537 195.813 767.802 163.417 754.522 136.586L738.336 103.884C731.515 90.1025 727.54 75.0885 726.648 59.7375L725.5 40V0" stroke="#1C6227" stroke-width="12"/>
            <path class="PruebaRaton" d="M281.021 134.118L299.131 124.719C313.375 117.326 328.614 111.817 344.424 108.345C357.574 105.458 371.026 104 384.522 104H400H415.478C428.974 104 442.426 105.458 455.576 108.345C471.386 111.817 486.625 117.326 500.869 124.719L518.979 134.118C533.481 141.644 546.434 151.603 557.213 163.514L558.969 165.455C569.929 177.565 578.188 191.667 583.245 206.907C587.059 218.398 589 230.378 589 242.43V554.597C589 567.008 587.441 579.459 584.397 591.528C578.62 614.433 567.454 635.963 551.805 654.216C544.562 662.664 536.413 670.37 527.491 677.209L524.636 679.397C508.774 691.556 490.756 700.92 471.432 707.049C459.633 710.791 447.44 713.298 435.07 714.524L400 718L364.93 714.524C352.56 713.298 340.367 710.791 328.568 707.049C309.244 700.92 291.226 691.556 275.364 679.397L272.509 677.209C263.587 670.37 255.438 662.664 248.195 654.216C232.546 635.963 221.38 614.433 215.603 591.528C212.559 579.459 211 567.008 211 554.597V242.43C211 230.378 212.941 218.398 216.755 206.907C221.812 191.667 230.071 177.565 241.031 165.455L242.787 163.514C253.566 151.603 266.519 141.644 281.021 134.118Z" fill="white" stroke="#1C6227" stroke-width="12"/>
            <path class="PruebaLinea" d="M211 334V334C335.171 318.148 461.84 318.065 586 334V334" stroke="#1C6227" stroke-width="12"/>
            <path class="PruebaLinea" d="M398 108V316.5" stroke="#1C6227" stroke-width="12"/>
            <path class="PruebaRueda" d="M392.563 166H398.5H404.437C412.948 166 420.482 170.957 423.072 178.261C423.687 179.995 424 181.805 424 183.625V265.137C424 269.071 422.873 272.939 420.729 276.366C416.231 283.553 407.659 288 398.5 288C389.341 288 380.769 283.553 376.271 276.366C374.127 272.939 373 269.071 373 265.137V183.625C373 181.805 373.313 179.995 373.928 178.261C376.518 170.957 384.052 166 392.563 166Z" fill="#C3DFC8" stroke="#1C6227" stroke-width="12"/>
            </svg>
                    <div class="cuadro3">
            <h4>Prueba esto</h4>
            <p>
            Haz un documento html y guárdalo con el nombre index.html, en ese mismo documento escribe "Estoy aprendiendo HTML" y visualizalo en tu navegador.
    
            </p>
        </div>
    </div>

    <!-- Fin prueba -->
 </div>
                <div class="resumen">
                    <details>
                            <summary>
                               <h2 style="display: inline-block;">Resumen</h2>
                            </summary>
                         <p>El <strong>HTML (HyperText Markup Language)</strong> es un
                             lenguaje que nos permite hacer páginas web.
                             
                         </p>
                         <p>El <strong>hipertexto</strong> hace alusión a los enlaces
                             que se conectan entre sí en las páginas web.
                        
                         </p>
                         <p>Una <strong>etiqueta</strong> constituye un elemento técnico
                             que un navegador web puede reconocer e interpretar.
                           
                         </p>
                         <p>Un <strong>atributo</strong> informa a los navegadores
                             lo que deben aplicar a una etiqueta.
                          
                         </p>
                         <p>Las <strong>etiquetas</strong> se escriben en minúsculas.
                          
                         </p>
                         <p>La sintaxis de las etiquetas es:
                          <span class="estilo_pre">&lt;etiqueta&gt;</span>.
                          
                         </p>
                         <p>Las etiquetas se abren y se cierran de la siguiente manera: 
                            <span class="estilo_pre">&lt;etiqueta&gt;</span> 
                            <span class="estilo_pre">&lt;/etiqueta&gt;</span>.
                            
                   </p>

                   <p>
                    Hay etiquetas que se pueden cerrar en la misma 
                    etiqueta de apertura y son las <strong>etiquetas singleton</strong>.
                   </p>

                   <p>
                    El <strong>index.html</strong> Se trata de la página principal 
                    que los servidores van a buscar.

                   </p>
                      </details>
                 </div><br>
                 

            <!-- FIN RESUMEN -->


            <!-- --------------------------------------------------------------------------------------------------- -->


            <!-- ENLACES DE REFERENCIA -->

            <hr>
            <h3>Enlaces de referencia:</h3>
            <div class="referencia">
                <p>En los siguientes enlaces encontrarás más información acerca de <span class="estilo_pre">HTML</span>

                </p>
                <ul>
                 <li><a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">Developer Mozilla</a></li>
                 <li><a href="https://www.w3schools.com/html/default.asp" target="_blank">W3schools</a></li>   
                </ul>
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
                        <img class="logonosotros2" src="../img/logo.svg" alt="logo grupo" title="Ir a página principal del tutorial"/>
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
                        <a href="https://es-es.facebook.com/imfemalaga/">            <!-- LOGO FACEBOOK -->
                            <div class="svgContainer">
                
                                <svg class="facebook" version="1.0" xmlns="http://www.w3.org/2000/svg" width="25.000000pt" height="25.000000pt"
                                    viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
                
                                    <g transform="translate(-5.000000,53.000000) scale(0.115000,-0.115000)" fill="#000000"
                                        stroke="none">
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
                            </div></a>
                        <a href="https://twitter.com/malagaimfe?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><div class="svgContainer">
                            <svg class="twitter" version="1.0" xmlns="http://www.w3.org/2000/svg" width="25.500000pt" height="25.000000pt"
                                viewBox="0 0 45.000000 44.000000" preserveAspectRatio="xMidYMid meet">
            
                                <g transform="translate(5.000000,40.000000) scale(0.080000,-0.080000)" fill="#000000" stroke="none">
                                    <path d="M66 358 c32 -46 68 -97 81 -115 13 -17 23 -35 23 -40 0 -4 -37 -51
            -82 -103 -65 -77 -77 -96 -62 -99 18 -3 55 31 135 126 l36 43 57 -85 58 -85
            64 0 c35 0 64 3 64 6 0 3 -38 61 -84 128 l-84 122 79 92 c73 83 78 92 55 92
            -18 0 -41 -19 -88 -74 -44 -52 -66 -71 -75 -65 -6 6 -30 39 -53 75 l-42 64
            -69 0 -69 0 56 -82z m183 -134 c67 -97 121 -178 121 -181 0 -2 -10 -3 -21 -1
            -15 2 -58 55 -140 173 -65 94 -118 173 -119 178 0 4 9 7 19 7 14 0 54 -49 140
            -176z" />
                                </g>
                            </svg>
                        </div></a>
                        <a href="https://www.youtube.com/user/imfecanaltv">           <!-- LOGO YOUTUBE -->
                            <div class="svgContainer">
                                <svg class="youtube" version="1.0" xmlns="http://www.w3.org/2000/svg" width="33.000000pt" height="24.000000pt"
                                    viewBox="0 0 66.000000 48.000000" preserveAspectRatio="xMidYMid meet">
                
                                    <g transform="translate(1.200000,45.000000) scale(0.08000,-0.08000)" fill="#000000" stroke="none">
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
                            </div></a>
                        <a href="https://imfemalaga.blogspot.com/">
                            <div class="svgContainer">
                            <svg class="blog" version="1.0" xmlns="http://www.w3.org/2000/svg" width="30.000000pt" height="25.600000pt"
                                viewBox="0 0 72.000000 62.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,55.000000) scale(0.09000,-0.09000)" fill="#000000" stroke="none">
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
                        </div></a>
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
            <svg class=flecha version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt" height="64.000000pt"
                viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,215.000000) scale(0.040000,-0.040000)" fill="#000000" stroke="none">
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
        <a href="html_estructura.html">
            <div class="svgContainer">
                <svg class="flechader" version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt" height="64.000000pt"
                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
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
        
        </a>

        <!-- Fin flecha ir arriba, siguiente página y anterior página -->

        <!-- Menú -->

        <div class="desplegable" id="abrir">
            <div class="iconos">
                <div>
                    <a href="">
                        <div class="svgContainer2">
                            <svg onclick="Cerrar()" class="menu2" width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
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
                        <li>Para buscar una etiqueta, usa los símbolos '&lt;' y '&gt;' para buscarla.
                            Por ejemplo, para buscar la etiqueta p, de párrafo, búscala como &lt;p&gt;.</li>
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




    /*PARA QUE SE DESCARGUE EL ARCHIVO*/
    if (boton == 'download') {
        // Crear un Blob con el contenido HTML
        var blob = new Blob([nuevoCSS], { type: 'text/css' });  // En vez de nuevoHTML, podemos crear una variable asociada a un campo de entrada para poder poner el nombre que queramos

        // Crear un enlace temporal para descargar el archivo
        var enlace = document.createElement('a');
        enlace.href = URL.createObjectURL(blob);
        enlace.download = 'tutorial.css';

        // Agregar el enlace al cuerpo y simular un clic
        document.body.appendChild(enlace);
        enlace.click();

        // Limpiar y liberar recursos
        document.body.removeChild(enlace);
        URL.revokeObjectURL(enlace.href);



        /* PARA CREAR EL JSON*/


        var informacionJSON = JSON.stringify({
            ColorPrimario,
            ColorSecundario,
            ColorTerciario,
            valorAtencion,
            valorConoce,
            valorPrueba,
            valorEstilo,
        });

        // Crear Blobs para EL archivo JSON
        var blobJSON = new Blob([informacionJSON], { type: 'application/json' });

        // Crear enlace temporal para descargar el archivo
        var enlaceJSON = document.createElement('a');
        enlaceJSON.href = URL.createObjectURL(blobJSON);
        enlaceJSON.download = 'estilo_tutorial.json';

        // Agregar enlace al cuerpo y simular clic
        document.body.appendChild(enlaceJSON);
        enlaceJSON.click();
        document.body.removeChild(enlaceJSON);
        URL.revokeObjectURL(enlaceJSON.href);
    }

    if (boton == 'preview') {

        var myWindow = window.open('', '_blank');
        myWindow.document.write(nuevoHTML);

    }
}