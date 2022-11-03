import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from './Footer';

const RouterWrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

describe('Footer snapshot testing', () => {
  test('should Footer renders', () => {
    const { asFragment } = render(<Footer />, { wrapper: RouterWrapper });
    expect(asFragment()).toMatchSnapshot();
  });
});

RouterWrapper.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
