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
  CHANGE_FILTER,
} from "./constants";
import { TODOS_FILTERS, TODOS_FILTER_STORAGE_KEY } from "../../helpers/constants";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  todos: [],
  visibleTodos: [],
  filter: localStorage.getItem(TODOS_FILTER_STORAGE_KEY) || TODOS_FILTERS.PENDING,
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // load
    case FETCH_ALL_TODOS:
      return { ...state, ...onRequestLoading() };
    case FETCH_ALL_TODOS_SUCCESS:
      return { ...state, ...onRequestSuccess(payload) };
    case FETCH_ALL_TODOS_FAIL:
      return { ...state, ...onRequestFail(payload) };
    // submit
    case SUBMIT_TODO:
      return { ...state, ...onRequestLoading() };
    case SUBMIT_TODO_SUCCESS:
      return { ...state, ...onRequestSuccess(payload) };
    case SUBMIT_TODO_FAIL:
      return { ...state, ...onRequestFail(payload) };
    // toggle is completed
    case TOGGLE_IS_COMPLETED:
      return { ...state, ...onRequestLoading() };
    case TOGGLE_IS_COMPLETED_SUCCESS:
      return { ...state, ...onRequestSuccess(payload) };
    case TOGGLE_IS_COMPLETED_FAIL:
      return { ...state, ...onRequestFail(payload) };
    // toggle is deleted
    case TOGGLE_IS_DELETED:
      return { ...state, ...onRequestLoading() };
    case TOGGLE_IS_DELETED_SUCCESS:
      return { ...state, ...onRequestSuccess(payload) };
    case TOGGLE_IS_DELETED_FAIL:
      return { ...state, ...onRequestFail(payload) };
    // change filter
    case CHANGE_FILTER:
      return {
        ...state,
        visibleTodos: payload.visibleTodos,
        filter: payload.filter,
      };
    default:
      return initialState;
  }
};

function onRequestLoading() {
  return {
    isLoading: true,
    isError: false,
    error: null,
  };
}

function onRequestSuccess({ todos, visibleTodos }) {
  return {
    isLoading: false,
    isError: false,
    error: null,
    todos,
    visibleTodos,
  };
}

function onRequestFail(payload) {
  return {
    isLoading: false,
    isError: true,
    error: payload,
  };
}

export default todosReducer;
