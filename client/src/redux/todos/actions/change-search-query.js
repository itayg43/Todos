import ACTION_TYPES from "./constants/action-types";

const changeSearchQueryAction = (searchQuery) => ({
  type: ACTION_TYPES.CHANGE_SEARCH_QUERY,
  payload: { searchQuery },
});

export const changeSearchQuery = (searchQuery) => async (dispatch) => {
  dispatch(changeSearchQueryAction(searchQuery));
};
