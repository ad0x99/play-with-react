import { useState, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { signInDefaultFormFields } from '../../utils/Constants/form.constant';
import throwAuthenticationError from '../../utils/Error/authenticationError.utils';
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { Button } from '../Button/Button.component';
import FormInput from '../FormInput/FormInput.component';
import './SignInForm.styles.scss';

const SignInForm = () => {
  const [formFields, setFormFields] = useState(signInDefaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(signInDefaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      throwAuthenticationError(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>

          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
