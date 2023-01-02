const express = require("express");

const app = express();

const port = 5000;

// todos
//  browse
//      GET /todos
//      réponse : tableau d'objet, statut : 200
//  read
//      GET /todos/:id (/todos/1, /todos/2, ...)
//      réponse : objet qui correspond à l'id s'il existe, statut : 200
//                  si l'objet n'existe pas => 404
//  edit
//      PUT /todos/:id (/todos/1, /todos/2, ...)
//      contenu : objet avec les données
//      réponse : rien si l'id était valide, statut : 204
//                  si l'objet n'existe pas => 404
//  add
//      POST /todos
//      contenu : objet avec les données
//      réponse : l'id d'insertion, statut : 201
//  destroy
//      DELETE /todos/:id (/todos/1, /todos/2, ...)
//      réponse : rien si l'id était valide, statut : 204
//                  si l'objet n'existe pas => 404

const todos = [
  { id: 1, checked: true, action: "code" },
  { id: 2, checked: false, action: "pause" },
];

const browseTodos = (req, res) => {
  res.json(todos);
};

app.get("/todos", browseTodos);

const readTodo = (req, res) => {
  const found = todos.find((todo) => todo.id === parseInt(req.params.id));

  if (found == null) {
    res.sendStatus(404);
  } else {
    res.json(found);
  }
};

app.get("/todos/:id", readTodo);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`server listening on port ${port}`);
  }
});
