const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://myMail:p8ZlvpDkxLFDWeOk@cluster0.1wnnb.mongodb.net/myMailCollection?retryWrites=true&w=majority", {
       useNewUrlParser: true,
       useUnifiedTopology: true,

})
       .then(() => console.log("Database connected!"))
       .catch(err => console.log(err));

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const myapi = require('./REST/contactapi.js');
app.use('/', myapi);


http.createServer(app).listen(process.env.PORT || 8080);
console.log("Backend Server iS On=", process.env.PORT || 8080);