const router = require("express").Router();
const todosControllers = require("../controllers/todosControllers");

router.get("/", todosControllers.displayTodos);
router.get("/:id", todosControllers.displayOneTodo);

module.exports = router;
