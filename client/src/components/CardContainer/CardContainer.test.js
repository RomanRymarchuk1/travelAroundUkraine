import React from "react";
import {render} from '@testing-library/react';
import CardContainer from './CardContainer'
import {MemoryRouter} from 'react-router-dom'

const RouterWrapper = ({children}) => <MemoryRouter>{children}</MemoryRouter>;

jest.mock('@mui/material/Typography', () => ({ children }) => <h2>{children}</h2>);


describe('Card Container Snapshot test', () => {
    test('should CardContainer match snapshot', () => {
        const {asFragment} = render(<CardContainer/>, {wrapper: RouterWrapper});
        expect(asFragment()).toMatchSnapshot();
    });
});