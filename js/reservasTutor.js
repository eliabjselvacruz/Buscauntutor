//Extrayendo datos de docentes desde firebase.
var contador = 1;
var  u;
var datosTutoresref = firebase.database().ref('/tutores');
datosTutoresref.on("child_added",function (snapshot) {
     u = snapshot.val();
    
    contador++;
    document.querySelector('#nom_t').textContent = u.nombres +" "+u.apellidos;
    document.querySelector('#Experiencia').textContent = "Años de exeriencia: "+u.experiencia;
    document.querySelector('#tutoria').textContent = u.tutoria;
    document.querySelector('#Nombre_t').textContent = u.nombres +" "+u.apellidos;

    $("#tarjeta_Docente").clone().appendTo("#listado_Docente");

})//Cierre del metodo de escucha
