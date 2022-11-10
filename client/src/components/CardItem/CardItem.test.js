import React from "react";
import {render} from '@testing-library/react';
import CardItem from './CardItem'


jest.mock('@mui/material/Typography', () => ({children}) => <h2>{children}</h2>);
jest.mock('@mui/material/Box', () => ({children}) => <div>{children}</div>);

describe('Card Item Snapshot test', () => {
    test('should CardContainer match snapshot', () => {
        const {asFragment} = render(<CardItem/>);
        expect(asFragment()).toMatchSnapshot();
    });
});