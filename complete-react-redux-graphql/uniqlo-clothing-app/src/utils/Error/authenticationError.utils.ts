import { AuthError, AuthErrorCodes } from 'firebase/auth';

// Authentication error handler
const throwAuthenticationError = (error: AuthError) => {
  switch (error.code) {
    case AuthErrorCodes.INVALID_PASSWORD:
    case AuthErrorCodes.INVALID_EMAIL:
      alert('Incorrect email or password. Please try again');
      break;
    case AuthErrorCodes.USER_DELETED:
      alert('User does not exist. Please try again');
      break;
    case AuthErrorCodes.EMAIL_EXISTS:
      alert('Email already in use');
      break;
    case AuthErrorCodes.WEAK_PASSWORD:
      alert('Password should be at least 6 characters');
      break;

    default:
      console.error('An error occurred while handling authentication', error);
      break;
  }
};

export { throwAuthenticationError };
