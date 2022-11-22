import { render } from '@testing-library/react';
import UserHeader from './UserHeader';

jest.mock('@mui/material/Typography', () => ({ children }) => <h2>{children}</h2>);
jest.mock('@mui/material/Box', () => ({ children }) => <div>{children}</div>);

const userData = {
  firstName: 'Roman',
  lastName: 'Rymarchuk',
};

describe('Render UserHeader', () => {
  test('should UserHeader render', () => {
    const { asFragment } = render(<UserHeader userData={userData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
