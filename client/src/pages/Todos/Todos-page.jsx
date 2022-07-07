import { Heading } from "monday-ui-react-core";

import TodoSuccessToast from "./components/Todo-success-toast";
import TodoErrorToast from "./components/Todo-error-toast";
import TodoForm from "./components/Todo-form";
import TodoList from "./components/todo-list/Todo-list";
import TodosFiltersPanel from "./components/Todos-filters-panel";
import styles from "./todos-page.module.css";

const TodosPage = () => {
  return (
    <>
      <TodoSuccessToast />
      <TodoErrorToast />
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
