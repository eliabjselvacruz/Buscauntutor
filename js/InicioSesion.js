//Obteniendo los elementos del formulario de Incio de sesión
const txtEmail = document.getElementById('usuario');
const txtClave = document.getElementById('clave_u');
const btnLogin = document.getElementById('btn_login');
//const btnRegistro = document.getElementById('btn_registro');
const btnGoogle = document.getElementById('btn_google');
const frm_Sesion = document.getElementById('frm_Sesion');
//Incio de Sesión con Google
//Registrarse con la cuenta de google.
btnGoogle.addEventListener('click', () => {
    var provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth()
   .signInWithPopup(provider).
   then(function(result) {
       console.log(result.user);
       guardaDatos(result.user);
       //$('#btn_google').hide();
       //$('#btn_login').hide();
       $('#frm_Sesion').hide();
       alert("Hola: "+ result.user.displayName+" "+"has iniciado sesión");
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

//Obteniendo la información del usuario Actual
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.

    console.log(name);
}

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
