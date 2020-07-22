window.onload = iniciar;

function iniciar() {
    // document.getElementById('enviar').addEventListener('click', validar, false);
}

function validaNombre() {
    var elemento = document.getElementById('nombre');
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Como que falta alguito")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "el nombre debe tener entre 2 y 15 caracteres")
        }


        return false;
    }
    return true;
}


function validaProfesion() {
    var elemento = document.getElementById('profesion');
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Que estudiaste al fin")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "el la profesion debe tener entre 18 y 100 letras")
        }

        return false;
    }
    return true;
}

function validaEdad() {
    var elemento = document.getElementById('edad');
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "que tan viejo estas?")
        }
        if (elemento.validity.rangeOverflow) {
            error2(elemento, "el valor debe ser menor a 100")
        }
        if (elemento.validity.rangeUnderflow) {
            error2(elemento, "tienes que ser mayor de edad de 18 o mayor")
        }

        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById('telefono');
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "introducid un numero de telefono humano")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "el nombre debe tener 10 numeros")
        }

        return false;
    }
    return true;
}

function validaDireccion() {
    var elemento = document.getElementById('direccion');
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "introducid la direccion de tu chosita")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "el nombre de la casa tiene mas de 18 caracteres")
        }

        return false;
    }
    return true;
}

function validaEmail() {
    var email = document.getElementById('email').value;
    var msg = '';
    var hayArroba = false;
    var hayPunto = false;
    console.log("entre", email)

    for (var i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            hayArroba = true;
        }
        if (email[i] == '.') {
            hayPunto = true;
        }
    }
    if (hayArroba == false && hayPunto == false) {
        msg = 'Faltan el símbolo \'@\' y el \'.\'';
    } else {
        if (hayArroba == false) {
            error2(document.getElementById('email'), 'Falta el símbolo \'@\' en el correo electrónico.')
        }

        if (hayPunto == false) {
            error2(document.getElementById('email'), "Falta el símbolo \'.\' en el correo electrónico.")
        }
    }
    return hayArroba && hayPunto;
    return msg;
}

function validar(e) {
    borrarError();
   
    if (validaNombre() && validaEdad() && validaTelefono() && validaEmail() && confirm('Pulsad aceptar si deseas enviar')) {
        return true
    } else {
       
        return false;

    }
    return false;
}

function error(elemento) {
    document.getElementById('mensajeError').innerHTML =
        elemento.validationMessage;
    elemento.className = 'error';
    elemento.focus();
}

function error2(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = 'error';
    elemento.focus();
}

function borrarError() {
    var formulario = document.forms[0];
    for (let i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}
