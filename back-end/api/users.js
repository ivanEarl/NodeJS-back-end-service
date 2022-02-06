const EventEmitter = require("events");

var url = "http://users.io/log";

class Users extends EventEmitter {
    getUsers() {
        //console.log("users got called...");
        return JSON.stringify(["Jane Doe", "Paul Williams", "John Spencer"]);
    }

    emitUsers() {
        //this.emit("Message: ", url);
    }
}

module.exports = Users;