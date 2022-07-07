import { TODOS_FILTERS } from "../../helpers/constants";
import { trimStringAndLowerCaseAll } from "../../helpers/utils";

export const getUpdatedTodos = (todos, todo) => {
  const { id } = todo;
  return todos.map((t) => (t.id === id ? todo : t));
};

export const getVisibleTodos = (todos, searchQuery, filter) => {
  if (!todos.length) {
    return [];
  }
  const query = trimStringAndLowerCaseAll(searchQuery);
  const searchedTodos = query ? getSearchedTodos(todos, query) : todos;
  const filteredTodos = getFilteredTodos(searchedTodos, filter);
  return filteredTodos;
};

const getSearchedTodos = (todos, query) => {
  return todos.filter((t) => trimStringAndLowerCaseAll(t.value).includes(query));
};

const getFilteredTodos = (todos, filter) => {
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
