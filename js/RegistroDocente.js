//Registrando al tutor
var correo = obtVal('correo_t');
var confcorreo = obtVal('correo_t_2');
var nombres = obtVal('nombres_t');
var apellidos = obtVal('apellidos_t');
var clave = obtVal('clave_t');
var confclave = obtVal('clave_t_2');
var nCedula  =  obtVal("identificacion_t");
var telefono = obtVal('telefono_t');
var Experiencia = obtVal('experiencia_t');
var idioma = obtVal('idioma_t');
var sexo = obtVal('genero_t');
var departamento = obtVal('ciudad_ts');

//Get the Elements from Controls Html for the storage
var Curriculum = document.getElementById('CV');
var Cedula = document.getElementById('inpCedula');
var Registrar = document.getElementById('btnRegistro');



//Authenticando al tutor por medio de su email y su contraseña.
Registrar.addEventListener('click',function () {
    if (correo = confcorreo) {
        
        if (clave = confclave) {

            firebase.auth().createUserWithEmailAndPassword(correo.value, clave.value).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                firebase.auth().onAuthStateChanged(function(user) {
                    console.log(user);
                    // if ( user ) {
                    //     alert("usted se ha registrado correctamente");
                    // } else if ( errorMessage === "The email address is already in use by another account.") {
                    //     alert("Este correo ya está registrado");
                    // }
                });
            });
        
         }else if ((clave.value === confclave.value)){
        alert("Las contraseñas no coinciden, intenta escribirlos nuevamente");
    }
        
        // ...
    }else if(correo.value === confcorreo.value){
        alert("Los correos no coinciden, intenta escribirlos nuevamente");
    }
});

//Guardando los datos del docente
Registrar.addEventListener('click',function () {
    if (nCedula.value === "" || correo.value === ""){
        alert("Estás loco?, tenés campos vacios, no podés registrarte");
    }
    else{

        saveData(nCedula.value,nombres.value,apellidos.value,correo.value,telefono.value,
        Experiencia.value,idioma.value,sexo.value,departamento.value)

    }
    
});

 function saveData(id,nombres,apellidos,correo,telefono,experiencia,idioma,sexo,departamento) {
    tutor ={
        cedula : id, //Cedula
        nombres : nombres,
        apellidos : apellidos,
        correo: correo,
        telefono: telefono,
        experiencia: experiencia,
        idioma : idioma,
        sexo: sexo,
        departamento: departamento

    }
    firebase.database().ref('tutores/'+ id).set(tutor);
}


//Get the Elements from Controls Html
// var Curriculum = document.getElementById('CV');
// var Cedula = document.getElementById('inpCedula');
// var Registrar = document.getElementById('btnRegistro');

Cedula.addEventListener('change', function (f) {
    //Get file to upload
    var ID = f.target.files[0];
    //Creating a storage ref
    var IdentRef = firebase.storage().ref('Identificaciones_Docente/' + ID.name);
    //Upload file to storage
   Registrar.addEventListener('click',function(){
    IdentRef.put(ID); 
   })
});

Curriculum.addEventListener('change', function (e) {
    //Get file to upload
    var CV = e.target.files[0];
    //Creating a storage ref
    var CedulaRef = firebase.storage().ref('CV_Docentes/' + CV.name);
    //Upload file to storage
   Registrar.addEventListener('click',function(){
   CedulaRef.put(CV);
   })
});

function obtVal(id) {
    return document.getElementById(id);
}