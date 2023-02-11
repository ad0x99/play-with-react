import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from './PaymentForm.styles.jsx';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton onClick={paymentHandler}>Pay Now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
