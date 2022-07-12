import todosReducer from "../../reducer";
import ACTION_TYPES from "../../actions/constants/action-types";
import {
  ERROR_MESSAGES,
  FILTERS,
  SUCCESS_MESSAGES,
} from "../../../../helpers/constants";

const TEST_TODO = {
  id: 1,
  value: "1",
  isCompleted: false,
  completedAt: 0,
  isDeleted: false,
  deletedAt: 0,
};

// request
test("should handle request in proccess state", () => {
  expect(todosReducer(undefined, { type: ACTION_TYPES.SUBMIT_TODO })).toEqual({
    isLoading: true,
    isSuccess: false,
    successMessage: "",
    isError: false,
    errorMessage: "",
    todos: [],
    searchQuery: "",
    selectedFilter: FILTERS.TODOS.PENDING,
  });
});

// success
test("should add todo successfully", () => {
  expect(
    todosReducer(undefined, {
      type: ACTION_TYPES.SUBMIT_TODO_SUCCESS,
      payload: {
        todo: TEST_TODO,
        successMessage: SUCCESS_MESSAGES.TODOS.SUBMIT_TODO,
      },
    })
  ).toEqual({
    isLoading: false,
    isSuccess: true,
    successMessage: SUCCESS_MESSAGES.TODOS.SUBMIT_TODO,
    isError: false,
    errorMessage: "",
    todos: [TEST_TODO],
    searchQuery: "",
    selectedFilter: FILTERS.TODOS.PENDING,
  });
});

// success with error
test("should add valid pokemons and store the error with the ids of pokemons that failed", () => {
  expect(
    todosReducer(undefined, {
      type: ACTION_TYPES.SUBMIT_TODO_SUCCESS_WITH_ERROR,
      payload: {
        todo: [TEST_TODO],
        errorMessage: `${ERROR_MESSAGES.FAILED_TO_FETCH_POKEMONS_IDS}: 999`,
      },
    })
  ).toEqual({
    isLoading: false,
    isSuccess: false,
    successMessage: "",
    isError: true,
    errorMessage: `${ERROR_MESSAGES.FAILED_TO_FETCH_POKEMONS_IDS}: 999`,
    todos: [TEST_TODO],
    searchQuery: "",
    selectedFilter: FILTERS.TODOS.PENDING,
  });
});

// fail
test("should fail when adding todo", () => {
  expect(
    todosReducer(undefined, {
      type: ACTION_TYPES.SUBMIT_TODO_FAIL,
      payload: { errorMessage: "some error..." },
    })
  ).toEqual({
    isLoading: false,
    isSuccess: false,
    successMessage: "",
    isError: true,
    errorMessage: "some error...",
    todos: [],
    searchQuery: "",
    selectedFilter: FILTERS.TODOS.PENDING,
  });
});
