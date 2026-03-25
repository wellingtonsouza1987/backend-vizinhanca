const express = require('express');
const app = express();
const conexao = require('./db');

app.use(express.json());

// rota teste
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

// rota para salvar no banco
app.post('/api/ocorrencias', (req, res) => {
    const { tipo, descricao } = req.body;

    const sql = 'INSERT INTO ocorrencias (tipo, descricao) VALUES (?,?)';

    conexao.query(sql, [tipo, descricao], (erro, resultado) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({ erro:'Erro ao salvar' });
        }
        res.status(201).json({ mensagem: 'Salvo com sucesso' });
        });
    });

// iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});