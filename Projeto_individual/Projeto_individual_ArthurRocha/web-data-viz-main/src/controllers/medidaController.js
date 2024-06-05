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


function obterDadosGrafico2(req, res) {
    var {fk_usuario} = req.params

    medidaModel.obterDadosGrafico2(fk_usuario)
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro', erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}


function buscarPersonagem(req, res) {

    medidaModel.buscarPersonagem()
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro', erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}




module.exports = {
    obterDadosGrafico,
    obterDadosGrafico2,
    buscarPersonagem
}