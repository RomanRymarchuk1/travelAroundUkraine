import UserPage from './UserPage';
import { render } from '@testing-library/react';

jest.mock('@mui/material/Container', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/Paper', () => ({ children }) => <div>{children}</div>);
jest.mock('../../features/User/components/UserList/UserList', () => ({ children }) => <div>{children}</div>);
jest.mock('../../features/User/components/UserHeader/UserHeader', () => ({ children }) => <div>{children}</div>);
jest.mock('../../features/User/components/ButtonContainer/ButtonContainer', () => ({ children }) => (
  <div>{children}</div>
));
jest.mock('../../api/getCustomer', () => () => () => {});

describe('Render UserPage', () => {
  test('should UserPage render', () => {
    const { asFragment } = render(<UserPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
