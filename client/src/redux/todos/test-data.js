import { FILTERS } from "../../helpers/constants";

export const TEST_STATE = {
  isLoading: false,
  isSuccess: false,
  successMessage: "",
  isError: false,
  errorMessage: "",
  todos: [],
  searchQuery: "",
  selectedFilter: FILTERS.TODOS.PENDING,
};

export const TEST_TODO = {
  id: 1,
  value: "1",
  isCompleted: false,
  completedAt: 0,
  isDeleted: false,
  deletedAt: 0,
};

export const TEST_TODOS = [TEST_TODO, TEST_TODO];
