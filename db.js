const mysql = require('mysql2');

const conexao = mysql.createConnection(
    process.env.MYSQL_URL
);

conexao.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar no banco:', erro);
    } else {
        console.log('Conectado ao MySQL');
    }
});

module.exports = conexao;