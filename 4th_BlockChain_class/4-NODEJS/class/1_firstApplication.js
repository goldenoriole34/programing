var http = require("http");
var dt = require("./2_myfirstmodule")

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write("The date and time are currently : " + dt.myDateTime());
    response.end('Hello World\n');
}).listen(8080);

console.log(`Server running at http://127.0.0.1:8080\n`);
