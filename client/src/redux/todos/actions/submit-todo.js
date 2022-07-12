import ACTION_TYPES from "./constants/action-types";
import todosService from "../../../services/todos-service";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../../helpers/constants";

export const submitTodoAction = () => ({
  type: ACTION_TYPES.SUBMIT_TODO,
});

export const submitTodoActionSuccess = (todo, successMessage) => ({
  type: ACTION_TYPES.SUBMIT_TODO_SUCCESS,
  payload: { todo, successMessage },
});

export const submitTodoActionSuccessWithError = (todo, errorMessage) => ({
  type: ACTION_TYPES.SUBMIT_TODO_SUCCESS_WITH_ERROR,
  payload: { todo, errorMessage },
});

export const submitTodoActionFail = (errorMessage) => ({
  type: ACTION_TYPES.SUBMIT_TODO_FAIL,
  payload: { errorMessage },
});

export const submitTodo = (value) => async (dispatch) => {
  try {
    dispatch(submitTodoAction());
    const { todo, idsFailed } = await todosService.submitTodo(value);
    if (idsFailed) {
      const errorMessage = createIdsFailedErrorMessage(idsFailed);
      return dispatch(submitTodoActionSuccessWithError(todo, errorMessage));
    }
    const successMessage = SUCCESS_MESSAGES.TODOS.SUBMIT_TODO;
    dispatch(submitTodoActionSuccess(todo, successMessage));
  } catch ({ message }) {
    dispatch(submitTodoActionFail(message));
  }
};

function createIdsFailedErrorMessage(idsFailed) {
  return `${ERROR_MESSAGES.FAILED_TO_FETCH_POKEMONS_IDS} ${idsFailed.join(", ")}`;
}
