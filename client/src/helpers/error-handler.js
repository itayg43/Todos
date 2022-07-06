import { DEFAULT_ERROR_MESSAGE } from "./constants";

const handleError = (error) => {
  console.error(error);
  return error.response?.data?.message
    ? error.response.data.message
    : DEFAULT_ERROR_MESSAGE;
};

export default handleError;
