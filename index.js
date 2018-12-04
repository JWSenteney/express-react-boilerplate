const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ foo: "bar" });
});

const PORT = process.env.port || 5000;
app.listen(PORT);
