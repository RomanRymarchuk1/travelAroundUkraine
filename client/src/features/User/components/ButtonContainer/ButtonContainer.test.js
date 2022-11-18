import { render } from '@testing-library/react';
import ButtonContainer from './ButtonContainer';
import { BrowserRouter } from 'react-router-dom';

jest.mock('@mui/material/Button', () => ({ children }) => <button>{children}</button>);
jest.mock('@mui/material/Box', () => ({ children }) => <div>{children}</div>);

describe('Render ButtonContainer', () => {
  test('should ButtonContainer render', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ButtonContainer />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
