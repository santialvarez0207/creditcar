const express = require("express");
const bodyParser = require("body-parser");
const router = require('./network/routes');
const app = express();


app.use(bodyParser.json());
// configuraciones de escucha
app.set("port", process.env.PORT || 3000);


console.log("la aplicacion esta escuchando en http://localhost:" + app.get("port"))


router(app)


module.exports = app;