const express = require('express');
const routes = require('./routes');
const jwt = require('jsonwebtoken');


require('./database')
const app = express();
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes)

app.listen(process.env.PORT,()=>{console.log('Server is up!!!');})