import todosReducer from "../../reducer";
import { changeSelectedFilterAction } from "../../actions/change-selected-filter";
import { FILTERS } from "../../../../helpers/constants";
import { TEST_STATE } from "../../test-data";

test("should handle selected filter change", () => {
  expect(
    todosReducer(TEST_STATE, changeSelectedFilterAction(FILTERS.TODOS.COMPLETED))
  ).toEqual({
    ...TEST_STATE,
    selectedFilter: FILTERS.TODOS.COMPLETED,
  });
});
