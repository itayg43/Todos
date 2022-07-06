import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading } from "monday-ui-react-core";

import { fetchAllTodos } from "../../redux/todos/actions";
import TodoForm from "./components/Todo-form";
import TodoList from "./components/todo-list/Todo-list";
import ErrorToast from "../../components/Error-toast";
import TodosFiltersPanel from "./components/Todos-filters-panel";
import styles from "./todos-page.module.css";

const TodosPage = () => {
  const dispatch = useDispatch();

  const { isError, error } = useSelector((state) => state.todosReducer);

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <>
      <ErrorToast isVisible={isError} error={error} />
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
