import { useSelector } from "react-redux";

import TodoListItem from "../todo-list-item/Todo-list-item";
import styles from "./todo-list.module.css";

const TodoList = () => {
  const { isLoading, visibleTodos, selectedFilter } = useSelector(
    (state) => state.todosState
  );

  return !visibleTodos.length && !isLoading ? (
    <div className={styles.empty_list}>
      {`No ${selectedFilter.toLowerCase()} todos`}
    </div>
  ) : (
    <ul className={styles.list}>
      {visibleTodos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
