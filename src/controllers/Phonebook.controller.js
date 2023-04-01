const mongoose = require('mongoose');
const Phonebook = require('../models/Phonebook.model');

exports.getAll = async function (req, res) {
    let phonebooks = await Phonebook.find({}).select()
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

exports.createOne = function (req, res) {
    console.log("createone");
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