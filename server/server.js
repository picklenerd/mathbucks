const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Task = require('./api/models/mathbucksModel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const routes = require('./api/routes/mathbucksRoutes');
routes(app);

app.listen(port);

console.log('mathbucks server listening on port: ' + port);
