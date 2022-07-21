import ACTION_TYPES from "./constants/action-types";
import { STORAGE_KEYS } from "../../../helpers/constants";

const changeSelectedFilterAction = (selectedFilter) => ({
  type: ACTION_TYPES.CHANGE_SELECTED_FILTER,
  payload: { selectedFilter },
});

export const changeSelectedFilter = (selectedFilter) => async (dispatch) => {
  localStorage.setItem(STORAGE_KEYS.SELECTED_FILTER, selectedFilter);
  dispatch(changeSelectedFilterAction(selectedFilter));
};
