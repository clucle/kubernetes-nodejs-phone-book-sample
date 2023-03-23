
const path = require("path");
const express = require('express');
const app = express();
const userRoutes = require("./src/routes/User.route");

app.set('views', __dirname + '/src/views');
app.set('view engine', 'html');

app.use(userRoutes);

app.listen(3000, function () {
    console.log('Server running on port 3000...');
});
