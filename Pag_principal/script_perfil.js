function validarcambios(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cd = document.getElementById("cd").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmar-contrasena").value;

    /* Validaciones del perfil */

    if (nombre.trim() === "" || apellido.trim() === "" || cd.trim() === "" || correo.trim() === "" || contrasena.trim() === "" || confirmarContrasena.trim() === "") {
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
    alert("Registro exitoso. Redirigiendo a la página principal.");
    window.location.href = "pag_1.html";
}

