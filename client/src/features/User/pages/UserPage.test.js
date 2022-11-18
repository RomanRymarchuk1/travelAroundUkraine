import UserPage from '.';
import { render } from '@testing-library/react';

jest.mock('@mui/material/Container', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/Paper', () => ({ children }) => <div>{children}</div>);
jest.mock('../components/UserList/UserList', () => ({ children }) => <div>{children}</div>);
jest.mock('../components/UserHeader/UserHeader', () => ({ children }) => <div>{children}</div>);
jest.mock('../components/ButtonContainer/ButtonContainer', () => ({ children }) => <div>{children}</div>);
jest.mock('../../../api/getCustomer', () => () => () => {});

describe('Render UserPage', () => {
  test('should UserPage render', () => {
    const { asFragment } = render(<UserPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
