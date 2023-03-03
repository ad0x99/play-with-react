import { AuthError } from 'firebase/auth';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';

import { signUpDefaultFormFields } from '../../utils/Constants/form.constant';
import { throwAuthenticationError } from '../../utils/Error/authenticationError.utils';

import { Button, BUTTON_TYPES } from '../Button/Button.component';
import FormInput from '../FormInput/FormInput.component';

import { SignUpContainer } from './SignUpForm.styles';

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(signUpDefaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(signUpDefaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Your passwords do not match');
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      resetFormFields();
    } catch (error) {
      throwAuthenticationError(error as AuthError);
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: 'text',
            required: true,
            onChange: handleChange,
            name: 'displayName',
            value: displayName,
          }}
        />

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

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: 'password',
            required: true,
            autoComplete: 'new-password',
            onChange: handleChange,
            name: 'confirmPassword',
            value: confirmPassword,
          }}
        />

        <Button buttonType={BUTTON_TYPES.inverted} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
