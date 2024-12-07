const pool = require("../config/db");

const displayTable = async () => {
  let [rows] = await pool.query("SELECT * FROM dos");
  return rows;
};

const addNewTask = async (title, description) => {
  pool.query("INSERT INTO dos (title, description) VALUES (?, ?)", [
    title,
    description,
  ]);
  return "Todo successfully added!";
};

const deleteTask = async (title) => {
  const [result] = await pool.query("DELETE FROM dos WHERE title = ?", [title]);
  console.log(title);

  console.log(result);

  return "ok";
};
module.exports = { displayTable, addNewTask, deleteTask };
