import ACTION_TYPES from "./constants/action-types";
import todosService from "../../../services/todos-service";

const toggleTodoIsDeletedAction = () => ({
  type: ACTION_TYPES.TOGGLE_IS_DELETED,
});

const toggleTodoIsDeletedActionSuccess = (updatedTodo, successMessage) => ({
  type: ACTION_TYPES.TOGGLE_IS_DELETED_SUCCESS,
  payload: { updatedTodo, successMessage },
});

const toggleTodoIsDeletedActionFail = (errorMessage) => ({
  type: ACTION_TYPES.TOGGLE_IS_DELETED_FAIL,
  payload: { errorMessage },
});

export const toggleTodoIsDeleted = (todo) => async (dispatch) => {
  try {
    dispatch(toggleTodoIsDeletedAction());
    const updatedTodo = await todosService.toggleTodoIsDeleted(todo);
    const successMessage = updatedTodo.isDeleted ? "Todo deleted" : "Todo reverted";
    dispatch(toggleTodoIsDeletedActionSuccess(updatedTodo, successMessage));
  } catch (error) {
    dispatch(toggleTodoIsDeletedActionFail(error));
  }
};
