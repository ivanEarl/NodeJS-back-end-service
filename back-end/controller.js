const http = require("http");
const port = 3000;

const server = http.createServer(
    (request, response) => {
        if (request.url === "/") {
            response.write("Hell world!");
            response.end();
        }

        if (request.url === "/api/users") {
            const Users = require("./api/users.js");
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

console.log(`Listening to port: ${port}`);

// function test(message) {
//     console.log("message: " + message);
// }

// test("Hell world!");

// low level handler
// server.on("connection", (socket) => {
//     console.log("new connection...");
// });