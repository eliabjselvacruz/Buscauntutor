//Configuraciones del todas las paginas al cargar los perfiles de usuarios
function Resultado() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().getRedirectResult().then(function(result) {
    })
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
  firebase.database().ref("clientes/" + user.uid).set(usuario);
}
  function cargarUsuario(resultado) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user != null) {
        console.log(user);
    
        document.querySelector('#nombre_g').textContent=user.displayName;


        try{
        document.querySelector('#name_E').textContent=user.displayName;
         }catch(ex){}
        //document.querySelector('#tel_E').textContent=user.phoneNumber;
        document.querySelector('#img_User').src = user.photoURL;
        document.querySelector('#correo_E').textContent=user.email;
        
        console.log(user.uid);
        guardaDatos(user);             
      }
  });
}
cargarUsuario(Resultado);