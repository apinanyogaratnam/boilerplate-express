var express = require('express');
var app = express();
const mySecret = process.env['MESSAGE_STYLE']


console.log("Hello World");

// app.get("/", function(req, res) {
//     res.send("Hello Express");
// });
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    const absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

app.get("/json", function(req, res) {
    var response;
    if (mySecret === "uppercase") {
        response = "Hello json".toUpperCase();
    } else {
        response = "Hello json";
    }
    res.json({"message": response});
});






























 module.exports = app;
