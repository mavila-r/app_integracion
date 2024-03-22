/*PARA ELEGIR SI QUEREMOS QUE APAREZCA O NO LA PARTE DE AÑADIR EJEMPLO O AÑADIR BOTÓN*/
function aparecerElemento(casilla, id) {
    // let casilla = document.getElementById(casilla); // Accede a la casilla correspondiente. En realidad esto no es necesario porque ya hemos pasado la casilla como parámetro
    let div = document.getElementById(id); // Accede al div correspodiente

    if (casilla.checked) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}


/*PARA ELEGIR EL TIPO DE EJEMPLO*/
function mostrarDiv(divSeleccionado, divOculto, divOculto2) {
    // Oculta todos los divs
    document.getElementById(divSeleccionado).style.display = 'none';
    document.getElementById(divOculto).style.display = 'none';
    document.getElementById(divOculto2).style.display = 'none'

    // Muestra el div correspondiente al radio seleccionado
    document.getElementById(divSeleccionado).style.display = 'block';
}


/*PARA AÑADIR NUEVO APARTADO*/
var contador = 1; 
var indice = 1; // índice para llamar a la función cargarImagen()


function nuevoApartado() {
    // Crear nuevo div para el nuevo apartado
    var nuevoDiv = document.createElement("div");

    contador += 1;
       
    // Agregar elementos al nuevo div
    nuevoDiv.innerHTML = `
    <div class="contenedorApartados"> 
        <label for="titulosApartados${contador}">Nuevo título ${contador}:</label> <br>
        <input type="text" id="titulosApartados${contador}" class="titulo">
            
        <br><br>

        <label for="contenido${contador}">Nuevo contenido ${contador}:</label> <br> 

        <div class="posicionamiento"> <!--Para que los botones de estilos aparezcan a la derecha-->
            <div>
                <textarea class="contenido" id="contenido${contador}" cols="60" rows="15"></textarea> <br>
            </div>

            <div class="botones_estilos">
                <button onclick="ponerNegrita('contenido${contador}')"> <img src="../imagenes/negrita.png" alt="Negrita" title="Negrita" width="10px"> </button> 
                <button onclick="ponerCursiva('contenido${contador}')"> <img src="../imagenes/cursiva.png" alt="Cursiva" title="Cursiva" width="10px"> </button>
                <button onclick="ponerSubrayado('contenido${contador}')"> <img src="../imagenes/subrayado.png" alt="Subrayado" title="Subrayado" width="10px"> </button>
                <button onclick="ponerEnlace('contenido${contador}')"> <img src="../imagenes/enlace.png" alt="Enlace" title="Enlace" width="10px"> </button>
                <button onclick="ponerEstiloPre('contenido${contador}')"> <img src="../imagenes//estilo.png" alt="Estilo" title="Estilo" width="10px"> </button>
                <br>
            </div>
        </div>
  
        <br>
    
        <input type="checkbox" class="casilla-ejemplo" id="casilla-ejemplo${contador}" onclick="aparecerElemento(this, 'introducirEjemplo${contador}')">  <label for="casilla-ejemplo${contador}">¿Quieres incorporar un ejemplo?</label> 

        <div id="introducirEjemplo${contador}" class="introducirEjemplo"> 
            <br>

            <label for="contenidoHTML${contador}">1. Añade aquí el contenido HTML:</label> <br><br>

            <input type="checkbox" class="escribir-HTML" onclick="aparecerElemento(this, 'parrafo-info-html${contador}')">¿Quieres mostrar el código HTML como texto? <br><br> <!--Para saber si la persona quiere escribir en el contenedor de la izquierda (azul), código html-->

            <div class="posicionamiento">
                <div>   
                <textarea class="contenidoHTML" id="contenidoHTML${contador}" cols="60" rows="15"></textarea>  <!--AQUÍ ES DÓNDE VA EL CONTENIDO DEL BLOQUE DE LA IZQUIERDA-->
                </div>

                <div class="botones_estilos">
                    <button onclick="ponerNegrita('contenidoHTML${contador}')"> <img src="../imagenes/negrita.png" alt="Negrita" title="Negrita" width="10px"> </button> 
                    <button onclick="ponerCursiva('contenidoHTML${contador}')"> <img src="../imagenes/cursiva.png" alt="Cursiva" title="Cursiva" width="10px"> </button>
                    <button onclick="ponerSubrayado('contenidoHTML${contador}')"> <img src="../imagenes/subrayado.png" alt="Subrayado" title="Subrayado" width="10px"> </button>
                    <button onclick="ponerEnlace('contenidoHTML${contador}')"> <img src="../imagenes/enlace.png" alt="Enlace" title="Enlace" width="10px"> </button>
                    <button onclick="ponerEstiloPre('contenidoHTML${contador}')"> <img src="../imagenes//estilo.png" alt="Estilo" title="Estilo" width="10px"> </button>
                    <br>
                </div>
            </div>
            <p id="parrafo-info-html${contador}" style="color:rgb(180, 51, 51); display:none;">Nota: añade el contenido HTML entero, incorporando el &lt;!DOCTYPE&gt;, &lt;html&gt;, etc.</p>
            
            <!--Para seleccionar si quieres añadir una imagen o un ejemplo dinámico-->

            <p>2. Selecciona si quieres incorporar una imagen, un ejemplo dinámico o un iframe:</p>

            <input type="radio" class="elegir-ejemplo" name="elegir-ejemplo${contador}" value="IMAGEN" id="elegir-imagen${contador}" onclick="mostrarDiv('ejemplo-con-imagen${contador}', 'ejemplo-dinamico${contador}', 'ejemplo-con-iframe${contador}')"> <!--Llama a la función con su id correspondiente como argumento-->
            <label for="elegir-imagen${contador}">Insertar imagen</label> <br>

            <input type="radio" class="elegir-ejemplo" name="elegir-ejemplo${contador}" value="DINAMICO" id="elegir-ejemplo-dinamico${contador}" onclick="mostrarDiv('ejemplo-dinamico${contador}', 'ejemplo-con-imagen${contador}', 'ejemplo-con-iframe${contador}')"> <!--Llama a la función con su id correspondiente como argumento-->
            <label for="elegir-ejemplo-dinamico${contador}">Insertar ejemplo dinámico</label><br>

            <input type="radio" class="elegir-ejemplo" name="elegir-ejemplo${contador}" value="IFRAME" id="elegir-iframe${contador}" onclick="mostrarDiv('ejemplo-con-iframe${contador}', 'ejemplo-con-imagen${contador}', 'ejemplo-dinamico${contador}')"> <!--La función mostrarDIV es para mostrar y ocultar el apartado que sale en caso de seleccionar cada opción-->
            <label for="elegir-iframe${contador}">Insertar iframe</label>


            <!--PARA INSERTAR IMAGEN (Aparece en caso de haber seleccionado insertar imagen)-->
            <div id="ejemplo-con-imagen${contador}" class="ejemplo-con-imagen" style="display: none; margin-left:20px;"> <!-- Este div sirve para mostrar/ocultar la parte de insertar imagen -->
                <p>Añade aquí la imagen de ejemplo:</p> 
                <input type="file" class="imagen imagenPrincipal"  onchange="cargarImagen(${indice})">  <!--Llama a la función cargarImagen con el índice del apartado-->
                
                <p class="informacion-imagen" style="color:Red"></p>
                
                <br>

                <label for="anchoImagen">Ancho imagen:</label>
                <input type="number" name="anchoImagen" id="anchoImagen" class="anchoImagen"> 
                <select name="medidaAnchoImagen" class="medidaAnchoImagen">
                    <option value="%">%</option>
                    <option value="px">px</option>
                    <option value="em">em</option>
                </select><br><br>

                <label for="altoImagen">Alto imagen:</label>
                <input type="number" name="altoImagen" id="altoImagen" class="altoImagen"> 
                <select name="medidaAltoImagen" class="medidaAltoImagen">
                    <option value="%">%</option>
                    <option value="px">px</option>
                    <option value="em">em</option>
                </select>

                <p>¿Quieres insertar botón de "inténtalo tú mismo"?</p>

                <input type="checkbox" id="insertar-boton-intentalo-imagen${contador}" class="botonIntentalo" value="añadirBoton">
                <label for="insertar-boton-intentalo-imagen${contador}">Insertar botón de "inténtalo tú mismo"</label>

                <br><br>
            </div>

            <!--PARA INSERTAR EJEMPLO DINAMICO (aparece en caso de hacer seleccionado insertar ejemplo dinámico)-->
            <div id="ejemplo-dinamico${contador}" class="ejemplo-dinamico" style="display: none; margin-left:20px;"> <!-- Este div sirve para mostrar/ocultar la parte de insertar ejemplo dinámico -->
        
                <!--PARA INSERTAR BOTÓN DE "INTÉNTALO TÚ MISMO"-->
                <p>¿Quieres insertar botón de "inténtalo tú mismo"?</p>

                <input type="checkbox" id="insertar-boton-intentalo-dinamico${contador}" class="botonIntentalo2" value="añadirBoton">
                <label for="insertar-boton-intentalo-dinamico${contador}">Insertar botón de "inténtalo tú mismo"</label>
            </div>


            <!--PARA INSERTAR EJEMPLO CON IFRAME (aparece en caso de haber seleccionado insertar iframe)-->

            <div id="ejemplo-con-iframe${contador}" class="ejemplo-con-iframe" style="display: none; margin-left:20px">
                
                <p>¿Qué quieres insertar?</p>

                <input type="radio" class="elegir-iframe elegir-pagina" name="elegir-iframe${contador}" value="PAGINA" id="elegir-pagina${contador}" onclick="mostrarDiv('pagina-externa${contador}', 'iframe-archivo${contador}', 'iframe-incrustar${contador}')"> <!--Llama a la función con el id correspondiente al div que queremos mostrar, y el id correspondiente al div que queremos ocultar-->
                <label for="elegir-pagina${contador}">Insertar página externa</label> <br>

                <input type="radio" class="elegir-iframe elegir-archivo" name="elegir-iframe${contador}" value="ARCHIVO" id="elegir-archivo${contador}" onclick="mostrarDiv('iframe-archivo${contador}', 'pagina-externa${contador}', 'iframe-incrustar${contador}')"> <!--Llama a la función con el id correspondiente al div que queremos mostrar, y el id correspondiente al div que queremos ocultar-->
                <label for="elegir-archivo${contador}">Insertar archivo</label><br>
                
                <input type="radio" class="elegir-iframe elegir-incrustar" name="elegir-iframe${contador}" value="INCRUSTAR" id="elegir-incrustar${contador}" onclick="mostrarDiv('iframe-incrustar${contador}', 'pagina-externa${contador}', 'iframe-archivo${contador}')"> <!--La función mostrarDIV es para mostrar y ocultar el apartado que sale en caso de seleccionar cada opción-->
                <label for="elegir-incrustar${contador}">Incrustar código (por ejemplo, de Youtube)</label>


                <!--Insertar página externa-->
                <div id="pagina-externa${contador}" style="display: none; margin-left:40px"> 
                    <p>Añade aquí la dirección de la página <ins>externa</ins> que quieras insertar como iframe:</p>
                    <input type="text" class="direccion-iframe">
                </div>

                <!--Insertar archivo-->
                <div id="iframe-archivo${contador}" style="display: none; margin-left:40px;"> 
                    <p>Selecciona el archivo:</p>
                    <input type="file" class="archivo">  <br>
                    <p class="infoArchivo" style="color: red;"></p>
                </div>

                <!--Incrustar código (ej. youtube)-->
                <div id="iframe-incrustar${contador}" style="display: none; margin-left:40px">
                    <p>Añade aquí el código que deseas incrustar:</p>
                    <input type="text" class="codigo-incrustracion">
                </div>

                <div id="apartado-intentalo-tu-mismo" >
                    <p>¿Quieres insertar botón de "inténtalo tú mismo"?</p>

                    <input type="checkbox" id="insertar-boton-intentalo-iframe" class="botonIntentalo3" value="añadirBoton">
                    <label for="insertar-boton-intentalo-iframe">Insertar botón de "inténtalo tú mismo"</label>
                </div>

            </div>

        </div> <!--Fin ejemplo-->
    
        <br><br>

        <!--PARA INTRODUCIR BOTONES DE ATENCIÓN, CONOCE MÁS O PRUEBA ESTO-->
        
        <input type="checkbox" class="casilla-boton" onclick="aparecerElemento(this, 'introduceBoton${contador}')"><label for="casilla-boton">Introducir un botón (atención, conoce más o prueba esto)</label>
        
        <div id="introduceBoton${contador}" class="introducirBoton inicialmenteInvisible"> <br> <!--Div inicialmente invisible, que contiene las opciones de botón a introducir-->
            
            <!--Atención-->
            <input type="checkbox" class="mostrarAtencion" onclick="aparecerElemento(this, 'introduceAtencion${contador}')">Añadir "Atención" <br>
                
                <div class="inicialmenteInvisible" id="introduceAtencion${contador}">

                    <label for="añadirAtencion">Introduce el contenido de "Atención":</label> <br>
                    <div class="posicionamiento"> <!--Para que los botones de estilos aparezcan a la derecha-->

                        <div>
                        <textarea class="atencion" id="añadirAtencion${contador}" cols="60" rows="15"></textarea>
                        </div>  

                        <div class="botones_estilos">
                            <button onclick="ponerNegrita('añadirAtencion${contador}')"> <img src="../imagenes/negrita.png" alt="Negrita" title="Negrita" width="10px"> </button> 
                            <button onclick="ponerCursiva('añadirAtencion${contador}')"> <img src="../imagenes/cursiva.png" alt="Cursiva" title="Cursiva" width="10px"> </button>
                            <button onclick="ponerSubrayado('añadirAtencion${contador}')"> <img src="../imagenes/subrayado.png" alt="Subrayado" title="Subrayado" width="10px"> </button>
                            <button onclick="ponerEnlacesDentro('añadirAtencion${contador}')"> <img src="../imagenes/enlace.png" alt="Enlace" title="Enlace" width="10px"> </button> <!--En este caso, los enlaces se abren en la propia página-->
                            <button onclick="ponerEstiloPre('añadirAtencion${contador}')"> <img src="../imagenes//estilo.png" alt="Estilo" title="Estilo" width="10px"> </button>
                            <br>
                        </div>

                    </div>
                       
                </div> 

            <!--Conoce más-->
            <input type="checkbox" class="mostrarConoceMas" onclick="aparecerElemento(this, 'introduceConoceMas${contador}')">Añadir "Conoce más" <br>
            
                <div class="inicialmenteInvisible" id="introduceConoceMas${contador}">

                    <label for="añadirConoceMas">Introduce el contenido de "Conoce más":</label> <br>
                    <div class="posicionamiento"> <!--Para que los botones de estilos aparezcan a la derecha-->

                        <div>
                        <textarea class="conoceMas" id="añadirConoceMas${contador}" cols="60" rows="15"></textarea>
                        </div>  

                        <div class="botones_estilos">
                            <button onclick="ponerNegrita('añadirConoceMas${contador}')"> <img src="../imagenes/negrita.png" alt="Negrita" title="Negrita" width="10px"> </button> 
                            <button onclick="ponerCursiva('añadirConoceMas${contador}')"> <img src="../imagenes/cursiva.png" alt="Cursiva" title="Cursiva" width="10px"> </button>
                            <button onclick="ponerSubrayado('añadirConoceMas${contador}')"> <img src="../imagenes/subrayado.png" alt="Subrayado" title="Subrayado" width="10px"> </button>
                            <button onclick="ponerEnlacesDentro('añadirConoceMas${contador}')"> <img src="../imagenes/enlace.png" alt="Enlace" title="Enlace" width="10px"> </button> <!--En este caso, los enlaces se abren en la propia página-->
                            <button onclick="ponerEstiloPre('añadirConoceMas${contador}')"> <img src="../imagenes//estilo.png" alt="Estilo" title="Estilo" width="10px"> </button>
                            <br>
                        </div>

                    </div>

                </div>   

            <!--Prueba esto-->
            <input type="checkbox" class="mostrarPruebaEsto" onclick="aparecerElemento(this, 'introducePruebaEsto${contador}')">Añadir "Prueba esto"
            
                <div class="inicialmenteInvisible" id="introducePruebaEsto${contador}">

                    <label for="añadirPruebaEsto">Introduce el contenido de "Prueba esto"</label> <br>
                    <div class="posicionamiento"> <!--Para que los botones de estilos aparezcan a la derecha-->

                        <div>
                        <textarea class="pruebaEsto" id="añadirPruebaEsto${contador}" cols="60" rows="15"></textarea>
                        </div>  

                        <div class="botones_estilos">
                            <button onclick="ponerNegrita('añadirPruebaEsto${contador}')"> <img src="../imagenes/negrita.png" alt="Negrita" title="Negrita" width="10px"> </button> 
                            <button onclick="ponerCursiva('añadirPruebaEsto${contador}')"> <img src="../imagenes/cursiva.png" alt="Cursiva" title="Cursiva" width="10px"> </button>
                            <button onclick="ponerSubrayado('añadirPruebaEsto${contador}')"> <img src="../imagenes/subrayado.png" alt="Subrayado" title="Subrayado" width="10px"> </button>
                            <button onclick="ponerEnlacesDentro('añadirPruebaEsto${contador}')"> <img src="../imagenes/enlace.png" alt="Enlace" title="Enlace" width="10px"> </button> <!--En este caso, los enlaces se abren en la propia página-->
                            <button onclick="ponerEstiloPre('añadirPruebaEsto${contador}')"> <img src="../imagenes//estilo.png" alt="Estilo" title="Estilo" width="10px"> </button>
                            <br>
                        </div>

                    </div>
                </div>
        
        </div>

        <br><br>

        <!--Subapartados-->

        <div style="margin-left: 30px"> <!--Simplemente para dar margen a los nuevos apartados-->

            <div id="nuevos-subapartados${indice}"></div> <!--Div vacio en el que se van incorporando nuevos div de subapartados-->


            <button onclick="nuevoSubapartado(${indice})">Añadir más contenido</button> <!--Para que aparezca o desaparezca el subapartado-->
        
        </div>

        <br><br><hr><br>

    </div> 
    `;

    indice++;

    // Agregar nuevo div al contenedor
    document.getElementById("nuevos-apartados").appendChild(nuevoDiv);
}



// PARA AÑADIR NUEVO SUBAPARTADO

var subcontador = 1; // Para diferenciar los id

// Subindice - Hay varios, porque cada subíndice estará vinculado a un apartado. Por ejemplo, el subíndice0 pertenece al apartado 1 y solo se incrementará cada vez que se añada un subapartado en el primer apartado (no cuando se añada un subapartado en cualquier otro apartado)
var subindice0 = 0;
var subindice1 = 0;
var subindice2 = 0;
var subindice3 = 0;
var subindice4 = 0;
var subindice5 = 0;
var subindice6 = 0;
var subindice7 = 0;
var subindice8 = 0;
var subindice9 = 0;
var subindice10 = 0;
var subindice11 = 0;
var subindice12 = 0;
var subindice13 = 0;
var subindice14 = 0;
var subindice15 = 0;
var subindice16 = 0;
var subindice17 = 0;
var subindice18 = 0;
var subindice19 = 0;
var subindice20 = 0;
// Funciona hasta el apartado 21. Se pueden añadir más si es necesario.


function nuevoSubapartado(id) {  // IMPORTANTISIMO: ID REPRESENTA EL INDICE DEL APARTADO AL QUE PERTENECE EL SUBAPARTADO QUE SE CREA

    // Crear nuevo div para el nuevo apartado
    var nuevoDiv = document.createElement("div");

    let subindice; // Esta variable tendrá un valor u otro en función del id pasado como parámetro (Recordar que el id se refiere al índice del apartado en el que se va a añadir el subapartado)

    if (id == 0) { // Por ejemplo, si el índice es 0 quiere decir que este subapartado se va a añadir en el apartado 1. Por tanto, subíndice tendrá el valor del subindice0 (inicialmente es 0, pero si ya se han añadido otros subapartados en el apartado 1, esta variable se habrá ido incrementando)
        subindice = subindice0;
    }
    if (id == 1) {
        subindice = subindice1;
    }
    if (id == 2) {
        subindice = subindice2;
    }
    if (id == 3) {
        subindice = subindice3;
    }
    if (id == 4) {
        subindice = subindice4;
    }
    if (id == 5) {
        subindice = subindice5;
    }
    if (id == 6) {
        subindice = subindice6;
    }
    if (id == 7) {
        subindice = subindice7;
    }
    if (id == 8) {
        subindice = subindice8;
    }
    if (id == 9) {
        subindice = subindice9;
    }
    if (id == 10) {
        subindice = subindice10;
    }
    if (id == 11) {
        subindice = subindice11;
    }
    if (id == 12) {
        subindice = subindice12;
    }
    if (id == 13) {
        subindice = subindice13;
    }
    if (id == 14) {
        subindice = subindice14;
    }
    if (id == 15) {
        subindice = subindice15;
    }
    if (id == 16) {
        subindice = subindice16;
    }
    if (id == 17) {
        subindice = subindice17;
    }
    if (id == 18) {
        subindice = subindice18;
    }
    if (id == 19) {
        subindice = subindice19;
    }
    if (id == 20) {
        subindice = subindice20;
    }
    if (id > 20) {
        alert("Has añadido demasiados apartados. A partir de aquí puede que encuentres fallos al añadir imágenes en los siguientes SUBapartados.");
    }


    // Agregar elementos al nuevo div
    nuevoDiv.innerHTML = `
    <div> 
        <div class="contenedorSubapartados" id="contenedorSubapartados${subcontador}">

            <!--SUBTITULOS-->
            <label for="titulosSubapartados${subcontador}">Nuevo subtítulo:</label> <br> <!--Si está relleno, se añade,  si no, no pasa nada-->
            <input type="text" id="titulosSubapartados${subcontador}" class="subtitulo">
                
            <br><br>

            <!--SUBCONTENIDOS-->

            <label for="subcontenido${subcontador}">Nuevo subcontenido:</label> <br> 

            <div class="posicionamiento"> <!--Para que los botones de estilos aparezcan a la derecha-->
                <div>
                    <textarea class="subcontenido" id="subcontenido${subcontador}" cols="60" rows="15"></textarea> <br>
                </div>

                <div class="botones_estilos">
                    <button onclick="ponerNegrita('subcontenido${subcontador}')"> <img src="../imagenes/negrita.png" alt="Negrita" title="Negrita" width="10px"> </button> 
                    <button onclick="ponerCursiva('subcontenido${subcontador}')"> <img src="../imagenes/cursiva.png" alt="Cursiva" title="Cursiva" width="10px"> </button>
                    <button onclick="ponerSubrayado('subcontenido${subcontador}')"> <img src="../imagenes/subrayado.png" alt="Subrayado" title="Subrayado" width="10px"> </button>
                    <button onclick="ponerEnlace('subcontenido${subcontador}')"> <img src="../imagenes/enlace.png" alt="Enlace" title="Enlace" width="10px"> </button>
                    <button onclick="ponerEstiloPre('subcontenido${subcontador}')"> <img src="../imagenes//estilo.png" alt="Estilo" title="Estilo" width="10px"> </button>
                    <br>
                </div>
            </div>

            <br>

            <!--EJEMPLOS-->

            <input type="checkbox" id="casilla-SUBejemplo${subcontador}" class="casilla-subejemplo" onclick="aparecerElemento(this, 'introducirSUBEjemplo${subcontador}')">  <label for="casilla-SUBejemplo">¿Quieres incorporar un ejemplo?</label> 

            <div id="introducirSUBEjemplo${subcontador}" class="introducirSubejemplo"> <!--La primera clase es para cargar información del Json y la segunda es para ocultarlo-->
            <br>

            <label for="subContenidoHTML${subcontador}">1. Añade aquí el contenido HTML:</label> <br><br>

            <input type="checkbox" class="escribir-HTML subescribir-HTML" onclick="aparecerElemento(this, 'SUBparrafo-info-html${subcontador}')">¿Quieres mostrar el código HTML como texto? <br><br> <!--Para saber si la persona quiere escribir en el contenedor de la izquierda (azul), código html-->

            <div class="posicionamiento">
                <div>   
                <textarea class="subContenidoHTML" id="subContenidoHTML${subcontador}" cols="60" rows="15"></textarea>  <!--AQUÍ ES DÓNDE VA EL CONTENIDO DEL BLOQUE DE LA IZQUIERDA-->
                </div>

                <div class="botones_estilos">
                    <button onclick="ponerNegrita('subContenidoHTML${subcontador}')"> <img src="../imagenes/negrita.png" alt="Negrita" title="Negrita" width="10px"> </button> 
                    <button onclick="ponerCursiva('subContenidoHTML${subcontador}')"> <img src="../imagenes/cursiva.png" alt="Cursiva" title="Cursiva" width="10px"> </button>
                    <button onclick="ponerSubrayado('subContenidoHTML${subcontador}')"> <img src="../imagenes/subrayado.png" alt="Subrayado" title="Subrayado" width="10px"> </button>
                    <button onclick="ponerEnlace('subContenidoHTML${subcontador}')"> <img src="../imagenes/enlace.png" alt="Enlace" title="Enlace" width="10px"> </button>
                    <button onclick="ponerEstiloPre('subContenidoHTML${subcontador}')"> <img src="../imagenes//estilo.png" alt="Estilo" title="Estilo" width="10px"> </button>
                    <br>
                </div>
            </div> 
            <p id="SUBparrafo-info-html${subcontador}" style="color:rgb(180, 51, 51); display:none;">Nota: añade el contenido HTML entero, incorporando el &lt;!DOCTYPE&gt;, &lt;html&gt;, etc.</p>
            
            <!--Para seleccionar si quieres añadir una imagen, un ejemplo dinámico o un iframe-->

            <p>2. Selecciona si quieres incorporar una imagen, un ejemplo dinámico o un iframe:</p> <!--En principio, todos los divs tienen el display none, pero esto cambia con javascript según la opción de radio que se seleccione-->

            <input type="radio" class="elegir-ejemplo elegir-subejemplo" name="elegir-subEjemplo${subcontador}" value="IMAGEN" id="elegir-SUBimagen${subcontador}" onclick="mostrarDiv('SUBejemplo-con-imagen${subcontador}', 'SUBejemplo-dinamico${subcontador}', 'SUBejemplo-con-iframe${subcontador}')"> <!--Llama a la función con el id correspondiente al div que queremos mostrar, y el id correspondiente al div que queremos ocultar-->
            <label for="elegir-SUBimagen${subcontador}">Insertar imagen</label> <br>

            <input type="radio" class="elegir-ejemplo elegir-subejemplo" name="elegir-subEjemplo${subcontador}" value="DINAMICO" id="SUBelegir-ejemplo-dinamico${subcontador}" onclick="mostrarDiv('SUBejemplo-dinamico${subcontador}', 'SUBejemplo-con-imagen${subcontador}', 'SUBejemplo-con-iframe${subcontador}')"> <!--Llama a la función con el id correspondiente al div que queremos mostrar, y el id correspondiente al div que queremos ocultar-->
            <label for="SUBelegir-ejemplo-dinamico${subcontador}">Insertar ejemplo dinámico</label><br>
            
            <input type="radio" class="elegir-ejemplo elegir-subejemplo" name="elegir-subEjemplo${subcontador}" value="IFRAME" id="SUBelegir-iframe${subcontador}" onclick="mostrarDiv('SUBejemplo-con-iframe${subcontador}', 'SUBejemplo-con-imagen${subcontador}', 'SUBejemplo-dinamico${subcontador}')"> <!--La función mostrarDIV es para mostrar y ocultar el apartado que sale en caso de seleccionar cada opción-->
            <label for="SUBelegir-iframe${subcontador}">Insertar iframe</label>


            <!--PARA INSERTAR IMAGEN (Aparece en caso de haber seleccionado insertar imagen)-->
            <div id="SUBejemplo-con-imagen${subcontador}" class="SUBejemplo-con-imagen" style="display: none; margin-left:20px;">
                <p>Añade aquí la imagen de ejemplo:</p> 
                <input type="file" class="imagen SUBimagen" onchange="cargarSubImagen(${id}, ${subcontador}, ${subindice})">  <!--Llama a la función cargarImagen con el índice del apartado principal al que pertenece este subapartado y el subindice-->
                
                <p class="SUBinformacion-imagen" style="color:Red"></p>

                <br>

                <label for="anchoImagen">Ancho imagen:</label>
                <input type="number" name="anchoImagen" id="anchoImagen" class="anchoImagen SUBanchoImagen"> 
                <select name="medidaAnchoImagen" class="medidaAnchoImagen SUBmedidaAnchoImagen">
                    <option value="%">%</option>
                    <option value="px">px</option>
                    <option value="em">em</option>
                </select><br><br>

                <label for="altoImagen">Alto imagen:</label>
                <input type="number" name="altoImagen" id="altoImagen" class="altoImagen SUBaltoImagen"> 
                <select name="medidaAltoImagen" class="medidaAltoImagen SUBmedidaAltoImagen">
                    <option value="%">%</option>
                    <option value="px">px</option>
                    <option value="em">em</option>
                </select>

                <p>¿Quieres insertar botón de "inténtalo tú mismo"?</p>

                <input type="checkbox" id="insertar-boton-intentalo-imagen" class="SUBbotonIntentalo" value="añadirBoton">
                <label for="insertar-boton-intentalo-imagen">Insertar botón de "inténtalo tú mismo"</label>

                <br><br>
            </div>

            <!--PARA INSERTAR EJEMPLO DINAMICO (aparece en caso de hacer seleccionado insertar ejemplo dinámico)-->
            <div id="SUBejemplo-dinamico${subcontador}" class="SUBejemplo-dinamico" style="display: none; margin-left:20px;">

                <!--PARA INSERTAR BOTÓN DE "INTÉNTALO TÚ MISMO"-->
                <p>¿Quieres insertar botón de "inténtalo tú mismo"?</p>

                <input type="checkbox" id="insertar-boton-intentalo-dinamico" class="SUBbotonIntentalo2" value="añadirBoton">
                <label for="insertar-boton-intentalo-dinamico">Insertar botón de "inténtalo tú mismo"</label>
            </div>


            <!--PARA INSERTAR EJEMPLO CON IFRAME (aparece en caso de haber seleccionado insertar iframe)-->

            <div id="SUBejemplo-con-iframe${subcontador}" class="SUBejemplo-con-iframe" style="display: none; margin-left:20px;">
                <p>¿Qué quieres insertar?</p>

                <input type="radio" class="SUBelegir-iframe SUBelegir-pagina" name="elegir-SUBiframe${subcontador}" value="PAGINA" id="elegir-pagina${subcontador}" onclick="mostrarDiv('SUBpagina-externa${subcontador}', 'SUBiframe-archivo${subcontador}', 'SUBiframe-incrustar${subcontador}')"> <!--Llama a la función con el id correspondiente al div que queremos mostrar, y el id correspondiente al div que queremos ocultar-->
                <label for="elegir-pagina">Insertar página externa</label> <br>

                <input type="radio" class="SUBelegir-iframe SUBelegir-archivo" name="elegir-SUBiframe${subcontador}" value="ARCHIVO" id="elegir-archivo${subcontador}" onclick="mostrarDiv('SUBiframe-archivo${subcontador}', 'SUBpagina-externa${subcontador}', 'SUBiframe-incrustar${subcontador}')"> <!--Llama a la función con el id correspondiente al div que queremos mostrar, y el id correspondiente al div que queremos ocultar-->
                <label for="elegir-archivo">Insertar archivo</label><br>
                
                <input type="radio" class="SUBelegir-iframe SUBelegir-incrustar" name="elegir-SUBiframe${subcontador}" value="INCRUSTAR" id="elegir-incrustar${subcontador}" onclick="mostrarDiv('SUBiframe-incrustar${subcontador}', 'SUBpagina-externa${subcontador}', 'SUBiframe-archivo${subcontador}')"> <!--La función mostrarDIV es para mostrar y ocultar el apartado que sale en caso de seleccionar cada opción-->
                <label for="elegir-incrustar">Incrustar código (por ejemplo, de Youtube)</label>


                <!--Insertar página externa-->
                <div id="SUBpagina-externa${subcontador}" class="SUBpagina-externa" style="display: none; margin-left:40px;"> 
                    <p>Añade aquí la dirección de la página <ins>externa</ins> que quieras insertar como iframe:</p>
                    <input type="text" class="SUBdireccion-iframe">
                </div>

                <!--Insertar archivo-->
                <div id="SUBiframe-archivo${subcontador}" class="SUBiframe-archivo" style="display: none; margin-left:40px;"> 
                    <p>Selecciona el archivo:</p>
                    <input type="file" class="SUBarchivo">  <br>
                    <p class="SUBinfoArchivo" style="color: red;"></p>
                </div>

                <!--Incrustar código (ej. youtube)-->
                <div id="SUBiframe-incrustar${subcontador}" class="SUBiframe-incrustar" style="display: none; margin-left:40px;">
                    <p>Añade aquí el código que deseas incrustar:</p>
                    <input type="text" class="SUBcodigo-incrustracion">
                </div>

                <div id="apartado-intentalo-tu-mismo" >
                    <p>¿Quieres insertar botón de "inténtalo tú mismo"?</p>

                    <input type="checkbox" id="insertar-boton-intentalo-iframe" class="SUBbotonIntentalo3" value="añadirBoton">
                    <label for="insertar-boton-intentalo-iframe">Insertar botón de "inténtalo tú mismo"</label>
                </div>

            </div>

        </div>

        <br><br>

        <!--PARA INTRODUCIR BOTONES DE ATENCIÓN, CONOCE MÁS O PRUEBA ESTO-->
        
            <input type="checkbox" class="SUBcasilla-boton" onclick="aparecerElemento(this, 'introduceSUBBoton${subcontador}')"><label for="introduceSUBBoton${subcontador}">Introducir un botón (atención, conoce más o prueba esto)</label>
            
            <div id="introduceSUBBoton${subcontador}" class="introduceSUBBoton inicialmenteInvisible"> <br> <!--Div inicialmente invisible, que contiene las opciones de botón a introducir-->
                
                <!--Atención-->
                <input type="checkbox" class="SUBmostrarAtencion" onclick="aparecerElemento(this, 'introduceSUBatencion${subcontador}')">Añadir "Atención" <br>
                    
                    <div class="inicialmenteInvisible introduceSUBatencion" id="introduceSUBatencion${subcontador}">

                        <label for="añadirSUBatencion">Introduce el contenido de "Atención":</label> <br>
                        <div class="posicionamiento"> <!--Para que los botones de estilos aparezcan a la derecha-->

                            <div>
                            <textarea class="SUBatencion" id="añadirSUBatencion${subcontador}" cols="60" rows="15"></textarea>
                            </div>  

                            <div class="botones_estilos">
                                <button onclick="ponerNegrita('añadirSUBatencion${subcontador}')"> <img src="../imagenes/negrita.png" alt="Negrita" title="Negrita" width="10px"> </button> 
                                <button onclick="ponerCursiva('añadirSUBatencion${subcontador}')"> <img src="../imagenes/cursiva.png" alt="Cursiva" title="Cursiva" width="10px"> </button>
                                <button onclick="ponerSubrayado('añadirSUBatencion${subcontador}')"> <img src="../imagenes/subrayado.png" alt="Subrayado" title="Subrayado" width="10px"> </button>
                                <button onclick="ponerEnlacesDentro('añadirSUBatencion${subcontador}')"> <img src="../imagenes/enlace.png" alt="Enlace" title="Enlace" width="10px"> </button> <!--En este caso, los enlaces se abren en la propia página-->
                                <button onclick="ponerEstiloPre('añadirSUBatencion${subcontador}')"> <img src="../imagenes//estilo.png" alt="Estilo" title="Estilo" width="10px"> </button>
                                <br>
                            </div>

                        </div>

                    </div> 

                <!--Conoce más-->
                <input type="checkbox" class="SUBmostrarConoceMas" onclick="aparecerElemento(this, 'introduceSUBConoceMas${subcontador}')">Añadir "Conoce más" <br>
                
                    <div class="inicialmenteInvisible introduceSUBConoceMas" id="introduceSUBConoceMas${subcontador}">

                        <label for="añadirSUBConoceMas">Introduce el contenido de "Conoce más":</label> <br>
                        <div class="posicionamiento"> <!--Para que los botones de estilos aparezcan a la derecha-->

                            <div>
                            <textarea class="SUBconoceMas" id="añadirSUBConoceMas${subcontador}" cols="60" rows="15"></textarea>
                            </div>  

                            <div class="botones_estilos">
                                <button onclick="ponerNegrita('añadirSUBConoceMas${subcontador}')"> <img src="../imagenes/negrita.png" alt="Negrita" title="Negrita" width="10px"> </button> 
                                <button onclick="ponerCursiva('añadirSUBConoceMas${subcontador}')"> <img src="../imagenes/cursiva.png" alt="Cursiva" title="Cursiva" width="10px"> </button>
                                <button onclick="ponerSubrayado('añadirSUBConoceMas${subcontador}')"> <img src="../imagenes/subrayado.png" alt="Subrayado" title="Subrayado" width="10px"> </button>
                                <button onclick="ponerEnlacesDentro('añadirSUBConoceMas${subcontador}')"> <img src="../imagenes/enlace.png" alt="Enlace" title="Enlace" width="10px"> </button> <!--En este caso, los enlaces se abren en la propia página-->
                                <button onclick="ponerEstiloPre('añadirSUBConoceMas${subcontador}')"> <img src="../imagenes//estilo.png" alt="Estilo" title="Estilo" width="10px"> </button>
                                <br>
                            </div>

                        </div>

                    </div>   

                <!--Prueba esto-->
                <input type="checkbox" class="SUBmostrarPruebaEsto" onclick="aparecerElemento(this, 'introduceSUBPruebaEsto${subcontador}')">Añadir "Prueba esto"
                
                    <div class="inicialmenteInvisible introduceSUBPruebaEsto" id="introduceSUBPruebaEsto${subcontador}">

                        <label for="añadirSUBPruebaEsto">Introduce el contenido de "Prueba esto"</label> <br>
                        <div class="posicionamiento"> <!--Para que los botones de estilos aparezcan a la derecha-->

                            <div>
                            <textarea class="SUBpruebaEsto" id="añadirSUBPruebaEsto${subcontador}" cols="60" rows="15"></textarea>
                            </div>  

                            <div class="botones_estilos">
                                <button onclick="ponerNegrita('añadirSUBPruebaEsto${subcontador}')"> <img src="../imagenes/negrita.png" alt="Negrita" title="Negrita" width="10px"> </button> 
                                <button onclick="ponerCursiva('añadirSUBPruebaEsto${subcontador}')"> <img src="../imagenes/cursiva.png" alt="Cursiva" title="Cursiva" width="10px"> </button>
                                <button onclick="ponerSubrayado('añadirSUBPruebaEsto${subcontador}')"> <img src="../imagenes/subrayado.png" alt="Subrayado" title="Subrayado" width="10px"> </button>
                                <button onclick="ponerEnlacesDentro('añadirSUBPruebaEsto${subcontador}')"> <img src="../imagenes/enlace.png" alt="Enlace" title="Enlace" width="10px"> </button> <!--En este caso, los enlaces se abren en la propia página-->
                                <button onclick="ponerEstiloPre('añadirSUBPruebaEsto${subcontador}')"> <img src="../imagenes//estilo.png" alt="Estilo" title="Estilo" width="10px"> </button>
                                <br>
                            </div>

                        </div>
                        
                    </div>
            </div>


        <br><br>
        </div>
    </div>`

    // Agregar nuevo div al contenedor
    document.getElementById(`nuevos-subapartados${id}`).appendChild(nuevoDiv);

    // PARA SABER QUÉ SUBINDICE AUMENTAR
    
    if (id == 0) {
        subindice0++;
    }
    if (id == 1) {
        subindice1++;
    }
    if (id == 2) {
        subindice2++;
    }
    if (id == 3) {
        subindice3++;
    }
    if (id == 4) {
        subindice4++;
    }
    if (id == 5) {
        subindice5++;
    }
    if (id == 6) {
        subindice6++;
    }
    if (id == 7) {
        subindice7++;
    }
    if (id == 8) {
        subindice8++;
    }
    if (id == 9) {
        subindice9++;
    }
    if (id == 10) {
        subindice10++;
    }
    if (id == 11) {
        subindice11++;
    }
    if (id == 12) {
        subindice12++;
    }
    if (id == 13) {
        subindice13++;
    }
    if (id == 14) {
        subindice14++;
    }
    if (id == 15) {
        subindice15++;
    }
    if (id == 16) {
        subindice16++;
    }
    if (id == 17) {
        subindice17++;
    }
    if (id == 18) {
        subindice18++;
    }
    if (id == 19) {
        subindice19++;
    }
    if (id == 20) {
        subindice20++;
    }

    subcontador++;
    
}


