/*Para poner texto en NEGRITA*/

function ponerNegrita(textoID) {
    let campoTexto = document.getElementById(textoID); // Accede al texto que estoy introducciendo (por eso no se pone .value, porque aún no hemos mandado el formulario)

    // Obtener la posición de inicio y fin del texto seleccionado
    let inicioSeleccion = campoTexto.selectionStart;
    let finSeleccion = campoTexto.selectionEnd;

    // Obtener el texto seleccionado completo
    let textoCompleto = campoTexto.value;

    // Obtener el texto antes y después de la selección
    let textoAntes = textoCompleto.substring(0, inicioSeleccion);
    let textoSeleccionado = textoCompleto.substring(inicioSeleccion, finSeleccion);
    let textoDespues = textoCompleto.substring(finSeleccion);

    // Poner el texto seleccionado en negrita
    campoTexto.value = textoAntes + "<strong>" + textoSeleccionado + "</strong>" + textoDespues;
}


/*Para poner texto en CURSIVA*/

function ponerCursiva(textoID) {
    let campoTexto = document.getElementById(textoID); // Accede al texto que estoy introducciendo

    // Obtener la posición de inicio y fin del texto seleccionado
    let inicioSeleccion = campoTexto.selectionStart;
    let finSeleccion = campoTexto.selectionEnd;

    // Obtener el texto seleccionado completo
    let textoCompleto = campoTexto.value;

    // Obtener el texto antes y después de la selección
    let textoAntes = textoCompleto.substring(0, inicioSeleccion);
    let textoSeleccionado = textoCompleto.substring(inicioSeleccion, finSeleccion);
    let textoDespues = textoCompleto.substring(finSeleccion);

    // Poner el texto seleccionado en cursiva
    campoTexto.value = textoAntes + "<em>" + textoSeleccionado + "</em>" + textoDespues;
}

/*Para SUBRAYAR texto*/

    function ponerSubrayado(textoID) {
    let campoTexto = document.getElementById(textoID); // Accede al texto que estoy introducciendo

    // Obtener la posición de inicio y fin del texto seleccionado
    let inicioSeleccion = campoTexto.selectionStart;
    let finSeleccion = campoTexto.selectionEnd;

    // Obtener el texto seleccionado completo
    let textoCompleto = campoTexto.value;

    // Obtener el texto antes y después de la selección
    let textoAntes = textoCompleto.substring(0, inicioSeleccion);
    let textoSeleccionado = textoCompleto.substring(inicioSeleccion, finSeleccion);
    let textoDespues = textoCompleto.substring(finSeleccion);

    // Subrayar el texto seleccionado 
    campoTexto.value = textoAntes + "<ins>" + textoSeleccionado + "</ins>" + textoDespues;
}

/*Para añadir un ENLACE al texto*/

function ponerEnlace(textoID) {
    let campoTexto = document.getElementById(textoID); // Accede al texto que estoy introducciendo

    // Obtener la posición de inicio y fin del texto seleccionado
    let inicioSeleccion = campoTexto.selectionStart;
    let finSeleccion = campoTexto.selectionEnd;

    // Obtener el texto seleccionado completo
    let textoCompleto = campoTexto.value;

    // Obtener el texto antes y después de la selección
    let textoAntes = textoCompleto.substring(0, inicioSeleccion);
    let textoSeleccionado = textoCompleto.substring(inicioSeleccion, finSeleccion);
    let textoDespues = textoCompleto.substring(finSeleccion);

    // Subrayar el texto seleccionado 
    campoTexto.value = textoAntes + "<a href='ENLACE' target='_blank'>" + textoSeleccionado + "</a>" + textoDespues;
}

/* Para añadir ENLACE en ORIENTACIONES PEDAGÓGICAS */
function ponerEnlacesDentro(textoID) {
    let campoTexto = document.getElementById(textoID); // Accede al texto que estoy introducciendo

    // Obtener la posición de inicio y fin del texto seleccionado
    let inicioSeleccion = campoTexto.selectionStart;
    let finSeleccion = campoTexto.selectionEnd;

    // Obtener el texto seleccionado completo
    let textoCompleto = campoTexto.value;

    // Obtener el texto antes y después de la selección
    let textoAntes = textoCompleto.substring(0, inicioSeleccion);
    let textoSeleccionado = textoCompleto.substring(inicioSeleccion, finSeleccion);
    let textoDespues = textoCompleto.substring(finSeleccion);

    // Subrayar el texto seleccionado 
    campoTexto.value = textoAntes + "<a href='ENLACE' target='_self'>" + textoSeleccionado + "</a>" + textoDespues;
}

/*Para añadir ESTILO PRE*/

function ponerEstiloPre(textoID) {
    let campoTexto = document.getElementById(textoID); // Accede al texto que estoy introducciendo

    // Obtener la posición de inicio y fin del texto seleccionado
    let inicioSeleccion = campoTexto.selectionStart;
    let finSeleccion = campoTexto.selectionEnd;

    // Obtener el texto seleccionado completo
    let textoCompleto = campoTexto.value;

    // Obtener el texto antes y después de la selección
    let textoAntes = textoCompleto.substring(0, inicioSeleccion);
    let textoSeleccionado = textoCompleto.substring(inicioSeleccion, finSeleccion);
    let textoDespues = textoCompleto.substring(finSeleccion);

    // Subrayar el texto seleccionado 
    campoTexto.value = textoAntes + "<span class='estilo_pre'>" + textoSeleccionado + "</span>" + textoDespues;
}


