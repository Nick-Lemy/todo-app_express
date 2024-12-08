const router = require("express").Router();
const todosControllers = require("../controllers/todosControllers");
const todosDisplayRoutes = require("./todosDisplayRoutes");

// Display rows of my database
router.use("/todos", todosDisplayRoutes);

// Add a task to my todos
router.post("/add", todosControllers.addTodo);

// Delete a task
router.delete("/delete", todosControllers.deleteTodo);

// Update a task
router.post("/update", todosControllers.updateTodo);

module.exports = router;
