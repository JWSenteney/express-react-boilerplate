const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ foo: "bar" });
});

app.get("/api/test-proxy", (req, res) => {
  res.send("true");
});

const PORT = process.env.port || 5000;
app.listen(PORT);
