"use strict";
const express = require("express");
const todosModel = require("./models/todosModel");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    let result = await todosModel.displayTable();
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({ error: err });
  }
});

app.post("/add", (req, res) => {
  try {
    let { title, description } = req.body;
    todosModel.addNewTask(title, description);
    res.status(200).json({ response: "Task successfully added!" });
  } catch (err) {
    res.status(404).send({ error: err });
  }
});

app.post("/delete", (req, res) => {
  try {
    let ok = req.body.title.toString();
    todosModel.deleteTask("Test2 ");
    res.json({ response: "Task successfully deleted!" });
  } catch (err) {
    res.status(404).send({ error: err });
  }
});

app.listen(5500, () => {
  console.log("listening on http://localhost:5500/");
});
