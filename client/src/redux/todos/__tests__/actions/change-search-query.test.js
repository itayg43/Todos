import todosReducer from "../../reducer";
import ACTION_TYPES from "../../actions/constants/action-types";
import { FILTERS } from "../../../../helpers/constants";

const PREV_STATE = {
  isLoading: false,
  isSuccess: false,
  successMessage: "",
  isError: false,
  errorMessage: "",
  todos: [],
  searchQuery: "",
  selectedFilter: FILTERS.TODOS.PENDING,
};

test("should handle search query change", () => {
  expect(
    todosReducer(PREV_STATE, {
      type: ACTION_TYPES.CHANGE_SEARCH_QUERY,
      payload: { searchQuery: "search" },
    })
  ).toEqual({
    ...PREV_STATE,
    searchQuery: "search",
  });
});
