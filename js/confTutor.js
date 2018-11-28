//Iniciando sesion con el perfil docente
var loginT = document.getElementById('btn_login');
var correo = obtVal('usuario');
var clave = obtVal('clave_u');

//Iniciando sesion con el correo y la contraseña del docente
loginT.addEventListener('click', function() {

    firebase.auth().SignInWithEmailAndPassword(correo.value, clave.value);
    
})

function obtVal(id) {
    return document.getElementById(id);
}
