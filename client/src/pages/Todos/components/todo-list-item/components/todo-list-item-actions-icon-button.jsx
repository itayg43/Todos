import PropTypes from "prop-types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "monday-ui-react-core";
import { Delete, Undo } from "monday-ui-react-core/dist/allIcons";

import { toggleTodoIsDeleted } from "../../../../../redux/todos/actions/toggle-todo-is-deleted";

const TodoListItemActionsIconButton = ({ todo }) => {
  const dispatch = useDispatch();

  const { isDeleted } = todo;

  const onToggleTodoIsDeleted = useCallback(() => {
    dispatch(toggleTodoIsDeleted(todo));
  }, [dispatch, todo]);

  return isDeleted ? (
    <IconButton ariaLabel="Undo" icon={Undo} onClick={onToggleTodoIsDeleted} />
  ) : (
    <IconButton ariaLabel="Delete" icon={Delete} onClick={onToggleTodoIsDeleted} />
  );
};

TodoListItemActionsIconButton.propTypes = {
  todo: PropTypes.object,
};

export default TodoListItemActionsIconButton;
