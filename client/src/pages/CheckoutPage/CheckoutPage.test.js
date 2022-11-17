/* eslint-disable react/prop-types */
import CheckoutPage from './CheckoutPage';
import { render } from '@testing-library/react';

jest.mock('@mui/material/Typography', () => ({ children }) => <p>{children}</p>);
jest.mock('@mui/material/Container', () => ({ children }) => <div>{children}</div>);
jest.mock('../../components/CheckoutForm/CheckoutForm', () => ({ children }) => <div>CHECKOUT FORM</div>);

describe('CheckoutPage snapshot test', () => {
  test('should CheckoutPage match snapshot', () => {
    const { asFragment } = render(<CheckoutPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
