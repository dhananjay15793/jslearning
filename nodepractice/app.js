// //console.log("hey how r u !");
// var http = require("http");  

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-Type':'text/plain'});
//     res.end("hey how r u ?!");


// }).listen(8081);
// console.log('Server running at localhost:8081/');  

var adder =require("./stuff");
console.log(adder.adder(10,29));
