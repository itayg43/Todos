import todosReducer from "../../reducer";
import { changeSearchQueryAction } from "../../actions/change-search-query";
import { TEST_STATE } from "../../test-data";

test("should handle search query change", () => {
  expect(todosReducer(TEST_STATE, changeSearchQueryAction("search"))).toEqual({
    ...TEST_STATE,
    searchQuery: "search",
  });
});
