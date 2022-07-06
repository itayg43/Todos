import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Toast } from "monday-ui-react-core";

const ErrorToast = ({ isVisible, error }) => {
  const [isErrorToastOpen, setIsErrorToastOpen] = useState(false);

  const onOpenErrorToast = useCallback(() => {
    setIsErrorToastOpen(true);
  }, [setIsErrorToastOpen]);

  const onCloseErrorToast = useCallback(() => {
    setIsErrorToastOpen(false);
  }, [setIsErrorToastOpen]);

  useEffect(() => {
    isVisible ? onOpenErrorToast() : onCloseErrorToast();
  }, [isVisible, onOpenErrorToast, onCloseErrorToast]);

  return (
    <Toast
      open={isErrorToastOpen}
      type={Toast.types.NEGATIVE}
      autoHideDuration={10000}
      onClose={onCloseErrorToast}
    >
      {error}
    </Toast>
  );
};

ErrorToast.propTypes = {
  isVisible: PropTypes.bool,
  error: PropTypes.string,
};

export default ErrorToast;
