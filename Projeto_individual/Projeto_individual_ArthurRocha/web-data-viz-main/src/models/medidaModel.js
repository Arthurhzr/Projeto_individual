var database = require("../database/config");

function obterDadosGrafico(fk_usuario) {
    
    var instrucaoSql = `
    select SUM(acertos) as 'acertos', SUM(erros) as 'erros' from pontuacao
	where fk_usuario = ${fk_usuario};
    `
    return database.executar(instrucaoSql);
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
}


function obterDadosGrafico2() {
    
    var instrucaoSql = `
    select SUM(acertos) as 'acertos_gerais', SUM(erros) as 'erros_gerais' from pontuacao;
    `
    return database.executar(instrucaoSql);
}

function buscarPersonagem() {
    
    var instrucaoSql = `
    SELECT COUNT(u.idusuario) AS numero_de_usuarios
    FROM personagem p
    LEFT JOIN usuario u ON p.idpersonagem = u.fk_personagem
    GROUP BY p.idpersonagem, p.nome;
    `
    return database.executar(instrucaoSql);
}






module.exports = {
    obterDadosGrafico,
    obterDadosGrafico2,
    buscarPersonagem
}

/* SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}  */