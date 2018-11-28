document.getElementById('btn_Home').addEventListener('click',function() {
    document.location.href = "/public/Formularios/Index.html";
});

document.getElementById('btn_Perfil').addEventListener('click',function() {
    document.location.href = "/public/Formularios/vista_PerfilUsuario.html";
});

document.getElementById('btn_logout').addEventListener('click',function() {
    firebase.auth().signOut();
    document.location.href = "vista_InicioSesion.html"; 
});