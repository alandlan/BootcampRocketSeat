const express = require("express");

const server = express();

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

server.listen(3000);
