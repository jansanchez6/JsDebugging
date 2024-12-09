function validarFormulario() {
    if (validarFormulario2()) {
        alert("Formulario correcto!");
    } else {
        alert("Formulario incorrecto!");
    }
}

function validarFormulario2() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje');

    // Verificar que el nombre tenga al menos 3 caracteres
    if (nombre.length < 3) {
        mensaje.innerText = "El nombre debe tener al menos 3 caracteres.";
        mensaje.style.color = "red";
        return false; // Retornar false si la validación falla
    }

    // Verificar que el email tenga un formato básico válido
    if (!email.includes('@') || !email.includes('.')) {
        mensaje.innerText = "El email no es válido.";
        mensaje.style.color = "red";
        return false; // Retornar false si la validación falla
    }

    // Si ambas validaciones pasaron, mostrar mensaje de éxito
    mensaje.innerText = "Formulario enviado correctamente.";
    mensaje.style.color = "green";
    return true; // Retornar true si todo es válido
}