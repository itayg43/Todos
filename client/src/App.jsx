import TodosPage from "./pages/Todos/Todos-page";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <TodosPage />
    </div>
  );
};

export default App;
