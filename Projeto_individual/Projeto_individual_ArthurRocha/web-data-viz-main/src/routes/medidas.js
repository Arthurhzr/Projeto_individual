var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:fk_usuario", function (req, res) {
    medidaController.obterDadosGrafico(req, res);
});

router.get("/menormaior", function (req, res) {
    medidaController.obterDadosGrafico2(req, res);
});

router.get("/personagens", function (req, res) {
    medidaController.buscarPersonagem(req, res);
});



module.exports = router;