import { TODOS_FILTERS } from "../../helpers/constants";
import { trimStringAndLowerCaseAll } from "../../helpers/utils";

export const filterTodos = (todos, searchQuery, selectedFilter) => {
  if (!todos.length) {
    return [];
  }
  const query = trimStringAndLowerCaseAll(searchQuery);
  const visibleTodos = query ? filterBySearchQuery(todos, query) : todos;
  return filterBySelectedFilter(visibleTodos, selectedFilter);
};

const filterBySearchQuery = (todos, query) => {
  return todos.filter((todo) =>
    trimStringAndLowerCaseAll(todo.value).includes(query)
  );
};

const filterBySelectedFilter = (todos, filter) => {
  switch (filter) {
    case TODOS_FILTERS.PENDING: {
      return todos.filter((todo) => !todo.isDeleted && !todo.isCompleted);
    }

    case TODOS_FILTERS.COMPLETED: {
      return todos.filter((todo) => !todo.isDeleted && todo.isCompleted);
    }

    case TODOS_FILTERS.DELETED: {
      return todos.filter((todo) => todo.isDeleted);
    }

    default:
      return todos;
  }
};
