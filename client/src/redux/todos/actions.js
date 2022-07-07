import {
  FETCH_ALL_TODOS,
  FETCH_ALL_TODOS_SUCCESS,
  FETCH_ALL_TODOS_FAIL,
  SUBMIT_TODO,
  SUBMIT_TODO_SUCCESS,
  SUBMIT_TODO_FAIL,
  TOGGLE_IS_COMPLETED,
  TOGGLE_IS_COMPLETED_SUCCESS,
  TOGGLE_IS_COMPLETED_FAIL,
  TOGGLE_IS_DELETED,
  TOGGLE_IS_DELETED_SUCCESS,
  TOGGLE_IS_DELETED_FAIL,
  CHANGE_SEARCH_QUERY,
  CHANGE_FILTER,
} from "./constants";
import todosService from "../../services/todos-service";
import { getUpdatedTodos, getVisibleTodos } from "./utils";
import { TODOS_FILTER_STORAGE_KEY } from "../../helpers/constants";

export const fetchAllTodos = () => async (dispatch, getState) => {
  const { searchQuery, filter } = getState().todosReducer;
  try {
    dispatch({ type: FETCH_ALL_TODOS });
    const todos = await todosService.fetchAllTodos();
    const visibleTodos = getVisibleTodos(todos, searchQuery, filter);
    dispatch({
      type: FETCH_ALL_TODOS_SUCCESS,
      payload: { todos, visibleTodos },
    });
  } catch (error) {
    dispatch({ type: FETCH_ALL_TODOS_FAIL, payload: error });
  }
};

export const submitTodo = (value) => async (dispatch, getState) => {
  const { todos, searchQuery, filter } = getState().todosReducer;
  try {
    dispatch({ type: SUBMIT_TODO });
    const todo = await todosService.submitTodo(value);
    const updatedTodos = todo.length ? [...todos, ...todo] : [...todos, todo];
    const visibleTodos = getVisibleTodos(updatedTodos, searchQuery, filter);
    dispatch({
      type: SUBMIT_TODO_SUCCESS,
      payload: { todos: updatedTodos, visibleTodos },
    });
  } catch (error) {
    dispatch({ type: SUBMIT_TODO_FAIL, payload: error });
  }
};

export const toggleTodoIsCompleted = (values) => async (dispatch, getState) => {
  const { id, isCompleted } = values;
  const { todos, searchQuery, filter } = getState().todosReducer;
  try {
    dispatch({ type: TOGGLE_IS_COMPLETED });
    const todo = await todosService.toggleTodoIsCompleted(id, isCompleted);
    const updatedTodos = getUpdatedTodos(todos, todo);
    const visibleTodos = getVisibleTodos(updatedTodos, searchQuery, filter);
    dispatch({
      type: TOGGLE_IS_COMPLETED_SUCCESS,
      payload: { todos: updatedTodos, visibleTodos },
    });
  } catch (error) {
    dispatch({ type: TOGGLE_IS_COMPLETED_FAIL, payload: error });
  }
};

export const toggleTodoIsDeleted = (values) => async (dispatch, getState) => {
  const { id, isDeleted } = values;
  const { todos, searchQuery, filter } = getState().todosReducer;
  try {
    dispatch({ type: TOGGLE_IS_DELETED });
    const todo = await todosService.toggleTodoIsDeleted(id, isDeleted);
    const updatedTodos = getUpdatedTodos(todos, todo);
    const visibleTodos = getVisibleTodos(updatedTodos, searchQuery, filter);
    dispatch({
      type: TOGGLE_IS_DELETED_SUCCESS,
      payload: { todos: updatedTodos, visibleTodos },
    });
  } catch (error) {
    dispatch({ type: TOGGLE_IS_DELETED_FAIL, payload: error });
  }
};

export const changeSearchQuery = (searchQuery) => async (dispatch, getState) => {
  const { todos, filter } = getState().todosReducer;
  const visibleTodos = getVisibleTodos(todos, searchQuery, filter);
  dispatch({
    type: CHANGE_SEARCH_QUERY,
    payload: { visibleTodos, searchQuery },
  });
};

export const changeFilter = (filter) => async (dispatch, getState) => {
  localStorage.setItem(TODOS_FILTER_STORAGE_KEY, filter);
  const { todos, searchQuery } = getState().todosReducer;
  const visibleTodos = getVisibleTodos(todos, searchQuery, filter);
  dispatch({ type: CHANGE_FILTER, payload: { visibleTodos, filter } });
};
