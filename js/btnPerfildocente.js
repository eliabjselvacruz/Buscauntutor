//Cerrando la sesión del usario.
document.getElementById('btn_salir').addEventListener('click',function() {
    firebase.auth().signOut();
    document.location.href = "vista_InicioSesion.html"; 
  });
  //Llamando a la configuración de la pagina de cambio de contraseña.
  document.getElementById('btn_cambioC').addEventListener('click',function() { 
    document.location.href = "vista_ActualizacionClaveDocente.html"; 
  });
  //Llamando regresando al perfil del usuario ya logged.
  document.getElementById('btn_toperfil').addEventListener('click',function() {
    document.location.href = "vista_PerfilDocente.html";
  });

  document.getElementById('btn_Ajustes').addEventListener('click',function() {
    document.location.href = "vista_EdicionPerfilDocente.html";
  });
  