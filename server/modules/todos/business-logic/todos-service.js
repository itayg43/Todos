const { REGEX } = require("../helpers/constants");
const todosDataAccess = require("../data-access/todos-data-access");
const { onAddPokemon, onAddMultiplePokemons } = require("./pokemon-service");
const { TodoModelToDtoMapper } = require("./dto/todo-model-to-dto-mapper");

const todoModelToDtoMapper = new TodoModelToDtoMapper();

async function submitTodo(value) {
  if (REGEX.NUMBERS.test(value)) {
    const todo = await onAddPokemon(value);
    return todoModelToDtoMapper.convert(todo);
  }
  if (REGEX.NUMBERS_ARRAY.test(value)) {
    const todos = await onAddMultiplePokemons(value);
    return todos.map((todo) => todoModelToDtoMapper.convert(todo));
  }
  const todo = await todosDataAccess.submitTodo({ value });
  return todoModelToDtoMapper.convert(todo);
}

async function fetchAllTodos() {
  const todos = await todosDataAccess.fetchAllTodos();
  return todos.map((todo) => todoModelToDtoMapper.convert(todo));
}

async function toggleTodoIsCompleted(id, isCompleted) {
  const todo = await todosDataAccess.toggleTodoIsCompleted(id, isCompleted);
  return todoModelToDtoMapper.convert(todo);
}

async function toggleTodoIsDeleted(id, isDeleted) {
  const todo = await todosDataAccess.toggleTodoIsDeleted(id, isDeleted);
  return todoModelToDtoMapper.convert(todo);
}

module.exports = {
  submitTodo,
  fetchAllTodos,
  toggleTodoIsCompleted,
  toggleTodoIsDeleted,
};
