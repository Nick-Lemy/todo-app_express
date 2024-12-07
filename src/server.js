"use strict";
const express = require("express");
const todosModel = require("./models/todosModel");

// Build-in Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Display rows of my database
app.get("/", async (req, res) => {
  try {
    let result = await todosModel.displayTable();
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({ error: err });
  }
});

// Add a task to my todos
app.post("/add", (req, res) => {
  try {
    let { title, description } = req.body;
    todosModel.addNewTask(title, description);
    res.status(200).json({ response: "Task successfully added!" });
  } catch (err) {
    res.status(404).send({ error: err });
  }
});

// Delete a task
app.delete("/delete", (req, res) => {
  try {
    let title = req.body["title"];
    todosModel.deleteTask(title);
    res.json({ response: "Task successfully deleted!" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: err });
  }
});

// Update a task
app.post("/update", (req, res) => {
  try {
    let oldTitle = req.body.old_title;
    let newTitle = req.body.new_title;
    let newDescription = req.body.new_description;
    console.log(oldTitle, newTitle, newDescription);

    todosModel.updateTask(oldTitle, newTitle, newDescription);
    res.json({ response: "Task updated successfully!" });
  } catch (err) {
    console.error(err);
    res.status(404).json({ error: err });
  }
});

// Listener
app.listen(5500, () => {
  console.log("listening on http://localhost:5500/");
});
