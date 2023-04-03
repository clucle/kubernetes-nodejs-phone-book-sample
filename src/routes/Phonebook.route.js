const express = require('express');
const router = express.Router();

const { getAll, createOne, updateOne, deleteOne, bulkDelete } = require("../controllers/Phonebook.controller");

router.get("/phonebook", getAll);

router.post("/phonebook", createOne);

router.put("/phonebook/:id", updateOne);

router.delete("/phonebook/:id", deleteOne);

router.post("/phonebook/bulk-delete", bulkDelete);

module.exports = router;