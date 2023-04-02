const mongoose = require('mongoose');
const Phonebook = require('../models/Phonebook.model');
const User = require('../models/User.model');

exports.getAll = async function (req, res) {
    let phonebooks = await Phonebook.find({}).select();
    if (!phonebooks) {
        res.status(400).send({ message: "something wrong" });
        return;
    }

    console.log(phonebooks);
    res.end(JSON.stringify(Object.assign({}, phonebooks)));
}

exports.getOne = function (req, res) {
    console.log("getOne");
    const { id } = req.params;
    console.log(id);
}

exports.createOne = async function (req, res) {
    if (!req.session && !req.session.user) {
        res.status(400).end();
        return;
    }

    let user = await User.findOne({ _id: mongoose.Types.ObjectId(req.session.user) });
    if (user === null) {
        res.status(400).end();
        return;
    }

    let phonebook = new Phonebook({
        _id: new mongoose.Types.ObjectId(),
        uid: req.session.user,
        name: req.body.name ? req.body.name : "",
        phone: req.body.phone ? req.body.phone : "",
        email: req.body.email ? req.body.email : "",
        memo: req.body.memo ? req.body.memo : ""
    });

    phonebook.save(function (err, phonebook) {
        if (err) {
            res.status(400).send({ message: err });
            return;
        }

        res.status(200).send({ message: phonebook });
    });
}

exports.updateOne = function (req, res) {
    console.log("updateOne");
    const { id } = req.params;
    console.log(id);
}

exports.deleteOne = function (req, res) {
    console.log("deleteOne");
    const { id } = req.params;
    console.log(id);
}