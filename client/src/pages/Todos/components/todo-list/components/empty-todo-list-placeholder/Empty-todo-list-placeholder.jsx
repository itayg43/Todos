import { useSelector } from "react-redux";

import styles from "./empty-todo-list-placeholder.module.css";

const EmptyTodoListPlaceholder = () => {
  const { searchQuery, selectedFilter } = useSelector((state) => state.todosState);

  const emptyListText = searchQuery
    ? `No result for ${searchQuery}`
    : `No ${selectedFilter.toLowerCase()} todos`;

  return <div className={styles.emptyList}>{emptyListText}</div>;
};

export default EmptyTodoListPlaceholder;
