const http = require("http");
const port = 3000;
const Users = require("./api/users.js");

const server = http.createServer(
    (request, response) => {
        if (request.url === "/") {
            response.write("Hell world!");
            response.end();
        }

        if (request.url === "/api/users") {
            const person = new Users();
            var result = person.getUsers();
            response.write(result);
            response.end();
        }

        if (request.url === "/api/items") {
            response.write("write items API");
            response.end();
        }
    }
);

server.listen(port);
