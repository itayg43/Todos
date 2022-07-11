import ACTION_TYPES from "./constants/action-types";
import todosService from "../../../services/todos-service";
import { SUCCESS_MESSAGES } from "../../../helpers/constants";

const toggleTodoIsCompletedAction = () => ({
  type: ACTION_TYPES.TOGGLE_IS_COMPLETED,
});

const toggleTodoIsCompletedActionSuccess = (updatedTodo, successMessage) => ({
  type: ACTION_TYPES.TOGGLE_IS_COMPLETED_SUCCESS,
  payload: { updatedTodo, successMessage },
});

const toggleTodoIsCompletedActionFail = (errorMessage) => ({
  type: ACTION_TYPES.TOGGLE_IS_COMPLETED_FAIL,
  payload: { errorMessage },
});

export const toggleTodoIsCompleted = (todo) => async (dispatch) => {
  try {
    dispatch(toggleTodoIsCompletedAction());
    const updatedTodo = await todosService.toggleTodoIsCompleted(todo);
    const successMessage = SUCCESS_MESSAGES.TODOS.UPDATE_TODO;
    dispatch(toggleTodoIsCompletedActionSuccess(updatedTodo, successMessage));
  } catch ({ message }) {
    dispatch(toggleTodoIsCompletedActionFail(message));
  }
};
