const express = require("express");
const request = require("request");

const app = express();

let err = {message: ""};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/global", (req, res) => {
  request(
    { url: "https://api.kawalcorona.com/" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }
      res.json(JSON.parse(body));
    }
  );
});

app.get("/global-sembuh", (req, res) => {
  request(
    { url: "https://api.kawalcorona.com/sembuh" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }
      res.json(JSON.parse(body));
    }
  );
});

app.get("/global-meninggal", (req, res) => {
  request(
    { url: "https://api.kawalcorona.com/meninggal" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }
      res.json(JSON.parse(body));
    }
  );
});

app.get("/global-positif", (req, res) => {
  request(
    { url: "https://api.kawalcorona.com/positif" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }
      res.json(JSON.parse(body));
    }
  );
});

app.get("/nasional", (req, res) => {
  request(
    { url: "https://api.kawalcorona.com/indonesia" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }
      res.json(JSON.parse(body));
    }
  );
});

app.get("/provinsi", (req, res) => {
  request(
    { url: "https://api.kawalcorona.com/indonesia/provinsi" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }
      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
