const express = require("express");
const app = express();
const port = 3000;

app.listen(port, (error) => {
    if (error) {
        console.log("Erro ao iniciar o servidor:", error);
        return;
    }
    console.log(`Servidor rodando na porta ${port}`);
});