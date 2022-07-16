import { useSelector } from "react-redux";
import { Heading } from "monday-ui-react-core";

import SuccessToast from "../../components/Success-toast";
import ErrorToast from "../../components/Error-toast";
import TodoForm from "./components/Todo-form";
import TodoList from "./components/todo-list/Todo-list";
import TodosFiltersPanel from "./components/Todos-filters-panel";
import styles from "./todos-page.module.css";

const TodosPage = () => {
  const { isSuccess, successMessage, isError, errorMessage } = useSelector(
    (state) => state.todosState
  );

  return (
    <>
      <SuccessToast isVisible={isSuccess} message={successMessage} />
      <ErrorToast isVisible={isError} message={errorMessage} />
      <div className={styles.container}>
        <Heading id="todos-heading" value="Todos" />
        <TodoForm />
        <div className={styles.filtersPanelContainer}>
          <TodosFiltersPanel />
        </div>
        <TodoList />
      </div>
    </>
  );
};

export default TodosPage;
