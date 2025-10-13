const usuarioModel = require("../model/usuarioModel");
class usuarioController {
    
    Listar(){
        return usuarioModel.Listar();
    }

    Cadastrar(novoCadastro){
        return usuarioModel.Cadastrar(novoCadastro);
    }
}

module.exports = new usuarioController();