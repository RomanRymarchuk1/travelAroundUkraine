/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import CatalogTourCard from './CatalogTourCard';

describe('CatalogTourCard snapshot test', () => {
  test('should CatalogTourCard match snapshot', () => {
    const { asFragment } = render(<CatalogTourCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
