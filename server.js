const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const rotas = require("./routes/rotas");
const conexao = require("./structure/conexao");
const tabela = require("./structure/tabela");
const session = require("express-session");

app.use(express.static(path.join(__dirname)));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    name: "sid",
    secret: "Segredo123",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 
    }
}));

// Rota para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(rotas);   
tabela.init(conexao)

app.listen(port, (error) => {
    if (error) {
        console.log("Erro ao iniciar o servidor:", error);
        return;
    }
    console.log(`Servidor rodando na porta ${port}`);
});