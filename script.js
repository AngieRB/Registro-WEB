document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var nombre = document.getElementById('nombre').value;
        var cedula = document.getElementById('cedula').value;
        var email = document.getElementById('email').value;
        var contraseña = document.getElementById('contraseña').value;
        var confirmarContraseña = document.getElementById('confirmar-contraseña').value;
        var facultad = document.getElementById('unidades-academicas').value;
    
        // Aquí puedes agregar la lógica de validación del formulario
    
        // Ejemplo de salida en consola
        console.log('Nombre:', nombre);
        console.log('Cedula:', cedula);
        console.log('Correo Electrónico:', email);
        console.log('Contraseña:', contraseña);
        console.log('Confirmar Contraseña:', confirmarContraseña);
        console.log('Facultad:', facultad);
    });
});
