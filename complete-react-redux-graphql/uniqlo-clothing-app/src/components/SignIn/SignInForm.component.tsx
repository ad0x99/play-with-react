import { AuthError } from 'firebase/auth';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action';
import { signInDefaultFormFields } from '../../utils/Constants/form.constant';
import { throwAuthenticationError } from '../../utils/Error/authenticationError.utils';
import { Button, BUTTON_TYPES } from '../Button/Button.component';
import FormInput from '../FormInput/FormInput.component';
import { SignInContainer, ButtonsContainer } from './SignInForm.styles';

const SignInForm = () => {
  const [formFields, setFormFields] = useState(signInDefaultFormFields);
  const dispatch = useDispatch();
  const { email, password } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const resetFormFields = () => {
    setFormFields(signInDefaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      throwAuthenticationError(error as AuthError);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={() => handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: 'email',
            required: true,
            autoComplete: 'username',
            onChange: handleChange,
            name: 'email',
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: 'password',
            required: true,
            autoComplete: 'new-password',
            onChange: handleChange,
            name: 'password',
            value: password,
          }}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>

          <Button
            type="button"
            buttonType={BUTTON_TYPES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
