const todosModel = require("../models/todosModel");

const displayTodos = async (req, res, next) => {
  try {
    let result = await todosModel.displayTable();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const displayOneTodo = async (req, res, next) => {
  try {
    let rows = await todosModel.displayTable();
    let result = rows.find((element) => element.id === parseInt(req.params.id));
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const addTodo = async (req, res, next) => {
  try {
    let { title, description } = req.body;
    todosModel.addNewTask(title, description);
    res.status(200).json({ response: "Task successfully added!" });
  } catch (err) {
    next(err);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    let title = req.body["title"];
    let result = await todosModel.deleteTask(title);
    res.json({
      response:
        result.affectedRows > 0
          ? "Task successfully deleted!"
          : "Task does not exist",
    });
  } catch (err) {
    next(err);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    let oldTitle = req.body.old_title;
    let newTitle = req.body.new_title;
    let newDescription = req.body.new_description;
    let result = todosModel.updateTask(oldTitle, newTitle, newDescription);
    res.json({
      response:
        result.affectedRows > 0
          ? "Task updated successfully!"
          : "Task does not exist",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  displayTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  displayOneTodo,
};
