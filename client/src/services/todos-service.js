import { todosClient } from "../clients";
import handleError from "../helpers/error-handler";

const fetchAllTodos = async () => {
  try {
    const { data } = await todosClient.get();
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

const submitTodo = async (value) => {
  try {
    const { data } = await todosClient.post("", { value });
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

const toggleTodoIsCompleted = async (todo) => {
  const { id, isCompleted } = todo;
  try {
    const { data } = await todosClient.patch(`/${id}`, {
      isCompleted: !isCompleted,
    });
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

const toggleTodoIsDeleted = async (todo) => {
  const { id, isDeleted } = todo;
  try {
    const { data } = await todosClient.delete(`/${id}`, {
      data: { isDeleted: !isDeleted },
    });
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

export default {
  fetchAllTodos,
  submitTodo,
  toggleTodoIsCompleted,
  toggleTodoIsDeleted,
};
