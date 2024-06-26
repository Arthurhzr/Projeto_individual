var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length == 1) {
                    const usuario = resultadoAutenticar[0];
                    res.json({
                        id: usuario.idusuario,
                        email: usuario.email,
                        nome: usuario.nome,
                        senha: usuario.senha
                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
            );
    }
}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var cpf = req.body.cpfServer;
    var personagem = req.body.personagemServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, cpf, personagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


//quiz

function armazenaracertos(req, res){
    var userid = req.body.iduserServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.erradasServer


// Validações básicas 
if (!userid || !acertos || !erros) {
return res
.status (400)
.send("Não foi possivel armazenar seus dados!");
}

usuarioModel.armazenaracertos(userid, acertos, erros)
.then(
    function (resultado) {
        res.json(resultado);
    }
).catch(
    function (erro) {
        console.log(erro);
        console.log(
            "\nHouve um erro ao realizar o armazenamento! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    }
);
}

module.exports = {
    autenticar,
    cadastrar,
    armazenaracertos
}