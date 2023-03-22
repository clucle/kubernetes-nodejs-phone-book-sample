const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');
console.log("server open 8000 port");
app.listen(8000);