import PropTypes from "prop-types";
import { Tooltip } from "monday-ui-react-core";

import { convertTimestampToDate } from "../../../helpers/utils";

const TodoTooltip = ({ isVisible, todo }) => {
  const { isCompleted, isDeleted, completedAt, deletedAt } = todo;

  return isVisible ? (
    <Tooltip
      content={
        isDeleted
          ? `Deleted on ${convertTimestampToDate(deletedAt)}`
          : isCompleted
          ? `Completed on ${convertTimestampToDate(completedAt)}`
          : null
      }
      shouldShowOnMount
    >
      <div />
    </Tooltip>
  ) : null;
};

TodoTooltip.propTypes = {
  isVisible: PropTypes.bool,
  todo: PropTypes.object,
};

export default TodoTooltip;
