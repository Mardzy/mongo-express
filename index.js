const port = process.env.PORT || 8080;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const morgan = require("morgan");
const apiRoutes = require('./config/routes')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true })
    .catch((err) => {
        console.log('Error on start: ' + err.stack);
        process.exit(1);
    });
app.use(morgan("dev"));
app.use('/api', apiRoutes);

app.listen(port);
console.log('Running RestHub on port ' + port);
