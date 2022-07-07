import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Toast } from "monday-ui-react-core";

const TodoErrorToast = () => {
  const { isError, error } = useSelector((state) => state.todosReducer);

  const [isToastOpen, setIsToastOpen] = useState(false);

  const onOpenToast = useCallback(() => {
    setIsToastOpen(true);
  }, [setIsToastOpen]);

  const onCloseToast = useCallback(() => {
    setIsToastOpen(false);
  }, [setIsToastOpen]);

  useEffect(() => {
    isError ? onOpenToast() : onCloseToast();
  }, [isError, onOpenToast, onCloseToast]);

  return (
    <Toast
      open={isToastOpen}
      type={Toast.types.NEGATIVE}
      autoHideDuration={10000}
      onClose={onCloseToast}
    >
      {error}
    </Toast>
  );
};

export default TodoErrorToast;
