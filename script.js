// Definimos en el js

function agregar(valor) {
    // Busca el elemento con el id "pantalla" en el documento HTML.
    // Luego, toma su propiedad "value" (el contenido actual del input o textarea).
    // Con "+= valor", agrega el valor recibido como parámetro al contenido actual.
    document.getElementById("pantalla").value += valor;
}


// borrar, vacia la pantalla 
function borrar() {
    // Busca el elemento con el id "pantalla" y establece su valor a una cadena vacía.
    document.getElementById("pantalla").value = "";
}


// calcular
function calcular() {
    const valorPantalla = document.getElementById("pantalla").value;
    const resultado = eval(valorPantalla); // eval() evalua la expresión matemática

    document.getElementById("pantalla").value = resultado; // Muestra el resultado en la pantalla
}