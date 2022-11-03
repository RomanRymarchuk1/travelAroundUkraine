import { render } from '@testing-library/react';
import TourPage from './TourPage';

import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

jest.mock('@mui/material/Box', () => 'div');
jest.mock('@mui/material/Stack', () => 'div');
jest.mock('@mui/material/Container', () => 'div');
jest.mock('@mui/material/Typography', () => 'p');
jest.mock('@mui/material/Button', () => 'button');
jest.mock('../../components/TourAccordion/TourAccordion.js', () => () => <div>TourAccordion</div>);

describe('Tour Page snapshot testing', () => {
  test('should Tour Page match snapshot', () => {
    const { asFragment } = render(<TourPage />);
    mockAllIsIntersecting(true);

    expect(asFragment()).toMatchSnapshot();
  });
});
