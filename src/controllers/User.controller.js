const createError = require('http-errors');
const mongoose = require('mongoose');
const path = require("path");

const Coin = require('../Models/User.model');

exports.homePage = async function (req, res) {
    if (req.session && req.session.user) {
        let user = await User.findById(req.session.user);

        /*
        res.render("pages/home", {
            name: user.first_name + ' ' + user.last_name,
            isLoggedIn: true
        });
        */
    } else {
        res.redirect("/login");
    }
}

exports.loginPage = function (req, res) {
    if (req.session && req.session.user) {
        // Redirect to log out.
        res.redirect("/logout");
    } else {
        res.sendFile(path.join(__dirname, "../views", "login.html"));
    }
}

exports.doLogin = function (req, res) {
    if (!req.body) return;
    let id = req.body.id;
    let password = req.body.password;

    if (!id)
    {
        res.status(400).send({message: "need id"});
    }
    else if (!password)
    {
        res.status(400).send({message: "need password"});
    }
    else
    {
        res.status(200).send();
    }
    
}