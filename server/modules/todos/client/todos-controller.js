const { STATUS_CODES } = require("../../../helpers/constants");
const todosService = require("../business-logic/todos-service");

async function submitTodo(req, res) {
  const { value } = req.body;
  const todo = await todosService.submitTodo(value);
  res.status(STATUS_CODES.SUCCESS.CREATED).json(todo);
}

async function fetchAllTodos(_, res) {
  const todos = await todosService.fetchAllTodos();
  res.status(STATUS_CODES.SUCCESS.OK).json(todos);
}

async function toggleTodoIsCompleted(req, res) {
  const { id } = req.params;
  const { isCompleted } = req.body;
  const todo = await todosService.toggleTodoIsCompleted(id, isCompleted);
  res.status(STATUS_CODES.SUCCESS.OK).json(todo);
}

async function toggleTodoIsDeleted(req, res) {
  const { id } = req.params;
  const { isDeleted } = req.body;
  const todo = await todosService.toggleTodoIsDeleted(id, isDeleted);
  res.status(STATUS_CODES.SUCCESS.OK).json(todo);
}

module.exports = {
  submitTodo,
  fetchAllTodos,
  toggleTodoIsCompleted,
  toggleTodoIsDeleted,
};
