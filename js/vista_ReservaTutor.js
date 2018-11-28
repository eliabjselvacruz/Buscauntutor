document.getElementById('btnPerfilT').addEventListener('click',function() {
    document.location.href = "/public/Formularios/vista_ReservaPerfilDocente.html";
});

document.getElementById('btnHome').addEventListener('click',function() {
      document.location.href = "/";
});

document.getElementById('btnPerfilE').addEventListener('click',function() {
    document.location.href = "/public/Formularios/vista_PerfilEstudiante.html";
});

document.getElementById('btnLogout').addEventListener('click',function() {
        firebase.auth().signOut();
        document.location.href = "vista_InicioSesion.html"; 
});