const usuarioModel = require("../model/usuarioModel");
class usuarioController {
    
    Listar(){
        return usuarioModel.Listar();
    }

    Cadastrar(novoCadastro){
        return usuarioModel.Cadastrar(novoCadastro);
    }

    Login(dadosLogin){
        return usuarioModel.Login(dadosLogin);
    }
}

module.exports = new usuarioController();