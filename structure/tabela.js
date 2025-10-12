class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaUsuario();
    }

    criarTabelaUsuario(){
        const sql = `
            CREATE TABLE IF NOT EXISTS usuario (
            id_usuario int not null auto_increment,
            nome varchar(20) not null,
            idade date not null,
            email varchar(100) not null unique,
            senha varchar(30) not null,
            primary key(id_usuario)
            );
        `;
        this.conexao.query(sql, (erro)=>{
            if(erro){
                console.log("Erro ao criar tabela usuario");
                console.log(erro.message);
                return;
            }
            console.log("Tabela usuario criada com sucesso");
        });
    }
}

module.exports = new Tabelas();
