// read a file

var fs = require('fs');

console.log("before file reading code")

// async
fs.readFile("./index.js", function(err, data){
    if(err){
        console.log("Some error occurred");
    }
    console.log("file read with success");
    console.log(typeof data);

    var fileData = data.toString();
    console.log(typeof fileData);
    console.log(fileData);
    
});

console.log("after file reading code")