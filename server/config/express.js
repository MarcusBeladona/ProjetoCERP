const express = require("express");
const routes = require("./routes");
var cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;
