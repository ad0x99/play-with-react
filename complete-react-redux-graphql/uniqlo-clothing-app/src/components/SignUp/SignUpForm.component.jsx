import { useState } from 'react';
import { signUpDefaultFormFields } from '../../utils/Constants/form.constant';
import { throwAuthenticationError } from '../../utils/Error/authenticationError.utils';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { Button, BUTTON_TYPES } from '../Button/Button.component';
import FormInput from '../FormInput/FormInput.component';

import './SignUpForm.styles.scss';

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(signUpDefaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(signUpDefaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Your passwords do not match');
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName, password });
      resetFormFields();
    } catch (error) {
      throwAuthenticationError(error);
    }
  };

  return (
    <div className="sign-up-container">
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
    </div>
  );
};

export default SignUpForm;
