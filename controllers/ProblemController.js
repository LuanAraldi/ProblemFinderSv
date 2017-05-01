var Problem = require('./../models/problem');
knn = require('alike');

module.exports = {
    new: function (req, res) {
        var problem = new Problem();
        var request = req.body;

        problem = newModel(request);

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
    },

    solve: function (req, res) {
        var payload = req.body.problem;
        var problem = newModel(payload);

        var options = {
            k = 1,
            weights: {
                
            }
        }

        Problem.find({}).lean().exec().then(function (problems) {

        });
    }
};

function newModel(payload) {
    var problem = new Problem();

    problem.consumoCombustivel = payload.consumoCombustivel;
    problem.forcaMotor = payload.forcaMotor;
    problem.fumaca = payload.fumaca;
    problem.sujeira = payload.sujeira;
    problem.temperatura = payload.temperatura;
    problem.pressaoDeOleo = payload.pressaoDeOleo;
    problem.solucao = payload.solucao;

    return problem;
};