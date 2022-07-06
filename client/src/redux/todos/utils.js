import { ACTIONS } from "./constants";
import { TODOS_FILTERS } from "../../helpers/constants";

export const getUpdatedTodos = (todos, todo, afterAction = "") => {
  if (afterAction === ACTIONS.SUBMIT) {
    return todo.length ? [...todos, ...todo] : [...todos, todo];
  }
  const { id } = todo;
  return todos.map((currTodo) => (currTodo.id === id ? todo : currTodo));
};

export const getVisibleTodos = (todos, filter) => {
  if (!todos.length) {
    return [];
  }
  switch (filter) {
    case TODOS_FILTERS.PENDING:
      return todos
        .filter((todo) => !todo.isDeleted)
        .filter((todo) => !todo.isCompleted);
    case TODOS_FILTERS.COMPLETED:
      return todos
        .filter((todo) => !todo.isDeleted)
        .filter((todo) => todo.isCompleted);
    case TODOS_FILTERS.DELETED:
      return todos.filter((todo) => todo.isDeleted);
    default:
      return todos;
  }
};
