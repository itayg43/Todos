import PropTypes from "prop-types";
import { Button } from "monday-ui-react-core";

const FormSubmitButton = ({ label, icon }) => {
  return (
    <Button type={Button.inputTags.SUBMIT} leftIcon={icon}>
      {label}
    </Button>
  );
};

FormSubmitButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
};

export default FormSubmitButton;
