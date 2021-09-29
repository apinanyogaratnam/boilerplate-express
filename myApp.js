var express = require('express');
var app = express();
var bodyParser = require('body-parser');
process.env.MESSAGE_STYLE = 'uppercase';

// app.get("/", function(req, res) {
//     res.send("Hello Express");
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({"time": req.time});
});

app.get("/:word/echo", function(req, res) {
    res.json({"echo": req.params.word});
});

app.get("/name", function(req, res) {
    res.json({"name": req.query.first + " " + req.query.last});
});

app.post("/name", function(req, res) {
    res.json({"name": req.body.first + " " + req.body.last});
});

 module.exports = app;
