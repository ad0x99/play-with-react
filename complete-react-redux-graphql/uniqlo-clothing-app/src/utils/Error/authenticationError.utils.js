import { AUTHENTICATION_ERROR_CODE } from '../Constants/error.constant';

// Authentication error handler
const throwAuthenticationError = (error) => {
  switch (error.code) {
    case AUTHENTICATION_ERROR_CODE.invalidUserNameOrPassword:
      alert('Incorrect email or password. Please try again');
      break;
    case AUTHENTICATION_ERROR_CODE.userDoesNotExist:
      alert('User does not exist. Please try again');
      break;
    case AUTHENTICATION_ERROR_CODE.emailAlreadyExists:
      alert('Email already in use');
      break;
    case AUTHENTICATION_ERROR_CODE.invalidPasswordLength:
      alert('Password should be at least 6 characters');
      break;

    default:
      console.error('An error occurred while handling authentication', error);
      break;
  }
};

export { throwAuthenticationError };
