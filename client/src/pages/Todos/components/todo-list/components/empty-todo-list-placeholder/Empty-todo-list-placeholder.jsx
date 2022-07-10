import styles from "./empty-todo-list-placeholder.module.css";

const EmptyTodoListPlaceholder = ({ selectedFilter }) => {
  return (
    <div className={styles.empty_list}>
      {`No ${selectedFilter.toLowerCase()} todos`}
    </div>
  );
};

export default EmptyTodoListPlaceholder;
