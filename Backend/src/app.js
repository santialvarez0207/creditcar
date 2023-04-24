const express = require("express");
const bodyParser = require("body-parser");
const router = require('./network/routes');
const app = express();
const cors = require("cors");

const whitelist = process.env.URL_ACEPTED || ['http://localhost:8080/', 'http://localhost:4200/'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(null, true);
    }
  }
}

app.set('trust proxy', true);
app.use(cors(options));

app.use(bodyParser.json());
// configuraciones de escucha
app.set("port", process.env.PORT || 3000);


console.log("la aplicacion esta escuchando en http://localhost:" + app.get("port"))


router(app)


module.exports = app;