var database = require("../database/config");

function obterDadosGrafico(fk_usuario) {
    
    var instrucaoSql = `
    select SUM(acertos), SUM(erros) from pontuacao
	where fk_usuario = ${fk_usuario};
    `
    return database.executar(instrucaoSql);
}

function buscarMaiorMenorPontuacao(idusuario){
    var idusuario = sessionStorage.ID_USUARIO;
    var instrucaoSql = `select max(acertos) as maior_acerto, min(acertos) as menor_acertos
     from pontuacao where fk_usuario = ${idusuario};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idusuario) {
    var idusuario = sessionStorage.ID_USUARIO;
    var instrucaoSql = `SELECT 
                        SUM(acertos), 
                        SUM(erros)
                        fk_usuario
                        FROM pontuacao WHERE fk_usuario = ${idusuario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosGrafico,
    buscarMedidasEmTempoReal,
    buscarMaiorMenorPontuacao
}

/* SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}  */