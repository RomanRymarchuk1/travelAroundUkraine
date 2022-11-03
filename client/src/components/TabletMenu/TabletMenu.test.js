import { render } from '@testing-library/react';
import TabletMenu from './TabletMenu';
import { BrowserRouter } from 'react-router-dom';

describe('Render TabletMenu', () => {
  test('should TabletMenu render', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <TabletMenu />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
