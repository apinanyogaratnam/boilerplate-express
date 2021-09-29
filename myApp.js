var express = require('express');
var app = express();
process.env.MESSAGE_STYLE = 'uppercase';

// app.get("/", function(req, res) {
//     res.send("Hello Express");
// });

app.use("/public", express.static(__dirname + "/public"));
app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/", function(req, res) {
    const absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

app.get("/json", function(req, res) {
    var response;
    if (process.env.MESSAGE_STYLE == "uppercase") {
        response = "Hello json".toUpperCase();
    } else {
        response = "Hello json";
    }
    res.json({"message": response});
});






























 module.exports = app;
