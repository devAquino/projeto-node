const { Router } = require('express');
const express = require('express');
const AlunoController = require('./controllers/AlunoController');
const routes = express.Router();

routes.get('/alunos/listar', AlunoController.listar)
routes.post('/alunos/cadastrar', AlunoController.cadastrar);
routes.put('/alunos/atualizar/:id', AlunoController.atualizar);
routes.delete('/alunos/deletar/:id', AlunoController.deletar);
routes.get('/alunos/pesquisar/:id', AlunoController.pesquisar);

module.exports = routes;