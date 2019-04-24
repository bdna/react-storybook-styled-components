const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routers
require("./people")(app);

app.listen(port, () => console.log(`Server listening on ${port}`));
