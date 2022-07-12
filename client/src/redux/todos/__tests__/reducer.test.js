import todosReducer from "../reducer";
import { TEST_STATE } from "../test-data";

test("should return todos initial state", () => {
  expect(todosReducer(undefined, { type: undefined })).toEqual(TEST_STATE);
});
