import ACTION_TYPES from "./constants/action-types";
import todosService from "../../../services/todos-service";

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
    const successMessage = "Todo added";
    dispatch(submitTodoActionSuccess(todo, successMessage));
  } catch (error) {
    console.log(error);
    dispatch(submitTodoActionFail(error));
  }
};
