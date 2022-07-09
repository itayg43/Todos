import ACTION_TYPES from "./constants/action-types";
import todosService from "../../../services/todos-service";

const fetchAllAction = () => ({
  type: ACTION_TYPES.FETCH_ALL_TODOS,
});

const fetchAllActionSuccess = (todos) => ({
  type: ACTION_TYPES.FETCH_ALL_TODOS_SUCCESS,
  payload: { todos },
});

const fetchAllActionFail = (errorMessage) => ({
  type: ACTION_TYPES.FETCH_ALL_TODOS_FAIL,
  payload: { errorMessage },
});

export const fetchAllTodos = () => async (dispatch) => {
  try {
    dispatch(fetchAllAction());
    const todos = await todosService.fetchAllTodos();
    dispatch(fetchAllActionSuccess(todos));
  } catch (error) {
    dispatch(fetchAllActionFail(error));
  }
};
