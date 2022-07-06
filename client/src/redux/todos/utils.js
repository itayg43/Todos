import { TODOS_FILTERS } from "../../helpers/constants";

export const getUpdatedTodos = (todos, todo) => {
  const { id } = todo;
  return todos.map((t) => (t.id === id ? todo : t));
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
