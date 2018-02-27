var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");
var http = require("http");

var socket_io = require("socket.io");
var io = socket_io();
var socketService = require('./services/socketService')(io);

mongoose.connect("mongodb://evelyn:hsl0054829531@ds059365.mlab.com:59365/coj");

app.use("/api/v1", restRouter);
app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, '../public')));
// app.listen(3000, function(){
//     console.log('Example app listening on port 3000!')
// });
app.use(function(req, res) {
    // send index.html to start client side
    res.sendFile("index.html", { root: path.join(__dirname, '../public/') });
});

var server = http.createServer(app);
io.attach(server);
server.listen(3000);

server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    throw error;
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr == 'string' ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log("Listening on " + bind);
}