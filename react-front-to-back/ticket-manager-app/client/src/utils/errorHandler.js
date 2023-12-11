/**
 * This function extracts the error message from an error object, prioritizing the
 * `errorMessage` property of the error's response data, then the error message itself, and finally converting the error to a string.
 * @param error - The error parameter is the error object that is passed to the function. It can be an error object thrown by JavaScript or an error object returned by an API response.
 * @returns the error message.
 */
export const extractErrorMessage = (error) => {
  const message =
    (error.response &&
      error.response.data &&
      error.response.data.errorMessage) ||
    error.message ||
    error.toString();

  return message;
};
