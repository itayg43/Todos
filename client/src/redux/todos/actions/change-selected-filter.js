import ACTION_TYPES from "./constants/action-types";

const changeSelectedFilterAction = (selectedFilter) => ({
  type: ACTION_TYPES.CHANGE_SELECTED_FILTER,
  payload: { selectedFilter },
});

export const changeSelectedFilter = (selectedFilter) => async (dispatch) => {
  dispatch(changeSelectedFilterAction(selectedFilter));
};
