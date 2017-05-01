var Problem = require('./../models/problem');

module.exports = {
    new: function (req, res) {
        var problem = new Problem();
        var request = req.body;

        problem.consumoCombustivel = request.consumoCombustivel;
        problem.forcaMotor = request.forcaMotor;
        problem.fumaca = request.fumaca;
        problem.sujeira = request.sujeira;
        problem.temperatura = request.temperatura;
        problem.pressaoDeOleo = request.pressaoDeOleo;
        problem.solucao = request.solucao;

        problem.save(function (err) {
            if (err) res.status(500).send('Ocorreu problema ao gravar o problema');
            res.status(200).send('Problema salva com sucesso');
        });
    },

    fetchAll: function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        Problem.find({}).lean().exec().then(function (problems) {
            res.setHeader('Content-Type', 'application/json');
            res.json(problems);
        });
    }
};