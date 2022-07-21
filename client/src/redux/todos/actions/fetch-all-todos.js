import ACTION_TYPES from "./constants/action-types";
import todosService from "../../../services/todos-service";

const fetchAllTodosAction = () => ({
  type: ACTION_TYPES.FETCH_ALL_TODOS,
});

const fetchAllTodosActionSuccess = (todos) => ({
  type: ACTION_TYPES.FETCH_ALL_TODOS_SUCCESS,
  payload: { todos },
});

const fetchAllTodosActionFail = (errorMessage) => ({
  type: ACTION_TYPES.FETCH_ALL_TODOS_FAIL,
  payload: { errorMessage },
});

export const fetchAllTodos = () => async (dispatch) => {
  try {
    dispatch(fetchAllTodosAction());
    const todos = await todosService.fetchAllTodos();
    dispatch(fetchAllTodosActionSuccess(todos));
  } catch ({ message }) {
    dispatch(fetchAllTodosActionFail(message));
  }
};
