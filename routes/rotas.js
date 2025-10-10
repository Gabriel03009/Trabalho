const {Router} = require("express");
const router = Router();

router.get('/teste', (req, res) => {
    res.send('Hello, world!');
});

module.exports = router;