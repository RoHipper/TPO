const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');

form.addEventListener("submit", registrar)

function registrar(e) {
    registrarNombre(e)
    registrarApellido(e)
    registrarEmail(e)
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

function registrarEmail(e) {
    if (email.value == '' || email.value == null) {
        alert('Por favor, ingrese su email')
        e.preventDefault()
    }
}