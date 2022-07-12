import todosReducer from "../../reducer";
import {
  toggleTodoIsDeletedAction,
  toggleTodoIsDeletedActionSuccess,
  toggleTodoIsDeletedActionFail,
} from "../../actions/toggle-todo-is-deleted";
import { TEST_STATE, TEST_TODO } from "../../test-data";
import { SUCCESS_MESSAGES } from "../../../../helpers/constants";

describe("toggle todo is deleted actions", () => {
  // request
  test("should handle request in proccess state", () => {
    expect(todosReducer(TEST_STATE, toggleTodoIsDeletedAction())).toEqual({
      ...TEST_STATE,
      isLoading: true,
      isSuccess: false,
      successMessage: "",
      isError: false,
      errorMessage: "",
    });
  });

  // success
  test("should toggle todo is deleted successfully", () => {
    expect(
      todosReducer(
        { ...TEST_STATE, todos: [TEST_TODO] },
        toggleTodoIsDeletedActionSuccess(
          { ...TEST_TODO, isDeleted: true, deletedAt: 1 },
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
      todos: [{ ...TEST_TODO, isDeleted: true, deletedAt: 1 }],
    });
  });

  // fail
  test("should fail when toggle todo is deleted state", () => {
    expect(
      todosReducer(TEST_STATE, toggleTodoIsDeletedActionFail("some error..."))
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
