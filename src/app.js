let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./ws/stream');
let path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/homepage',(req,res)=>{
    //res.send("Hello World");
    //console.log(req.query.user_type);
    if(req.query.user_type=="Consellor"){
        res.sendFile(__dirname+'/consellor.html'); 

    }
    else{
        res.sendFile(__dirname+'/student.html')
    }
});



app.get('/videocall',(req,res)=>{
    res.sendFile(__dirname+'/videocall.html');
});
io.of('/stream').on('connection', stream);

server.listen(3000);