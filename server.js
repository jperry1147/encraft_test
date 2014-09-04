var http = require('http');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

console.log("ServerPort: "+server_port+", ServerIP: "+server_ip_address);

http.createServer(function(request, response) {
    response.writeHead(200);
    response.end('Hello Http');
});
console.log("http: %j", http);
http.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + port )
});
On application startup, the error I get is:

http.listen(server_port, server_ip_address, function () {
     ^
TypeError: Object #<Object> has no method 'listen'
    at Object.<anonymous> (/var/lib/openshift/53520a0be0b8cd914a000187/app-root/runtime