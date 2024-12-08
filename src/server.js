"use strict";
const express = require("express");
const todosRoutes = require("./routes/todosRoutes");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();

const port = process.env.PORT || 3000;

// Build-in Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send("Welcome To Nick's Todo App");
});

//Routes
app.use("/api", todosRoutes);

// Error Handler Middleware
app.use(errorHandler);

// Listener
app.listen(port, () => {
  console.log("listening on http://localhost:" + port);
});
