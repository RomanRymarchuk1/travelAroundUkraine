import { render } from '@testing-library/react';
import TourPage from './TourPage';

import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

describe('Tour Page snapshot testing', () => {
  test('should Tour Page match snapshot', () => {
    const { asFragment } = render(<TourPage />);
    mockAllIsIntersecting(true);

    expect(asFragment()).toMatchSnapshot();
  });
});
