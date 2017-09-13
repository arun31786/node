// read a file

var fs = require('fs');

var content = fs.readFileSync("./config.json");

console.log(typeof content);
console.log(content);

var fileData = content.toString();
console.log(typeof fileData);
console.log(fileData);

var fileObj = JSON.parse(fileData);

console.log(fileObj.port)
console.log(fileObj.host)

