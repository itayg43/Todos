import { useMemo } from "react";
import { useSelector } from "react-redux";

import { filterTodos } from "../../../../redux/todos/utils";
import TodoListItem from "../todo-list-item/Todo-list-item";
import EmptyTodoListPlaceholder from "./components/empty-todo-list-placeholder/Empty-todo-list-placeholder";
import styles from "./todo-list.module.css";

const TodoList = () => {
  const { isLoading, todos, searchQuery, selectedFilter } = useSelector(
    (state) => state.todosState
  );

  const visibleTodos = useMemo(
    () => filterTodos(todos, searchQuery, selectedFilter),
    [todos, searchQuery, selectedFilter]
  );

  return !visibleTodos.length && !isLoading ? (
    <EmptyTodoListPlaceholder selectedFilter={selectedFilter} />
  ) : (
    <ul className={styles.list}>
      {visibleTodos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
