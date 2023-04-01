const createError = require('http-errors');
const mongoose = require('mongoose');
const path = require("path");

const User = require('../models/User.model');

exports.homePage = async function (req, res) {
    res.sendFile(path.join(__dirname, "../views", "index.html"));

    if (req.session && req.session.user) {
        res.sendFile(path.join(__dirname, "../views", "index.html"));
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

exports.doLogin = async function (req, res) {
    if (!req.body) return;
    let id = req.body.id;
    let password = req.body.password;

    if (!id) {
        res.status(400).send({ message: "need id" });
        return;
    }
    else if (!password) {
        res.status(400).send({ message: "need password" });
        return;
    }

    let user = await User.findOne({ username: id }).select('password');
    if (!user) {
        res.status(400).send({ message: "there is no id" });
        return;
    }

    const isValid = await user.password == password;
    if (!isValid) {
        res.status(400).send({ message: "wrong password" });
        return;
    }

    req.session.user = user._id;
    res.redirect("/");
}

exports.signupPage = function (req, res) {
    res.sendFile(path.join(__dirname, "../views", "signup.html"));
}

exports.doSignup = async function (req, res) {
    if (!req.body) return;
    let id = req.body.id;
    let password = req.body.password;

    if (!id) {
        res.status(400).send({ message: "need id" });
        return;
    }
    else if (!password) {
        res.status(400).send({ message: "need password" });
        return;
    }

    let isExist = await User.findOne({ username: id });
    if (isExist) {
        res.status(400).send({ message: "already exists id" });
        return;
    }

    let user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: id,
        password: password
    });

    user.save(function (err, user) {
        if (err) {
            res.status(400).send({ message: err });
            return;
        }

        res.redirect("/");
    });
}