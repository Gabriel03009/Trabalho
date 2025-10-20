const {Router} = require("express");
const router = Router();
const usuarioController = require("../controllers/usuarioController");

function autenticado(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    }
    return res.status(401).json({ message: "Não autorizado" });
}

router.get('/listar', autenticado, (req, res) => {
    const listar = usuarioController.Listar();
    listar.then(lista => res.status(200).json(lista))
    .catch(error => res.status(400).json(error.message));
});

router.post('/cadastrar', (req, res) => {
    const novoCadastro = req.body
    if (!novoCadastro || !novoCadastro.nome || !novoCadastro.email || !novoCadastro.senha) {
        return res.status(400).json({ message: 'Campos obrigatórios: nome, email, senha' });
    }
    const cadastrar = usuarioController.Cadastrar(novoCadastro);
    cadastrar.then(resposta => res.status(201).json(resposta))
    .catch(error => res.status(400).json(error.message));
});

router.post('/login', async (req, res) => {
    const dadosLogin = req.body
    try {
        const usuario = await usuarioController.Login(dadosLogin);
        req.session.user = {
            id_usuario: usuario.id || usuario.ID || null,
            nome: usuario.nome || usuario.Nome || null,
            email: usuario.email || usuario.Email || null
        };
        console.log('usuario retornado pelo model:', usuario.id_usuario);
        res.status(200).json({ message: "Login realizado com sucesso" });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

module.exports = router;