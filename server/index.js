const express = require("express");
const mongoose = require("mongoose");

const config = require("./config");

// mongo initialization
mongoose.connect(config.environment.mongoURI);

// express initialization
const app = express();
require("./routes/configRoutes")(app);
require("./routes/testRoutes")(app);

const PORT = process.env.port || 5000;
app.listen(PORT);
