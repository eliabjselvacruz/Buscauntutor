
document.getElementById('btnPerfilT').addEventListener('click',function() {
    document.location.href = "/public/Formularios/vista_PerfilDocente.html";
});

document.getElementById('btn_salir').addEventListener('click',function() {
    firebase.auth().signOut();
    document.location.href = "vista_InicioSesion.html"; 
});

document.getElementById('home').addEventListener('click',function() {
    document.location.href="/"
  });


document.getElementById('btn_toperfil').addEventListener('click',function() {
    document.location.href = "/public/Formularios/vista_PerfilDocente.html";
});
document.getElementById('btn_Ajustes').addEventListener('click',function() {
    document.location.href = "/public/Formularios/vista_EdicionPerfilDocente.html";
});
document.getElementById('btn_cambioC').addEventListener('click',function() {
    document.location.href = "/public/Formularios/vista_ActualizacionClaveDocente.html";
});