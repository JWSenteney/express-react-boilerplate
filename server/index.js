const express = require("express");
const app = express();

require("./routes/configRoutes")(app);
require("./routes/testRoutes")(app);

const PORT = process.env.port || 5000;
app.listen(PORT);
