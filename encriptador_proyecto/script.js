const textArea = document.querySelector(".text-area");//con el querySelector voy a capturar el .textarea del html , con eso voy a estar almacenando lo que voy a escribir en el textarea
const mensaje = document.querySelector(".mensaje");//aca es donde va a aparecer el texto encriptado
const boton = documet.querySelector(".boton")
const campoPegar = document.querySelector(".btn-pegar")
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//ENCRIPTAR

function encriptar(stringEncriptado){//creo una funcion a la que le doy el parametro de stringencriptado que a traves de el se realizara todo el proceso de la encriptacion.
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]//creo la matriz donde voy a guardar lo que voy a almacenar las llaves, esta variable debe estar dentro de la funcion.
    stringEncriptado = stringEncriptado.toLowerCase()//se llama a el mismo para convertir cada texto con letras minusculas. stringencriptado se llama a el mismo para hacer la conversion a minusculas.
//debe tener un bucle for para que recorra cada una de las vocales que esta en la matriz
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){//para revisar si lo que se esta realizando es correcto debo realizar la verificacion con el metodo stringecriptado.include() y necesito pasarlo en parametro para verficar [i]indice i y la posicion [0]
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])//despues realizada la verificacion , voy a realizar la sustitucion con el metodo replaceAll para todos , necesito pasar la llave que se va a sustituir por el valor que sera sustituido.

        }
    }
    return stringEncriptado// para retornar el valor 
}

function btnEncriptar(){//boton
    const textoEncriptado = encriptar(textArea.value)//creo una variable const textoEncriptado que es a la que le voy a asignar el valor de la funcion encriptar(textArea.value) 
    mensaje.value = textoEncriptado //donde voy a mostrar el texto ya encriptado
    textArea.value = "" //para limpiar el campo
    mensaje.style.backgroundImage = "none"//

    // Limpia el contenido de la div con clase "mensaje_encriptado"
    const MensajeEncriptado = document.getElementById("mensaje-encriptado");
    const tituloMensaje = MensajeEncriptado.querySelector(".titulo_mensaje");
    const parrafoMensaje = MensajeEncriptado.querySelector(".parrafo");
    
    tituloMensaje.textContent = " ";
    parrafoMensaje.textContent = " ";
}


//DESENCRIPTAR

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()//se llama a el mismo para convertir cada texto con letras minusculas

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

        }
    }
    return stringDesencriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none"

    // Limpia el contenido de la div con clase "mensaje_encriptado"
    //primero realizamos la optencion del elemento-->Utilizamos el método getElementById para obtener una referencia al elemento con el ID "mensaje-encriptado"
    // Luego, utilizamos el método querySelector para obtener referencias a los elementos con las clases "titulo_mensaje" 
    const MensajeEncriptado = document.getElementById("mensaje-encriptado");
    const tituloMensaje = MensajeEncriptado.querySelector(".titulo_mensaje");
    const parrafoMensaje = MensajeEncriptado.querySelector(".parrafo");
    /* Después de obtener las referencias a los elementos, utilizamos la propiedad textContent para establecer los contenidos 
    deseados en los elementos correspondientes. En este caso, estamos actualizando el texto del título 
    y el párrafo dentro de la div. */
    tituloMensaje.textContent = " ";
    parrafoMensaje.textContent = " ";
    //esto ignifica que cada vez que haga clic no solo desencripte sino que tambien puedo eliminar o actualizar el texto.
}

/* Selección del elemento con la clase: En la función copiarTexto(), 
se cambió la forma en que se selecciona el botón para actualizar su contenido. 
En lugar de utilizar getElementById, que se usa para seleccionar elementos por su id, 
se utilizó querySelector para seleccionar elementos por su clase.*/
/*
El selector .btn-copiar selecciona un elemento con la clase btn-copiar.
Actualización del contenido del botón: Luego de copiar el texto al portapapeles, 
se actualiza el contenido del botón. Esto se hace asignando el nuevo valor al 
atributo innerHTML del botón seleccionado. Para dar un efecto de retroalimentación, 
el contenido del botón se cambia temporalmente a "¡Copiado!" por unos segundos y luego vuelve a "Copiar".
*/

  function copiarTexto() {
    // Obtener el elemento de texto y su valor
    var textarea = document.querySelector(".mensaje");
    var texto = textarea.value;

    navigator.clipboard.writeText(texto)//La línea de código navigator.clipboard.writeText(texto) intenta copiar el texto almacenado en la variable texto al portapapeles del usuario.
      .then(() => {//.then(() => { ... }) se ejecuta si la operación de copiado al portapapeles es exitosa. En este caso, esta parte del código cambia el contenido del botón a "¡Copiado!" temporalmente y, después de un corto período de tiempo, vuelve a cambiarlo a "Copiar" para proporcionar un feedback visual al usuario después de copiar el texto.
        var boton = document.querySelector(".btn-copiar");
        boton.innerHTML = "¡Copiado!";
        setTimeout(() => boton.innerHTML = "Copiar", 2000);
      })
      .catch(error => console.error('Error al copiar el texto: ', error));//.catch(error => console.error('Error al copiar el texto: ', error)); se encarga de atrapar y manejar cualquier error que ocurra durante la operación de escritura en el portapapeles utilizando la API del portapapeles (navigator.clipboard.writeText()).
    
    
    
    }//Si ocurre un error durante la escritura en el portapapeles, la función de flecha dentro del .catch() mostrará un mensaje de error en la consola. El mensaje de error incluirá el detalle del error (contenido de la variable error).
