
//Iniciando sesion con el perfil docente
var loginT = document.getElementById('btn_login');
var correo = obtVal('usuario');
var clave = obtVal('clave_u');

//Iniciando sesion con el correo y la contraseña del docente
loginT.addEventListener('click', function() {

    firebase.auth().signInWithEmailAndPassword(correo.value, clave.value).catch(
        function (e) {
            var errorMessage = e.message;
            console.log(errorMessage);
        }
    );
    
});

//Escuchando la actividad de sesion de usuario
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("El usuario está logged");
      console.log(user);
     loginT.addEventListener('click',function () {
      document.location.href = "/public/Formularios/vista_PerfilDocente.html";
    });
    } else {
      // No user is signed in.
      console.log("El usuario no está logged")
    }
  });

  //Obteniedo los datos para la sesión del docente.
function obtVal(id) {
    return document.getElementById(id);
}


