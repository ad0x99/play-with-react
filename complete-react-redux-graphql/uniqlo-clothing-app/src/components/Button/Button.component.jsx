import './Button.styles.scss';

const BUTTON_TYPES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...props }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, BUTTON_TYPES };
