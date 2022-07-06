const { Todo, sequelize } = require("../../../storage/database/models");
const { generateNowTimestamp } = require("../../../helpers/utils");
const { TodoNotFoundError } = require("../helpers/errors/todo-errors");
const {
  TodoAlreadyExist,
  OneOfTheTodosAlreadyExist,
} = require("../helpers/errors/todo-errors");

const SEQUELIZE_UNIQUE_ERROR = "SequelizeUniqueConstraintError";

async function submitTodo(todo) {
  try {
    return await sequelize.transaction(async () => await Todo.create(todo));
  } catch (error) {
    throw error.name === SEQUELIZE_UNIQUE_ERROR
      ? new TodoAlreadyExist()
      : error;
  }
}

async function submitMultipleTodos(multipleTodos) {
  try {
    return await sequelize.transaction(
      async () => await Todo.bulkCreate(multipleTodos, { validate: true })
    );
  } catch (error) {
    throw error.name === SEQUELIZE_UNIQUE_ERROR
      ? new OneOfTheTodosAlreadyExist()
      : error;
  }
}

async function fetchTodo(id) {
  const todo = await Todo.findByPk(id);
  if (!todo) {
    throw new TodoNotFoundError();
  }
  return todo;
}

async function fetchAllTodos() {
  return await Todo.findAll({ order: [["createdAt", "ASC"]] });
}

async function toggleTodoIsCompleted(id, isCompleted) {
  await fetchTodo(id);
  await Todo.update(
    {
      isCompleted,
      completedAt: isCompleted ? generateNowTimestamp() : null,
    },
    { where: { id } }
  );
  return await fetchTodo(id);
}

async function toggleTodoIsDeleted(id, isDeleted) {
  await fetchTodo(id);
  await Todo.update(
    {
      isDeleted,
      deletedAt: isDeleted ? generateNowTimestamp() : null,
    },
    { where: { id } }
  );
  return await fetchTodo(id);
}

module.exports = {
  submitTodo,
  submitMultipleTodos,
  fetchTodo,
  fetchAllTodos,
  toggleTodoIsCompleted,
  toggleTodoIsDeleted,
};
