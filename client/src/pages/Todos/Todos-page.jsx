import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Heading } from "monday-ui-react-core";

import { fetchAllTodos } from "../../redux/todos/actions";
import TodoForm from "./components/Todo-form";
import TodoList from "./components/todo-list/Todo-list";
import TodosFiltersPanel from "./components/Todos-filters-panel";
import styles from "./todos-page.module.css";
import TodoSuccessToast from "./components/Todo-success-toast";
import TodoErrorToast from "./components/Todo-error-toast";

const TodosPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

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
