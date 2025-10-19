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

    Cadastrar(novoCadastro) {
        const sql = "INSERT INTO usuario SET ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, novoCadastro, (error, resposta) => {
                if (error) {
                    console.log("Erro ao cadastrar usuario");
                    return reject(error);
                }
                console.log("Usuario cadastrado com sucesso");
                resolve(resposta);
            });
        });
    }

    Login(dadosLogin){
        const sql = "SELECT * FROM usuario WHERE email = ? AND senha = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, dadosLogin, (error, resposta) => {
                if (error) {
                    console.log("Erro ao realizar login");
                    reject(error);
                }

                if(resposta.length > 0){
                    console.log("Login realizado com sucesso");
                    resolve(resposta[0]);
                } else {
                    console.log("Dados de login inválidos");
                    reject(new Error("Dados de login inválidos"));
                }   
            });
        });
    }
}

module.exports = new usuarioModel();