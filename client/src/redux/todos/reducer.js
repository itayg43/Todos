import ACTION_TYPES from "./actions/constants/action-types";
import { FILTERS, STORAGE_KEYS } from "../../helpers/constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMessage: "",
  isError: false,
  errorMessage: "",
  todos: [],
  searchQuery: "",
  selectedFilter:
    localStorage.getItem(STORAGE_KEYS.SELECTED_FILTER) || FILTERS.TODOS.PENDING,
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_ALL_TODOS:
    case ACTION_TYPES.SUBMIT_TODO:
    case ACTION_TYPES.TOGGLE_IS_COMPLETED:
    case ACTION_TYPES.TOGGLE_IS_DELETED: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        successMessage: "",
        isError: false,
        errorMessage: "",
      };
    }

    case ACTION_TYPES.FETCH_ALL_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        ...onRequestSuccess(),
        todos,
      };
    }

    case ACTION_TYPES.SUBMIT_TODO_SUCCESS: {
      const { successMessage, todo } = payload;
      const dataToAdd = Array.isArray(todo) ? todo : [todo];
      console.log(dataToAdd);
      return {
        ...state,
        ...onRequestSuccess(successMessage),
        todos: [...state.todos, ...dataToAdd],
      };
    }

    case ACTION_TYPES.TOGGLE_IS_COMPLETED_SUCCESS:
    case ACTION_TYPES.TOGGLE_IS_DELETED_SUCCESS: {
      const { successMessage, updatedTodo } = payload;
      return {
        ...state,
        ...onRequestSuccess(successMessage),
        todos: state.todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        ),
      };
    }

    case ACTION_TYPES.FETCH_ALL_TODOS_FAIL:
    case ACTION_TYPES.SUBMIT_TODO_FAIL:
    case ACTION_TYPES.TOGGLE_IS_COMPLETED_FAIL:
    case ACTION_TYPES.TOGGLE_IS_DELETED_FAIL: {
      const { errorMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        successMessage: "",
        isError: true,
        errorMessage,
      };
    }

    case ACTION_TYPES.CHANGE_SEARCH_QUERY: {
      const { searchQuery } = payload;
      return {
        ...state,
        searchQuery,
      };
    }

    case ACTION_TYPES.CHANGE_SELECTED_FILTER: {
      const { selectedFilter } = payload;
      return {
        ...state,
        selectedFilter,
      };
    }

    default:
      return state;
  }
};

function onRequestSuccess(successMessage = "") {
  return {
    isLoading: false,
    isSuccess: true,
    successMessage,
    isError: false,
    errorMessage: "",
  };
}

export default todosReducer;
