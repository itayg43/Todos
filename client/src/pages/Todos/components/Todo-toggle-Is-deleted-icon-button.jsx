import PropTypes from "prop-types";
import { IconButton } from "monday-ui-react-core";
import { Delete, Undo } from "monday-ui-react-core/dist/allIcons";

const TodoToggleIsDeletedIconButton = ({ isDeleted, onToggle }) => {
  return isDeleted ? (
    <IconButton ariaLabel="Undo" icon={Undo} onClick={onToggle} />
  ) : (
    <IconButton ariaLabel="Delete" icon={Delete} onClick={onToggle} />
  );
};

TodoToggleIsDeletedIconButton.propTypes = {
  isDeleted: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default TodoToggleIsDeletedIconButton;
