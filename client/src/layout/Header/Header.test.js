import { render } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Render Header', () => {
  test('should Header render', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
