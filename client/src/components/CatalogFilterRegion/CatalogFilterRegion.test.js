import { render } from '@testing-library/react';
import CatalogFilterRegion from './CatalogFilterRegion';

jest.mock('@mui/material/Box', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/Checkbox', () => ({ children }) => <span>{children}</span>);
jest.mock('@mui/material/FormControlLabel', () => ({ children }) => <label>{children}</label>);

describe('CatalogFilterRegion snapshot test', () => {
  test('should CatalogFilterRegion match snapshot', () => {
    const { asFragment } = render(<CatalogFilterRegion />);
    expect(asFragment()).toMatchSnapshot();
  });
});
