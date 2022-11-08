import {render} from '@testing-library/react';
import CardContainer from './CardContainer'
import {MemoryRouter, Router} from 'react-router-dom'
import React from "react";

const RouterWrapper = ({children}) => <MemoryRouter>{children}</MemoryRouter>;

describe('Card Container Snapshot test', () => {
    test('should CardContainer match snapshot', () => {
        const {asFragment} = render(<CardContainer/>, {wrapper: RouterWrapper});
        expect(asFragment()).toMatchSnapshot();
    });
});