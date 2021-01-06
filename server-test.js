var express = require("express");
var request = require("request");
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.get("/global", function (req, res) {
    request({ url: "https://api.kawalcorona.com/" }, function (error, response, body) {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: "error", message: err.message });
        }
        res.json(JSON.parse(body));
    });
});
app.get("/global-sembuh", function (req, res) {
    request({ url: "https://api.kawalcorona.com/sembuh" }, function (error, response, body) {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: "error", message: err.message });
        }
        res.json(JSON.parse(body));
    });
});
app.get("/global-meninggal", function (req, res) {
    request({ url: "https://api.kawalcorona.com/meninggal" }, function (error, response, body) {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: "error", message: err.message });
        }
        res.json(JSON.parse(body));
    });
});
app.get("/global-positif", function (req, res) {
    request({ url: "https://api.kawalcorona.com/positif" }, function (error, response, body) {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: "error", message: err.message });
        }
        res.json(JSON.parse(body));
    });
});
app.get("/nasional", function (req, res) {
    request({ url: "https://api.kawalcorona.com/indonesia" }, function (error, response, body) {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: "error", message: err.message });
        }
        res.json(JSON.parse(body));
    });
});
app.get("/provinsi", function (req, res) {
    request({ url: "https://api.kawalcorona.com/indonesia/provinsi" }, function (error, response, body) {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: "error", message: err.message });
        }
        res.json(JSON.parse(body));
    });
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("listening on " + PORT); });
