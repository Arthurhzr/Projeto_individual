var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:fk_usuario", function (req, res) {
    medidaController.obterDadosGrafico(req, res);
});

router.get("/ultimas/:fk_usuario", function (req, res) {
    medidaController.obterDadosGrafico2(req, res);
});

router.get("/ultimas/:fk_usuario", function (req, res) {
    medidaController.buscarMaiorMenorPontuacao(req, res);
});

router.get("/tempo-real/:fk_usuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;