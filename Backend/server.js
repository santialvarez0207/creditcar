const express = require("express");
//const cors = require("cors");
//const morgan = require("morgan");
//const path = require('path');

const app = express();

// configuraciones de escucha
app.set("port", process.env.PORT || 3000);


app.listen(app.get("port"));

console.log("la aplicacion esta escuchando en http://localhost:" + app.get("port"))

