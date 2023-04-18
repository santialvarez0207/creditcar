const mongoose = require("mongoose");

const URI = "mongodb+srv://santialvarez0207:Copito2003_db@creditcar.nfsqoia.mongodb.net/test";

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;