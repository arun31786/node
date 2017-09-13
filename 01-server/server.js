var express = require('express');

const port = 6565;
// port = 4444;

console.log(typeof express);

var server = express();

server.get('/', (req, res)=>{
    res.send({success: true})
});

server.listen(port, function(){
    console.log(`Server is running at ${port}`)
})
