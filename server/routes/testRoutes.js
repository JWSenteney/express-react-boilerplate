module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ foo: "bar" });
  });

  app.get("/api/test", (req, res) => {
    res.send("true");
  });
};
