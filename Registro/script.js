function validarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cd = document.getElementById("cd").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmar-contrasena").value;
    var facultad = document.getElementById("facultad").value;

    // Validación de campos (puedes personalizar estas validaciones)
    if (nombre.trim() === "" || apellido.trim() === "" || cd.trim() === "" || correo.trim() === "" || contrasena.trim() === "" || confirmarContrasena.trim() === "" || facultad === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (!/^\d{10}$/.test(cd)) {
        alert("La cédula debe contener 10 dígitos numéricos.");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(correo)) {
        alert("El correo electrónico no es válido.");
        return;
    }

    // Si llegamos aquí, todos los campos están completados correctamente
    alert("Registro exitoso. Redirigiendo al inicio de sesión.");
    window.location.href = "../Login/Inicio.html";
}