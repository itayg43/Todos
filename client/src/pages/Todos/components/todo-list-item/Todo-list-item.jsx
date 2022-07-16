import PropTypes from "prop-types";
import { useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Checkbox } from "monday-ui-react-core";

import { toggleTodoIsCompleted } from "../../../../redux/todos/actions/toggle-todo-is-completed";
import useIsHovered from "../../../../hooks/use-is-hovered";
import TodoTooltip from "../Todo-tooltip";
import TodoListItemActionsIconButton from "./components/todo-list-item-actions-icon-button";
import styles from "./todo-list-item.module.css";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const { value, isCompleted, isDeleted } = todo;

  const [isTodoItemHovered, hoverEventHandlers] = useIsHovered();

  const todoValueRef = useRef(null);

  const onToggleTodoIsCompleted = useCallback(() => {
    dispatch(toggleTodoIsCompleted(todo));
  }, [dispatch, todo]);

  useEffect(() => {
    isCompleted
      ? (todoValueRef.current.style.textDecoration = "line-through")
      : (todoValueRef.current.style.textDecoration = "");
  }, [isCompleted]);

  return (
    <>
      <TodoTooltip isVisible={isTodoItemHovered} todo={todo} />
      <li id="todo-list-item" className={styles.item}>
        <Checkbox
          disabled={isDeleted}
          checked={isCompleted}
          onChange={onToggleTodoIsCompleted}
        />
        <span ref={todoValueRef} className={styles.value} {...hoverEventHandlers}>
          {value}
        </span>
        <TodoListItemActionsIconButton todo={todo} />
      </li>
    </>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object,
};

export default TodoListItem;
