"use strict";
const express = require("express");
const todosRoutes = require("./routes/todosRoutes");
const errorHandler = require("./middlewares/errorHandler");

// const errorHandler = require("./middlewares/errorHandler");

// Build-in Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", todosRoutes);

// Error Handler Middleware
app.use(errorHandler);

// Listener
app.listen(5500, () => {
  console.log("listening on http://localhost:5500/");
});
