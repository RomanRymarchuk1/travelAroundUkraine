import LogInForm from './LogInForm';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

jest.mock('@mui/material/Box', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/Button', () => ({ children }) => <button>{children}</button>);
jest.mock('@mui/material/Typography', () => ({ children }) => <p>{children}</p>);
jest.mock('../../../api/postLogIn', () => () => () => {});

// jest.mock('formik-mui/TextField', () => ({ children }) => <input>{children}</input>);

describe('Render LogInForm', () => {
  test('should LogInForm render', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <LogInForm />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
