const {Router} = require("express");
const router = Router();
const usuarioCrontoller = require("../controllers/usuarioController");

router.get('/listar', (req, res) => {
    const listar = usuarioCrontoller.Listar();
    listar.then(lista => res.status(200).json(lista))
    .catch(error => res.status(400).json(error_message));
});

module.exports = router;