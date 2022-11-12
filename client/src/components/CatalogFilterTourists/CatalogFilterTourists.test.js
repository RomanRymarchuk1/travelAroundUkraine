import { render } from '@testing-library/react';
import CatalogFilterTourists from './CatalogFilterTourists';

jest.mock('@mui/material/ToggleButton', () => ({ children }) => <button>{children}</button>);
jest.mock('@mui/material/Unstable_Grid2', () => ({ children }) => <div>{children}</div>);

describe('CatalogFilterTourists snapshot test', () => {
  test('should CatalogFilterTourists match snapshot', () => {
    const { asFragment } = render(<CatalogFilterTourists />);
    expect(asFragment()).toMatchSnapshot();
  });
});
