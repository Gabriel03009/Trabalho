const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");
const conexao = require("./structure/conexao");
const tabela = require("./structure/tabela");

tabela.init(conexao);

router(app);   

app.listen(port, (error) => {
    if (error) {
        console.log("Erro ao iniciar o servidor:", error);
        return;
    }
    console.log(`Servidor rodando na porta ${port}`);
});