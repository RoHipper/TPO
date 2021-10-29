const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const sexo = document.getElementById('sexo');
const dias = document.getElementsByName('dias');

form.addEventListener("submit", registrar)

function registrar(e) {
    registrarNombre(e)
    registrarApellido(e)
    registrarEdad(e)
    registrarDias(e)
    registrarSexo(e)
}

function registrarNombre(e) {
    if (nombre.value == '' || nombre.value == null) {
        alert('Por favor, ingrese su nombre')
        e.preventDefault()
    }
}

function registrarApellido(e) {
    if (apellido.value == '' || apellido.value == null) {
        alert('Por favor, ingrese su apellido')
        e.preventDefault()
    }
}

function registrarEdad(e) {
    if (edad.value == '' || edad.value == null) {
        alert('Por favor, ingrese su edad')
        e.preventDefault()
    }
}

function registrarDias(e) {
    if (dias[1].checked == false && dias[0].checked == false) {
        alert('Por favor, seleccione los días deseados')
        e.preventDefault()
    }
}


