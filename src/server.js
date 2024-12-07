"use strict";
const express = require("express");
const todosControllers = require("./controllers/todosControllers");

// Build-in Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Display rows of my database
app.get("/", todosControllers.displayTodos);

// Add a task to my todos
app.post("/add", todosControllers.addTodo);

// Delete a task
app.delete("/delete", todosControllers.deleteTodo);

// Update a task
app.post("/update", todosControllers.updateTodo);

// Listener
app.listen(5500, () => {
  console.log("listening on http://localhost:5500/");
});
