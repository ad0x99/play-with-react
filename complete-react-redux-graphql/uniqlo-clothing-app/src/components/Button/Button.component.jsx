import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './Button.styles.jsx';

const BUTTON_TYPES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.google]: GoogleSignInButton,
    [BUTTON_TYPES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...props }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...props}>{children}</CustomButton>;
};

export { Button, BUTTON_TYPES };
