const conexao = require("../structure/conexao");
class usuarioModel {
    Listar(){
        const sql = "SELECT * FROM usuario";
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
            if (error) {
                console.log("Erro ao listar usuarios");
                reject(error);
            }
            console.log("Usuarios listados com sucesso");
            resolve(resposta);
            });
        });
    }

    Cadastrar(novoCadastro){
        const sql = "INSERT INTO usuario SET ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, novoCadastro, (error, resposta) => {
            if (error) {
                console.log("Erro ao cadastrar usuario");
                reject(error);
            }
            console.log("Usuario cadastrado com sucesso");
            resolve(resposta);
            });
        });
    }
}
module.exports = new usuarioModel();