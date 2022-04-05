const Sequelize = require('sequelize');
const dbConfig = require('../config/config');
const Aluno = require('../models/Alunos');

const con = new Sequelize(dbConfig); 

Aluno.init(con);

module.exports = con;