var database = require("../database/config");

function buscarAquariosPorEmpresa(userid) {
  var instrucaoSql = `SELECT * FROM pontuacao WHERE fk_usuario = ${userid}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idusuario) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${idusuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
