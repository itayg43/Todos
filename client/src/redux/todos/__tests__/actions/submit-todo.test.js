import todosReducer from "../../reducer";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../../../helpers/constants";
import {
  submitTodoAction,
  submitTodoActionSuccess,
  submitTodoActionSuccessWithError,
  submitTodoActionFail,
} from "../../actions/submit-todo";
import { TEST_STATE, TEST_TODO } from "../../test-data";

describe("submit todo actions", () => {
  // request
  test("should handle request in proccess state", () => {
    expect(todosReducer(TEST_STATE, submitTodoAction())).toEqual({
      ...TEST_STATE,
      isLoading: true,
      isSuccess: false,
      successMessage: "",
      isError: false,
      errorMessage: "",
    });
  });

  // success
  test("should add todo successfully", () => {
    expect(
      todosReducer(
        TEST_STATE,
        submitTodoActionSuccess(TEST_TODO, SUCCESS_MESSAGES.TODOS.SUBMIT_TODO)
      )
    ).toEqual({
      ...TEST_STATE,
      isLoading: false,
      isSuccess: true,
      successMessage: SUCCESS_MESSAGES.TODOS.SUBMIT_TODO,
      isError: false,
      errorMessage: "",
      todos: [TEST_TODO],
    });
  });

  // success with error
  test("should add valid pokemons and store the error with the ids of pokemons that failed", () => {
    expect(
      todosReducer(
        TEST_STATE,
        submitTodoActionSuccessWithError(
          [TEST_TODO],
          `${ERROR_MESSAGES.FAILED_TO_FETCH_POKEMONS_IDS}: 999`
        )
      )
    ).toEqual({
      ...TEST_STATE,
      isLoading: false,
      isSuccess: false,
      successMessage: "",
      isError: true,
      errorMessage: `${ERROR_MESSAGES.FAILED_TO_FETCH_POKEMONS_IDS}: 999`,
      todos: [TEST_TODO],
    });
  });

  // fail
  test("should fail when adding todo", () => {
    expect(todosReducer(TEST_STATE, submitTodoActionFail("some error..."))).toEqual({
      ...TEST_STATE,
      isLoading: false,
      isSuccess: false,
      successMessage: "",
      isError: true,
      errorMessage: "some error...",
    });
  });
});
