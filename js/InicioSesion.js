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

    //Lamando el metodo par la sesiondel usuario especifico
    sesionUsuario();
    
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
//Manejando las sesiones 
function sesionUsuario() {
var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
        });
    }
}

//Litening state of user
/*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is "signed in.""
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    }
  });*/