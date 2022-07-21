import { FILTERS } from "../../../helpers/constants";
import { trimStringAndLowerCaseAll } from "../../../helpers/utils";

export const getVisibleTodos = (todos, searchQuery, selectedFilter) => {
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
    case FILTERS.TODOS.PENDING: {
      return todos.filter((todo) => !todo.isDeleted && !todo.isCompleted);
    }

    case FILTERS.TODOS.COMPLETED: {
      return todos.filter((todo) => !todo.isDeleted && todo.isCompleted);
    }

    case FILTERS.TODOS.DELETED: {
      return todos.filter((todo) => todo.isDeleted);
    }

    default:
      return todos;
  }
};
