 //login
 var provider = new firebase.auth.GoogleAuthProvider();

 $('#login').click(function () {
     firebase.auth()
     .signInWithPopup(provider)
     .then(function(result){
         console.log(result.user);
         guardaDatos(result.user);
         $('#login').hide();
         $('#root').append("<img src='"+result.user.photoURL +"'></img>");
     });
         
 });

 //Escribir en la base de datos

 /*$('#guardar').click(function() {
     firebase.database().ref("cliente")
     .set({
         nombre:"Favio",
         edad:"15",
         sexo:"mucho",
         ciudad:"Juigalpa"

     });
 });*/

 //Esta funcion guarda los datos automaticamente

 function guardaDatos(user) {
     var usuario ={
         uid:user.uid,
         nombre : user.displayName,
         email: user.email,
         foto: user.photoURL
     }
     firebase.database().ref("usuarios/"+user.uid)
     .set(usuario)
 }

 //Aqui estoy leyendo de la base de datos
 //Escucha en la rama de la base de datos cuando alguien agregue algo
 firebase.database().ref("usuarios")
 .on("child_added", function (s) {
    var user= s.val();
    $('#root').append("<img width ='100px' src='"+user.foto +"'></img>");
 })
