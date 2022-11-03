import { render } from '@testing-library/react';
import HeaderSearchField from './HeaderSearchField';

describe('Render HeaderSearchField', () => {
  test('should HeaderSearchField render', () => {
    const { asFragment } = render(<HeaderSearchField />);
    expect(asFragment()).toMatchSnapshot();
  });
});
