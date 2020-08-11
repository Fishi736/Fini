const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Mongouser:zxas@cluster0-jammv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const app = express();
app.use(cors());

const myapi = require('./REST/contactapi');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', myapi);


http.createServer(app).listen(process.env.PORT || 3000);
console.log("Backend Server iS On=", process.env.PORT || 3000);