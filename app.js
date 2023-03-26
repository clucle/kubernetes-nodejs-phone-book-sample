
const path = require("path");
const session = require("express-session");
const express = require('express');
const app = express();
const userRoutes = require("./src/routes/User.route");
const phonebookRoutes = require("./src/routes/Phonebook.route");
const Memorystore = require('memorystore')(session)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', __dirname + '/src/views');
app.set('view engine', 'html');

let sessionPeriod = 60*60*1000; // 1000 = 1s -> 1 // 1 hour
app.use(session({
    secret: "clucle",
    resave: false,
    saveUninitialized: true,
    store: new Memorystore({ checkPeriod: sessionPeriod }),
    cookie: {
        maxAge: sessionPeriod
    }
}))

app.use(userRoutes);
app.use(phonebookRoutes);

module.exports = app;