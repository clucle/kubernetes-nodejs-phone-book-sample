
const path = require("path");
const session = require("express-session");
const express = require('express');
const app = express();
const userRoutes = require("./src/routes/User.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', __dirname + '/src/views');
app.set('view engine', 'html');

app.use(userRoutes);

module.exports = app;