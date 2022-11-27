import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Header from './Header';
import userReducer from '../../../../store/slices/userSlice';

jest.mock('@mui/material/AppBar', () => ({ children }) => <header>{children}</header>);
jest.mock('@mui/material/Container', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/Toolbar', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/Slide', () => ({ children }) => <div>{children}</div>);
jest.mock('../../components/BurgerMenu/BurgerMenu.js', () => () => <div>BurgerMenu</div>);
jest.mock('../../components/TabletMenu/TabletMenu.js', () => () => <div>TabletMenu</div>);
jest.mock('../../components/LogoHeader/LogoHeader.js', () => () => <div>LogoHeader</div>);
jest.mock('../../components/HeaderSearchField/HeaderSearchField.js', () => () => <div>HeaderSearchField</div>);

const store = configureStore({
  reducer: { userReducer },
});

describe('Render Header', () => {
  test('should Header render', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
