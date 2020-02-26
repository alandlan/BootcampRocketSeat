const express = require("express");

const server = express();

//query params = ?teste=1
//query params = ?teste=1
//route params = /users/1
//request body = {"name": "Alan", "email": "teste@teste.com.br"}

//res é a resposta que eu vou dar para a requisição
server.get("/queryParams", (req, res) => {
  //recupera o nome na query params
  const nome = req.query.nome;

  return res.json({ message: `Hello ${nome}` });
});

server.get("/routeParams/:id", (req, res) => {
  //recupera o id no route params
  const { id } = req.params;

  return res.json({ message: `Buscando o Id: ${id}` });
});

const user = ["Souza", "Alan", "Vitor"];

server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(user[index]);
});

//node index.js
//yarn nodemon index.js
//yarn dev
server.listen(3000);

//yarn add nodemon -D (adiciona o pacote de atualização do projeto em tempo
//de desenvolvimento. -D somente em dev)
