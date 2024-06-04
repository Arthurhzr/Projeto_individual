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



function buscarMaiorMenorPontuacao(req, res) {

    var idusuario = req.params.idusuario;

    console.log(`Recuperando as ultimas  medidas`);

    medidaModel.buscarMaiorMenorPontuacao(idusuario).then(function (resultado) {
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