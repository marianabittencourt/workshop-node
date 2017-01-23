const express = require('express');
const fs = require('fs');
const app = express();

const middleware =(req, res, next) => {
    console.log('Requisição feita em : ' + req.url);
    next();
}

app.use(middleware);

app.get('/' , (req, res) => {
    fs.readFile('views/index.html' , 'UTF-8' ,(err, content) => {
        res.send(content);
    });
});

app.get('/contato' , (req, res) => {
   fs.readFile('views/contato.html' , 'UTF-8' ,(err, content) => {
        res.send(content);
    });
});

app.get('/sobre' , (req, res) => {
   fs.readFile('views/sobre.html' , 'UTF-8' ,(err, content) => {
        res.send(content);
    });
});

app.listen(3001, () => {
    console.log('Você está rodando a aplicação na porta 3001')
});

