import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { TextField } from "monday-ui-react-core";

const FormTextField = ({
  field,
  placeholder,
  size = TextField.sizes.MEDIUM,
  loading,
  ...otherProps
}) => {
  const { values, handleChange, errors } = useFormikContext();

  return (
    <TextField
      placeholder={placeholder}
      size={size}
      value={values[field]}
      onChange={handleChange(field)}
      validation={errors[field] && { status: "error", text: errors[field] }}
      loading={loading}
      {...otherProps}
    />
  );
};

FormTextField.propTypes = {
  field: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
};

export default FormTextField;
