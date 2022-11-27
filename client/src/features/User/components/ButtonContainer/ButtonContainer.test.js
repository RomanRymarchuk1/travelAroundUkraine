import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ButtonContainer from './ButtonContainer';
import userReducer from '../../../../store/slices/userSlice';

jest.mock('@mui/material/Button', () => ({ children }) => <button>{children}</button>);
jest.mock('@mui/material/Box', () => ({ children }) => <div>{children}</div>);

const store = configureStore({
  reducer: { userReducer },
});

describe('Render ButtonContainer', () => {
  test('should ButtonContainer render', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ButtonContainer />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
