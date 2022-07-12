import todosReducer from "../reducer";
import { FILTERS } from "../../../helpers/constants";

test("should return todos initial state", () => {
  expect(todosReducer(undefined, { type: undefined })).toEqual({
    isLoading: false,
    isSuccess: false,
    successMessage: "",
    isError: false,
    errorMessage: "",
    todos: [],
    searchQuery: "",
    selectedFilter: FILTERS.TODOS.PENDING,
  });
});
