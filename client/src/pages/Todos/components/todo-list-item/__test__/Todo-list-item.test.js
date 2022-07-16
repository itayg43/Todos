import { render } from "@testing-library/react";

import { TEST_TODO } from "../../../../../redux/todos/test-data";
import TodoListItem from "../Todo-list-item";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));
describe("todo list item", () => {
  // uncompleted
  test("render uncompleted todo", () => {
    const { container } = render(<TodoListItem todo={TEST_TODO} />);
    expect(container).toMatchSnapshot();
  });

  // completed
  test("render completed todo", () => {
    const { container } = render(
      <TodoListItem
        todo={{
          ...TEST_TODO,
          isCompleted: true,
          completedAt: new Date().valueOf(),
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
