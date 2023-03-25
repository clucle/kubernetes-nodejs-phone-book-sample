const createError = require('http-errors');
const mongoose = require('mongoose');
const path = require("path");

const User = require('../models/User.model');

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

exports.signupPage = function (req, res) {
    res.sendFile(path.join(__dirname, "../views", "signup.html"));
}

exports.doSignup = async function (req, res) {
    if (!req.body) return;
    let id = req.body.id;
    let password = req.body.password;

    if (!id)
    {
        res.status(400).send({message: "need id"});
        return;
    }
    else if (!password)
    {
        res.status(400).send({message: "need password"});
        return;
    }

    let isExist = await User.findOne({id:id});
    if (isExist)
    {
        res.status(400).send({message: "already exists id"});
        return;
    }

    let user = new User({
        id: id,
        password: password
    });

    user.save(function(err) {
        if (err) 
        {
            res.status(400).send({message: err});
            return;
        }

        req.session.user = id;
        res.redirect("/");
    });
}