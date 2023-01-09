// Authentication error handler
const throwAuthenticationError = (error) => {
  switch (error.code) {
    case 'auth/wrong-password':
      alert('Incorrect email or password. Please try again');
      break;
    case 'auth/user-not-found':
      alert('User does not exist. Please try again');
      break;
    case ' auth/email-already-in-use':
      alert('Can not create user, email already in use');
      break;

    default:
      console.error('An error occurred while handling authentication', error);
      break;
  }
};

export default throwAuthenticationError;
