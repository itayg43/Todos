import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "monday-ui-react-core";

import TodosPage from "./pages/Todos/Todos-page";
import { fetchAllData } from "./redux/app/actions/fetch-all-data";
import styles from "./app.module.css";

const App = () => {
  const dispatch = useDispatch();

  const { isLoading, isReady } = useSelector((state) => state.appState);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {isLoading && (
        <Loader
          hasBackground
          color={Loader.colors.PRIMARY}
          size={Loader.sizes.LARGE}
        />
      )}
      {isReady && <TodosPage />}
    </div>
  );
};

export default App;
