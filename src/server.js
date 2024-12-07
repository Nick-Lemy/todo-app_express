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
    console.log(title, description);

    todosModel.addNewTask(title, description);
    res.status(200).json({ response: "Task successfully added!" });
  } catch (err) {
    res.status(404).send({ error: err });
  }
});

app.post("/delete", (req, res) => {
  try {
    let title = req.body["title"];
    console.log(title);

    todosModel.deleteTask(title);
    res.json({ response: "Task successfully deleted!" });
  } catch (err) {
    console.log(err);

    res.status(404).send({ error: err });
  }
});

app.listen(5500, () => {
  console.log("listening on http://localhost:5500/");
});
