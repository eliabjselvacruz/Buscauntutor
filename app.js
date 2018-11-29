var express = require('express');
const app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);

http.listen(5200,function() {
    console.log('server listening on port *5200');  
  });

//Recursos
app.use(express.static(__dirname+'/recursos'));
app.use(express.static(__dirname+'/js'));
// app.use(express.static(__dirname+'/public/Formularios'));

//Routes
app.get('/', function(req, res){
    res.sendfile(__dirname+'/index.html');
});

app.get('/public/Formularios/vista_RegistroDocente.html',function(req,res) {
    try {
        res.sendFile(__dirname+'/public/Formularios/vista_RegistroDocente.html'); 
    } catch (error) {
        res.sendFile('C:/Buscauntutor/public/Formularios/vista_RegistroDocente.html');
    }
});

app.get('/public/Formularios/vista_InicioSesion.html',function(req,res) {
    res.sendFile(__dirname+'/public/Formularios/vista_InicioSesion.html');
});

app.get('/public/Formularios/vista_PerfilEstudiante.html',function(req,res) {
    res.sendFile(__dirname+'/public/Formularios/vista_PerfilEstudiante.html');
});

app.get('/public/Formularios/vista_ActualizacionClaveEstudiante.html',function(req,res){
    res.sendFile(__dirname+'/public/Formularios/vista_ActualizacionClaveEstudiante.html');
});

app.get('/public/Formularios/vista_EdicionPerfilEstudiante.html',function(req,res) {
    res.sendFile(__dirname+'/public/Formularios/vista_EdicionPerfilEstudiante.html');
});

app.get('/public/Formularios/Index.html',function(req,res) {
    res.sendFile('C:/Buscauntutor/Index.html');
});

app.get('/public/Formularios/vista_ReservaTutor.html',function(req,res) {
    res.sendFile(__dirname+'/public/Formularios/vista_ReservaTutor.html');
});

app.get('/public/Formularios/vista_chat.html',function(req,res) {
    res.sendFile(__dirname+'/public/Formularios/vista_chat.html');
});

app.get('/public/Formularios/vista_ReservaPerfilDocente.html',function(req, res) {
    res.sendFile(__dirname+'/public/Formularios/vista_ReservaPerfilDocente.html');
});

app.get('/public/Formularios/vista_PerfilDocente.html',function(req, res) {
    res.sendFile(__dirname+'/public/Formularios/vista_PerfilDocente.html');
});

app.get('/public/Formularios/vista_PerfilDocente.html',function(req,res) {
   res.sendFile(__dirname+'/public/Formularios/vista_PerfilDocente.html'); 
});

app.get('/public/Formularios/vista_EdicionPerfilDocente.html',function(req,res) {
    res.sendFile(__dirname+'/public/Formularios/vista_EdicionPerfilDocente.html');
});

app.get('/public/Formularios/vista_ActualizacionClaveDocente.html',function(req,res) {
    res.sendfile(__dirname+'/public/Formularios/vista_ActualizacionClaveDocente.html');
});

//Message sockets
io.sockets.on('connection',function(socket){
    socket.on('sendMessage',function(data){
        io.sockets.emit('newMessage',{msg:data});
    });
});