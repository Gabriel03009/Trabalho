const mysql = require("mysql2")

const mysqlusuario = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "dbcadastro"
});

module.exports = mysqlusuario;