import SignInForm from '../../components/SignIn/SignInForm.component';
import SignUpForm from '../../components/SignUp/SignUpForm.component';
import './Authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
