require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Set up default mongoose connection
const mongoDB = `mongodb://${process.env.DB_USER}:${process.env.DB_PSWD}@${process.env.DB_HOST}`;
// mongoose.Promise = global.promise;
mongoose.connect(mongoDB);
// Get the default connection
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  // once database connection is established, start app.
  app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`);
  });
})

// Allow app to read data from body
app.use(bodyParser.urlencoded({extended: true}));
// Allow app to read static files
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendfile("views/index.html");
});