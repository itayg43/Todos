import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";

import { FILTERS } from "../../../../../helpers/constants";
import TodoList from "../Todo-list";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const todos = [
  {
    id: 1,
    value: "Buy new laptop",
    isCompleted: false,
    completedAt: null,
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 2,
    value: "Buy battery for the new laptop",
    isCompleted: true,
    completedAt: 1,
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 3,
    value: "Sell old laptop",
    isCompleted: false,
    completedAt: null,
    isDeleted: true,
    deletedAt: 1,
  },
];

const mockUseSelector = (todos, searchQuery, selectedFilter) => {
  useSelector.mockImplementation((selector) =>
    selector({
      todosState: {
        todos,
        searchQuery,
        selectedFilter,
      },
    })
  );
};

describe("todo list", () => {
  // empty
  test("should render empty placeholder", () => {
    mockUseSelector([], "", FILTERS.TODOS.PENDING);
    render(<TodoList />);
    expect(screen.getByText("No pending todos")).toBeInTheDocument();
  });

  // pending
  test("should render pending todos", () => {
    mockUseSelector(todos, "", FILTERS.TODOS.PENDING);
    render(<TodoList />);
    expect(screen.getByText("Buy new laptop")).toBeInTheDocument();
  });

  // completed
  test("should render completed todos", () => {
    mockUseSelector(todos, "", FILTERS.TODOS.COMPLETED);
    render(<TodoList />);
    expect(screen.getByText("Buy battery for the new laptop")).toBeInTheDocument();
  });

  // deleted
  test("should render deleted todos", () => {
    mockUseSelector(todos, "", FILTERS.TODOS.DELETED);
    render(<TodoList />);
    expect(screen.getByText("Sell old laptop")).toBeInTheDocument();
  });
});
