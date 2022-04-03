const express = require('express');
const routes = require('./routes');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 3333;

require('./database')
const app = express();
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes)

app.listen(port, ()=>{console.log('Server is up!!!');})