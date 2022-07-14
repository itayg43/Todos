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
    completedAt: new Date().valueOf(),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 3,
    value: "Sell old laptop",
    isCompleted: false,
    completedAt: null,
    isDeleted: true,
    deletedAt: new Date().valueOf(),
  },
];

describe("todo list", () => {
  // pending
  test("should render pending todos", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        todosState: {
          todos,
          searchQuery: "",
          selectedFilter: FILTERS.TODOS.PENDING,
        },
      })
    );
    render(<TodoList />);
    expect(screen.getByText("Buy new laptop")).toBeInTheDocument();
  });

  // completed
  test("should render completed todos", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        todosState: {
          todos,
          searchQuery: "",
          selectedFilter: FILTERS.TODOS.COMPLETED,
        },
      })
    );
    render(<TodoList />);
    expect(screen.getByText("Buy battery for the new laptop")).toBeInTheDocument();
  });

  // deleted
  test("should render deleted todos", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        todosState: {
          todos,
          searchQuery: "",
          selectedFilter: FILTERS.TODOS.DELETED,
        },
      })
    );
    render(<TodoList />);
    expect(screen.getByText("Sell old laptop")).toBeInTheDocument();
  });
});
