import todosReducer from "../../reducer";
import {
  fetchAllTodosAction,
  fetchAllTodosActionSuccess,
  fetchAllTodosActionFail,
} from "../../actions/fetch-all-todos";
import { TEST_STATE, TEST_TODOS } from "../../test-data";

describe("fetch all todos actions", () => {
  // request
  test("should handle request in proccess state", () => {
    expect(todosReducer(TEST_STATE, fetchAllTodosAction())).toEqual({
      ...TEST_STATE,
      isLoading: true,
      isSuccess: false,
      successMessage: "",
      isError: false,
      errorMessage: "",
    });
  });

  // success
  test("should fetch all todos successfully", () => {
    expect(todosReducer(TEST_STATE, fetchAllTodosActionSuccess(TEST_TODOS))).toEqual(
      {
        ...TEST_STATE,
        isLoading: false,
        isSuccess: true,
        successMessage: "",
        isError: false,
        errorMessage: "",
        todos: TEST_TODOS,
      }
    );
  });

  // fail
  test("should fail when fetching all todos", () => {
    expect(
      todosReducer(TEST_STATE, fetchAllTodosActionFail("some error..."))
    ).toEqual({
      ...TEST_STATE,
      isLoading: false,
      isSuccess: false,
      successMessage: "",
      isError: true,
      errorMessage: "some error...",
    });
  });
});
