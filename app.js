var express = require('express');
const app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);

http.listen(5200,function() {
    console.log('server listening on port *5200');  
  });

app.get('/', function(req, res){
    res.sendfile(__dirname+'/index.html');
});

io.sockets.on('connection',function(socket){
    socket.on('sendMessage',function(data){
        io.sockets.emit('newMessage',{msg:data});
    });
});