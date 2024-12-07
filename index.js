"use strict";
const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "zkaynl7",
  password: "",
  database: "todos",
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/todos", (req, res) => {
  connection.query("SELECT * FROM dos", (err, rows) => {
    res.status(200).send(rows);
  });
});

app.post("/", (req, res) => {
  let { title, description } = req.body;
  res.json({ title, description });
});

app.listen(5500, () => {
  console.log("listening on http://localhost:5500");
});
