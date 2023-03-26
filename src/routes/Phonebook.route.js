const express = require('express');
const router = express.Router();

const {getAll, getOne, createOne, updateOne, deleteOne} = require("../controllers/Phonebook.controller");

router.get("/phonebook", getAll);

router.get("/phonebook/:id", getOne);

router.post("/phonebook", createOne);

router.put("/phonebook/:id", updateOne);

router.delete("/phonebook/:id", deleteOne);

module.exports = router;