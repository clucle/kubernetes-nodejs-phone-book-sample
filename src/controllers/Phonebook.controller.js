const mongoose = require('mongoose');
const Phonebook = require('../models/Phonebook.model');
const User = require('../models/User.model');

exports.getAll = async function (req, res) {
    let phonebooks = await Phonebook.find({ uid: req.session.user }).select();
    if (!phonebooks) {
        res.status(400).send({ message: "something wrong" });
        return;
    }

    res.end(JSON.stringify(Object.assign({}, phonebooks)));
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

exports.updateOne = async function (req, res) {
    if (!req.body) {
        res.status(400).end();
        return;
    }

    const { id } = req.params;
    const { name, phone, email, memo } = req.body;

    let phonebook = await Phonebook.findOneAndUpdate(
        {
            uid: req.session.user,
            _id: mongoose.Types.ObjectId(id)
        },
        {
            name: name,
            phone: phone,
            email: email,
            memo: memo
        },
        {
            new: true
        });

    if (phonebook === null) {
        res.status(400).end();
        return;
    }

    res.status(200).send({ message: phonebook });
}

exports.deleteOne = async function (req, res) {
    const { id } = req.params;
    await Phonebook.findOneAndDelete({ uid: req.session.user, _id: mongoose.Types.ObjectId(id) });

    res.status(200).send({ message: id });
}

exports.bulkDelete = function (req, res) {
    if (!req.body) {
        res.status(400).end();
        return;
    }

    if (!req.body.idArray || req.body.idArray.length == 0) {
        res.status(400).send({ message: "empty id array" });
        return;
    }

    // 여기서 지우자

    res.status(200).send({ message: req.body.idArray });
}
