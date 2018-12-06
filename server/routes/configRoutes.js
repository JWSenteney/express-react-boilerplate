const config = require("../config");

module.exports = app => {
  app.get("/config", (req, res) => {
    res.send(config.ui);
  });

  app.get("/config/somePublicKey", (req, res) => {
    res.send(config.ui.somePublicKey);
  });
};
