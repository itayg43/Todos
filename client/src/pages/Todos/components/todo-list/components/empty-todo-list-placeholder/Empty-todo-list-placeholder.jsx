import { useSelector } from "react-redux";

import styles from "./empty-todo-list-placeholder.module.css";

const EmptyTodoListPlaceholder = () => {
  const { selectedFilter } = useSelector((state) => state.todosState);

  return (
    <div className={styles.emptyList}>
      {`No ${selectedFilter.toLowerCase()} todos`}
    </div>
  );
};

export default EmptyTodoListPlaceholder;
