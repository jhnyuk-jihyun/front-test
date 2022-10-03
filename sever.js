// express 모듈 호출
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const mysql = require('mysql');
const fs = require('fs');
const cors = require('cors');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data)

app.use(cors());


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
const multer = require('multer')
const upload = multer({ dest: './upload'})

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();
