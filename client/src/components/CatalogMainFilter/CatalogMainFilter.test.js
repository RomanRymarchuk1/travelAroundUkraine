import { render } from '@testing-library/react';
import CatalogMainFilter from './CatalogMainFilter';

jest.mock('@mui/material/Button', () => ({ children }) => <button>{children}</button>);
jest.mock('@mui/material/Box', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/Typography', () => ({ children }) => <h3>{children}</h3>);
jest.mock('@mui/material/Unstable_Grid2', () => ({ children }) => <div>{children}</div>);


describe('CatalogMainFilter snapshot test', () => {
  test('should CatalogTourCard match snapshot', () => {
    const { asFragment } = render(<CatalogMainFilter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
