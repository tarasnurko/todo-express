const express = require("express");
const todoController = require("./todoController");

const router = express.Router();

router.route("/").get(todoController.getAllTodos);

router
  .route("/create")
  .get(todoController.getCreatePage)
  .post(todoController.createTodo);

router.route("/todo/:id").get(todoController.getTodo);

router
  .route("/todo/:id/update")
  .get(todoController.getUpdatePage)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
