import { render } from '@testing-library/react';
import BurgerMenu from './BurgerMenu';
import { BrowserRouter } from 'react-router-dom';

describe('Render BurgerMenu', () => {
  test('should BurgerMenu render', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <BurgerMenu />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
