const Aluno = require("../models/Alunos");

module.exports = {
    
    async cadastrar(req, res){
        const {nome, email} = req.body;
        const aluno = await Aluno.create({nome, email})
        return res.json(aluno)
    },

    async listar(req, res){
        const alunos = await Aluno.findAll();
        return res.json(alunos);
    },

    async pesquisar(req, res){
        try{
            const id = req.params.id;
            const aluno = await Aluno.findOne({where: {id}});
            if(!aluno){
                return res.json({'message': 'Aluno não encontrado'})
            }
            else{
                const aluno = await Aluno.findOne({where: {id:id}})
                return res.json({aluno});
            }
        }
        catch(error){
            return res.json({error});
        }
    },

    async atualizar(req, res){
        try {
            const id = req.params.id;
            const aluno = await Aluno.findOne({where: {id}});
            if(!aluno){
                return res.json({'message': 'Aluno não encontrado'})
            }
            else{
                const aluno = await Aluno.update(req.body, {where: {id:id}})
                
                return res.json({aluno})
            }
        } catch (error) {
            return res.json({error})
        }
    },
    async deletar(req, res){
        try {
            const id = req.params.id;
            const aluno = await Aluno.findOne({where: {id}});
            if(!aluno){
                return res.json({'message': 'Aluno não encontrado'})
            }
            else{
                const aluno = await Aluno.destroy({where: {id: id}})
                
                return res.json({aluno})
            }
        } catch (error) {
            return res.json({error})
        }
    }
    
}