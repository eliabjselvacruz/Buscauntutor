//Get the Elements from Controls Html
var Curriculum = document.getElementById('CV');
var Cedula = document.getElementById('inpCedula');
var Registrar = document.getElementById('btnRegistro');

Cedula.addEventListener('change', function (f) {
    //Get file to upload
    var ID = f.target.files[0];
    //Creating a storage ref
    var IdentRef = firebase.storage().ref('Identificaciones_Docente/' + ID.name);
    //Upload file to storage
   Registrar.addEventListener('click',function(){
    IdentRef.put(ID); 
   })
})

Curriculum.addEventListener('change', function (e) {
    //Get file to upload
    var CV = e.target.files[0];
    //Creating a storage ref
    var CedulaRef = firebase.storage().ref('CV_Docentes/' + CV.name);
    //Upload file to storage
   Registrar.addEventListener('click',function(){
    CedulaRef.put(CV);
   })
})