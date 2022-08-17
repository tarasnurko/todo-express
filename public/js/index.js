import { createTodo, updateTodo, deleteTodo } from "./handleTodo";

const createBtn = document.querySelector(".create-block__btn-create");
const updateBtn = document.querySelector(".create__btn-update");
const deleteBtn = document.querySelector(".create__btn-delete");

if (createBtn) {
  createTodo();
}
if (updateBtn) {
  updateTodo();
}
if (deleteBtn) {
  deleteTodo();
}
