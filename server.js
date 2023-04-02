const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');

app.listen(process.env.PORT, async () => {
    const dbUserName = process.env.MONGODB_USERNAME;
    const dbPassword = process.env.MONGODB_PASSWORD;
    const dbHostName = process.env.MONGODB_HOSTNAME;
    const database = process.env.MONGODB_DATABASE;

    const connectionString = `mongodb://${dbUserName}:${dbPassword}@${dbHostName}:27017/?directConnection=true&serverSelectionTimeoutMS=2000&authSource=${database}&appName=mongosh+1.8.0`;
    console.log(connectionString);

    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        dbName: database
    }).then(
        () => {
            console.log(`listen.. ${process.env.PORT}`)
        }
    ).catch(err => {
        console.error(err);
        process.exit(1);
    });   
});