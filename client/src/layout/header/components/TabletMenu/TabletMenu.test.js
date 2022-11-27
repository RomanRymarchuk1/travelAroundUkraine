import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TabletMenu from './TabletMenu';
import userReducer from '../../../../store/slices/userSlice';

jest.mock('@mui/material/Typography', () => ({ children }) => <p>{children}</p>);
jest.mock('@mui/material/Box', () => ({ children }) => <div>{children}</div>);

const store = configureStore({
  reducer: { userReducer },
});

describe('Render TabletMenu', () => {
  test('should TabletMenu render', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <TabletMenu isLogin />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
