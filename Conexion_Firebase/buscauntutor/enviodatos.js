//Autenticacion de google
//var provider = new firebase.auth.GoogleAuthProvider();

//Creando la referencia a la rama que debemos acceder en la base de datos
//var refCliente = firebase.database().ref('/clientes');

//Escuchando enviar el formulario
document.getElementById('registroU').addEventListener('submit',enviarFormulario)

//Enviar el formulario
function enviarFormulario(enviar) {
  enviar.preventDefault(); //Previene que algo ocurra y detener lo demás

//Capturando los valores del formulario
   var nombre = getInputVal('nombreU');
   var apellido = getInputVal('apellidoU');
   var correo = getInputVal('correoU');
   var telefono = getInputVal('telefonoU');
   var ciudad = getInputVal('ciudadU');

   //Llamando a la función guardarCliente(Creada más abajo)
   guardarCliente(nombre,apellido,correo,telefono,ciudad);
  
   //Limpiando el formulario
   document.getElementById("registroU").reset();
}

// Función para obtener los id´s de cada input del formulario
function getInputVal(id){
  return document.getElementById(id).value;
}

function guardarCliente(nombre,apellido,correo,telefono,ciudad){
var RefCliente = //Captura los datos a guardar
{
    nombreC : nombre,
    apellidoC : apellido,
    correoC : correo,
    telefonoC : telefono,
    ciudadC : ciudad
  };
  firebase.database().ref('clientes').push(RefCliente);

}
/*$('#registroU').click( function () {
    capturarDatos() 
   firebase.database().ref("/cliente" +cliente.uid).push(cliente)
  console.log(nombre+" "+apellido+" "+correo +" "+telefono+" "+ciudad)
});*/

