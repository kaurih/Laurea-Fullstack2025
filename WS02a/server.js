const http = require("http");

function createServer(port) {
    const server = http.createServer(function(request, response) {
        if (request.url === "/" && request.method === "GET") {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write("Hello, World!");
            response.end();
        } else if (request.url === "/about" && request.method === "GET") {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write("About page");
            response.end();
        } else if (request.url === "/contact" && request.method === "GET") {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write("Contact us");
            response.end();
        } else {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.write("Not Found");
            response.end();
        }
    });

    server.listen(port, function(error) {
        if (error) {
            console.log("Oops", error);
        } else {
            console.log("Listening on port " + port);
        }
    });

    return server;
}

module.exports = createServer;
