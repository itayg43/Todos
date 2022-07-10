import ACTION_TYPES from "./constants/action-types";
import todosService from "../../../services/todos-service";
import { SUCCESS_MESSAGES } from "../../../helpers/constants";

const submitTodoAction = () => ({
  type: ACTION_TYPES.SUBMIT_TODO,
});

const submitTodoActionSuccess = (todo, successMessage) => ({
  type: ACTION_TYPES.SUBMIT_TODO_SUCCESS,
  payload: { todo, successMessage },
});

const submitTodoActionFail = (errorMessage) => ({
  type: ACTION_TYPES.SUBMIT_TODO_FAIL,
  payload: { errorMessage },
});

export const submitTodo = (value) => async (dispatch) => {
  try {
    dispatch(submitTodoAction());
    const todo = await todosService.submitTodo(value);
    const successMessage = SUCCESS_MESSAGES.TODOS.SUBMIT_TODO;
    dispatch(submitTodoActionSuccess(todo, successMessage));
  } catch (error) {
    dispatch(submitTodoActionFail(error));
  }
};
