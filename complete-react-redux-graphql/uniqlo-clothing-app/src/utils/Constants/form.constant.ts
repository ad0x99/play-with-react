type SignInDefaultFormFields = {
  email: string;
  password: string;
};

type SignUpDefaultFormFields = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const signInDefaultFormFields: SignInDefaultFormFields = {
  email: '',
  password: '',
};

const signUpDefaultFormFields: SignUpDefaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export { signInDefaultFormFields, signUpDefaultFormFields };
