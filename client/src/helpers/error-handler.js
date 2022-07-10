import { ERROR_MESSAGES } from "./constants";

const handleError = (error) => {
  console.error(error);
  return error.response?.data?.message
    ? error.response.data.message
    : ERROR_MESSAGES.DEFAULT;
};

export default handleError;
