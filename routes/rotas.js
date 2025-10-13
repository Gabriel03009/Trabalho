const {Router} = require("express");
const router = Router();
const usuarioController = require("../controllers/usuarioController");

router.get('/listar', (req, res) => {
    const listar = usuarioController.Listar();
    listar.then(lista => res.status(200).json(lista))
    .catch(error => res.status(400).json(error.message));
});

router.post('/cadastrar', (req, res) => {
    const novoCadastro = req.body
    const cadastrar = usuarioController.Cadastrar(novoCadastro);
    cadastrar.then(resposta => res.status(201).json(resposta))
    .catch(error => res.status(400).json(error.message));
});

module.exports = router;