import todosReducer from "../../reducer";
import {
  toggleTodoIsCompletedAction,
  toggleTodoIsCompletedActionSuccess,
  toggleTodoIsCompletedActionFail,
} from "../../actions/toggle-todo-is-completed";
import { TEST_STATE, TEST_TODO } from "../../test-data";
import { SUCCESS_MESSAGES } from "../../../../helpers/constants";

describe("toggle todo is completed actions", () => {
  // request
  test("should handle request in proccess state", () => {
    expect(todosReducer(TEST_STATE, toggleTodoIsCompletedAction())).toEqual({
      ...TEST_STATE,
      isLoading: true,
      isSuccess: false,
      successMessage: "",
      isError: false,
      errorMessage: "",
    });
  });

  // success
  test("should toggle todo is completed successfully", () => {
    expect(
      todosReducer(
        { ...TEST_STATE, todos: [TEST_TODO] },
        toggleTodoIsCompletedActionSuccess(
          { ...TEST_TODO, isCompleted: true, completedAt: 1 },
          SUCCESS_MESSAGES.TODOS.UPDATE_TODO
        )
      )
    ).toEqual({
      ...TEST_STATE,
      isLoading: false,
      isSuccess: true,
      successMessage: SUCCESS_MESSAGES.TODOS.UPDATE_TODO,
      isError: false,
      errorMessage: "",
      todos: [{ ...TEST_TODO, isCompleted: true, completedAt: 1 }],
    });
  });

  // fail
  test("should fail when toggle todo is completed state", () => {
    expect(
      todosReducer(TEST_STATE, toggleTodoIsCompletedActionFail("some error..."))
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
