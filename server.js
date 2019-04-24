//HELLO
var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var id= 0;
var messages ={};
var users ={};


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/routes.js')(app)
mongoose.connect('mongodb://localhost/Mentorship');

require("./server/config/mongoose.js");

//port
var server= app.listen(8000, function() {
    console.log("listening on port 8000");
})

//sockets
var io= require('socket.io').listen(server)
io.sockets.on('connection', function(socket){
    console.log("Client/socket is connected!");
    console.log("Client/socket id is :", socket.id);

	socket.on("new_user", function(data){
		users[socket.id] = {name:data.name};
		socket.emit('existing_messages', messages);
		io.emit("display_new_user", {name:data.name})
	});
	socket.on("new_message", function(data){
		messages[id] = {name:data.name, message:data.message};
		io.emit("update_messages", messages[id]);
		id++;
	})
	socket.on("disconnect", function(){
		io.emit("user_disconnect", users[socket.id])
	})
       

})