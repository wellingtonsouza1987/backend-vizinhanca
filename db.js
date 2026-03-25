const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vizinhanca'
});

conexao.connect((erro) => {
    if (erro) {
        console.erro('Erro ao conectar no banco:', erro);
    } else {
        console.log('Conectado ao MySQL');
    }
});

module.exports = conexao;