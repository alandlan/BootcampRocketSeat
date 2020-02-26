const express = require("express");

const server = express();

server.use(express.json());
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

server.get("/users", (req, res) => {
  return res.json(user);
});

server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(user[index]);
});

server.post("/users", (req, res) => {
  const { name } = req.body;

  user.push(name);

  res.json(user);
});

server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  user[index] = name;

  return res.json(user);
});

server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  user.splice(index, 1);

  return res.send();
});

//node index.js
//yarn nodemon index.js
//yarn dev
server.listen(3000);

//yarn add nodemon -D (adiciona o pacote de atualização do projeto em tempo
//de desenvolvimento. -D somente em dev)
