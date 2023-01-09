import SignInForm from '../../components/SignIn/SignInForm.component.jsx';
import SignUpForm from '../../components/SignUp/SignUpForm.component.jsx';
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
