/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import CatalogMainSection from './CatalogMainSection';

describe('CatalogMainSection snapshot testing', () => {
  test('should CatalogMainSection match snapshot', () => {
    const { asFragment } = render(<CatalogMainSection />);

    expect(asFragment()).toMatchSnapshot();
  });
});
