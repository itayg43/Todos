const express = require("express");
const todosRouter = express.Router();
const {
  validateSubmitTodoSchema,
  validateToggleTodoIsCompletedSchema,
  validateToggleTodoIsDeletedSchema,
} = require("./middlewares/todo-validation-middleware");
const todosController = require("./todos-controller");

todosRouter.post("/", validateSubmitTodoSchema(), todosController.submitTodo);
todosRouter.get("/", todosController.fetchAllTodos);
todosRouter.patch(
  "/:id",
  validateToggleTodoIsCompletedSchema(),
  todosController.toggleTodoIsCompleted
);
todosRouter.delete(
  "/:id",
  validateToggleTodoIsDeletedSchema(),
  todosController.toggleTodoIsDeleted
);

module.exports = todosRouter;
