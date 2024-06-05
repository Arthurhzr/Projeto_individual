var medidaModel = require("../models/medidaModel");

function obterDadosGrafico(req, res) {
    var {fk_usuario} = req.params

    medidaModel.obterDadosGrafico(fk_usuario)
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro', erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}


function buscarPersonagens(req, res) {

    var {fk_usuario} = req.params

    medidaModel.buscarPersonagens(fk_usuario)
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro', erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}


function buscarMaiorMenorPontuacao(req, res) {

    var {fk_usuario} = req.params
    console.log('BUscando maior e menor nota')

    medidaModel.buscarMaiorMenorPontuacao(fk_usuario)
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro', erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}


function buscarMedidasEmTempoReal(req, res) {

    var idusuario = req.params.idusuario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    obterDadosGrafico,
    buscarMedidasEmTempoReal,
    buscarMaiorMenorPontuacao
}