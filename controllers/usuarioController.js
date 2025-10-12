const usuarioModel = require("../model/usuarioModel");
class usuarioCrontoller {
    Listar(){
        return usuarioModel.Listar();
    }
}

module.exports = new usuarioCrontoller();