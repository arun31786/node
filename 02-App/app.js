var express = require('express');
var bodyParser = require('body-parser');

var server = express();
server.use(bodyParser.json());

const port = 9090;
const host = '127.0.0.1';

server.get('/:username', function(req, res){
    console.log(req.params.username);
    var user = req.params.username;
    res.send("Hello "+user);
});

server.post("/login", (req, res)=>{// arrow function - es6
    var flag = false;
    console.log(req.body.username);
    console.log(req.body.password);

    if(req.body.username === req.body.password){
        flag = true;
    }
    res.send({success: flag});
})

server.listen(port, host, ()=>{
    console.log(`App is running at ${host}:${port}`)
});