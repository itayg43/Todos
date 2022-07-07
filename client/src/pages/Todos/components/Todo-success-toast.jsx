import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Toast } from "monday-ui-react-core";

import { getSuccessMessage } from "../../../redux/todos/utils";

const TodoSuccessToast = () => {
  const { isSuccess, actionSuccess } = useSelector((state) => state.todosReducer);

  const [isToastOpen, setIsToastOpen] = useState(false);

  const onOpenToast = useCallback(() => {
    setIsToastOpen(true);
  }, [setIsToastOpen]);

  const onCloseToast = useCallback(() => {
    setIsToastOpen(false);
  }, [setIsToastOpen]);

  useEffect(() => {
    isSuccess && actionSuccess ? onOpenToast() : onCloseToast();
  }, [isSuccess, actionSuccess, onOpenToast, onCloseToast]);

  return (
    <Toast
      open={isToastOpen}
      type={Toast.types.POSITIVE}
      autoHideDuration={10000}
      onClose={onCloseToast}
    >
      {getSuccessMessage(actionSuccess)}
    </Toast>
  );
};

export default TodoSuccessToast;
