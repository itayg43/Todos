import { useSelector } from "react-redux";
import { Heading } from "monday-ui-react-core";

import SuccessToast from "../../components/Success-toast";
import ErrorToast from "../../components/Error-toast";
import TodoForm from "./components/Todo-form";
import TodoList from "./components/todo-list/Todo-list";
import TodosFiltersPanel from "./components/Todos-filters-panel";
import { getSuccessMessage } from "../../redux/todos/utils";
import styles from "./todos-page.module.css";

const TodosPage = () => {
  const todosReducer = useSelector((state) => state.todosReducer);
  const { isSuccess, actionSuccess, isError, error } = todosReducer;

  return (
    <>
      <SuccessToast
        isVisible={isSuccess && actionSuccess ? true : false}
        message={getSuccessMessage(actionSuccess)}
      />
      <ErrorToast isVisible={isError} message={error} />
      <div className={styles.container}>
        <Heading value="Todos" />
        <TodoForm />
        <TodoList />
        <TodosFiltersPanel />
      </div>
    </>
  );
};

export default TodosPage;
