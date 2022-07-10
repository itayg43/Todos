import ACTION_TYPES from "./constants/action-types";
import { fetchAllTodos } from "../../todos/actions/fetch-all-todos";

const fetchAllDataAction = () => ({
  type: ACTION_TYPES.FETCH_ALL_DATA,
});

const fetchAllDataActionFinish = () => ({
  type: ACTION_TYPES.FETCH_ALL_DATA_FINISH,
});

export const fetchAllData = () => async (dispatch) => {
  dispatch(fetchAllDataAction());
  await Promise.all([dispatch(fetchAllTodos())]);
  dispatch(fetchAllDataActionFinish());
};
