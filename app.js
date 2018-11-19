var express = require('express');
const app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);

http.listen(5200,function() {
    console.log('server listening on port *5200');  
  });


app.use(express.static(__dirname+'/recursos'));
app.use(express.static(__dirname+'/js'));
// app.use(express.static(__dirname+'/public/Formularios'));

app.get('/', function(req, res){
    res.sendfile(__dirname+'/index.html');
});

app.get('/public/Formularios/vista_RegistroDocente.html',function(req,res) {
   res.sendFile(__dirname+'/public/Formularios/vista_RegistroDocente.html'); 
});

app.get('/public/Formularios/vista_InicioSesion.html',function(req,res) {
    res.sendFile(__dirname+'/public/Formularios/vista_InicioSesion.html');
});

app.get('/public/Formularios/vista_PerfilUsuario.html',function(req,res) {
    res.sendFile(__dirname+'/public/Formularios/vista_PerfilUsuario.html');
});

app.get('/public/Formularios/vista_ActualizacionClaveUsuario.html',function(req,res){
    res.sendFile(__dirname+'/public/Formularios/vista_ActualizacionClaveUsuario.html');
});

app.get('/public/Formularios/vista_EdicionPerfilUsuario.html',function(req,res) {
    res.sendFile(__dirname+'/public/Formularios/vista_EdicionPerfilUsuario.html');
});

app.get('/public/Formularios/Index.html',function(req,res) {
    res.sendFile('C:/Buscauntutor/Index.html');
});

app.get('/public/Formularios/vista_ReservaTutor.html',function(req,res) {
    res.sendFile(__dirname+'/public/Formularios/vista_ReservaTutor.html');
});


io.sockets.on('connection',function(socket){
    socket.on('sendMessage',function(data){
        io.sockets.emit('newMessage',{msg:data});
    });
});