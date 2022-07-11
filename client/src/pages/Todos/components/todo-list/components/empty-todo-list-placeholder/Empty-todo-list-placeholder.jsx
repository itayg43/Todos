import { useSelector } from "react-redux";

import styles from "./empty-todo-list-placeholder.module.css";

const EmptyTodoListPlaceholder = () => {
  const { searchQuery, selectedFilter } = useSelector((state) => state.todosState);

  return (
    <div className={styles.emptyList}>
      {searchQuery && `No result`}
      {!searchQuery && `No ${selectedFilter.toLowerCase()} todos`}
    </div>
  );
};

export default EmptyTodoListPlaceholder;
