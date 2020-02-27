const express = require("express");

const server = express();

server.use(express.json());
//query params = ?teste=1
//query params = ?teste=1
//route params = /users/1
//request body = {"name": "Alan", "email": "teste@teste.com.br"}

//middleware -- sempre quando é chamado uma rota passa por aqui
server.use((req, res, next) => {
  //faz alguma coisa
  console.time("Request");
  console.log(`Método: ${req.method}; URL: ${req.url};`);

  //return next(); //vai para a rota
  next();
  console.timeEnd("Finalizou");
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required" });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  if (!users[req.params.index]) {
    return res, status(400).json({ error: "User does not exists" });
  }

  return next();
}

//res é a resposta que eu vou dar para a requisição
server.get("/queryParams", (req, res) => {
  //recupera o nome na query params
  const nome = req.query.nome;

  return res.json({ message: `Hello ${nome}` });
});

server.get("/routeParams/:id", checkUserInArray, (req, res) => {
  //recupera o id no route params
  const { id } = req.params;

  return res.json({ message: `Buscando o Id: ${id}` });
});

const user = ["Souza", "Alan", "Vitor"];

server.get("/users", (req, res) => {
  return res.json(user);
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  return res.json(user[index]);
});

server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;

  user.push(name);

  res.json(user);
});

server.put("/users/:index", checkUserExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  user[index] = name;

  return res.json(user);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
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
