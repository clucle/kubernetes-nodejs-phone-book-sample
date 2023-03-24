const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');

app.listen(process.env.PORT, async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/test", {
        useNewUrlParser: true
    }).then(
        () => console.log(`listen.. ${process.env.PORT}`)
    ).catch(console.error);    
});