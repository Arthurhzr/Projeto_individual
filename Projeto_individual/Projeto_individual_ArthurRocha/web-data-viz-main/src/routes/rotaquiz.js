var express = require("express");
var router = express.Router();

var rotaquizController = require("../controllers/rotaquizController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    rotaquizController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    rotaquizController.listar(req, res);
});

module.exports = router;