/*PARA AÑADIR NUEVO APARTADOS*/
var contador = 1;

function nuevoBloque() {
    // Crear nuevo div para el nuevo apartado
    var nuevoDiv = document.createElement("div");

    contador ++;
    // Agregar elementos al nuevo div
    nuevoDiv.innerHTML = `
    <div class="contenedorBloquesInt"> <!--ESTO ES PARA LO DE AÑADIR NUEVOS INPUT DE TÍTULOS Y DESCRIPCIÓN-->
        <label for="tituloBloques${contador}">Nuevo título ${contador}:</label> <br> 
        <input type="text" id="tituloBloques${contador}" class="titulosBloque">
        
        <br><br>

        <label for="descripcionBloques${contador}">Nueva descripción ${contador}:</label> <br> 
        <input type="text" id="descripcionBloques${contador}" class="descripcionBloques">

        

        <br><br> 

        <label for="nombreBloques${contador}">Nuevo nombre archivo ${contador}:</label> <br> 
        <input type="text" id="nombreBloques${contador}" class="nombreBloques">
        <p style="color:rgb(180, 51, 51)">Importante: No incluir las iniciales del tema ni el .html al final. Si tiene varias palabras, unir con barra baja. Ejemplo: tutorial_pedagogico</p>
    </div> <!--Fin del div con el id "bloque" y la clase class="contenedorBloquesInt"-->

    <div id="nuevos-bloques"></div> <!--Aquí se van añadiendo los apartados-->`;

    // Agregar nuevo div al contenedor
    document.getElementById("nuevos-bloques").appendChild(nuevoDiv);
}

function borrarRadioAnterior(){
    var botonesAnterior = document.getElementsByName("radioAnterior");

    for (let i = 0; i < botonesAnterior.length; i++){
        if (botonesAnterior[i].checked === true){
            botonesAnterior[i].checked = false;
        }
    }
}

function borrarRadioSiguiente(){
    var botonesSiguiente = document.getElementsByName("radioSiguiente");

    for (let i = 0; i < botonesSiguiente.length; i++){
        if (botonesSiguiente[i].checked === true){
            botonesSiguiente[i].checked = false;
        }
    }
}