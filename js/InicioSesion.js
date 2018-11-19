//Obteniendo los elementos del formulario de Incio de sesión
const btnGoogle = document.getElementById('btn_google');
//Incio de Sesión con Google
//Registrarse con la cuenta de google.
btnGoogle.addEventListener('click', () => {
    var provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider).
   then(function(result) {
       guardaDatos(result.user);
      document.location.href = "vista_PerfilUsuario.html";
             
   }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorCode);
    console.log(errorMessage);
    console.log(email);
    });    
});

//Guardando datos del usuario registrado con cuenta de google
function guardaDatos(user) {
        var usuario ={
            uid:user.uid,
            nombre : user.displayName,
            email: user.email,
            foto: user.photoURL,
            telefono: user.phoneNumber
        }
        firebase.database().ref("clientes/" + user.uid)
        .set(usuario);
    }

/*var btnGoogle = document.getElementById('btn_google');
btnGoogle.addEventListener('click', () =>{
    sesionGoogle();
})*/

document.getElementById('registro_T').addEventListener('click',function() {
    document.location.href = "/public/Formularios/vista_RegistroDocente.html";
});

document.getElementById('home').addEventListener('click',function() {
    document.location.href = "/"
});