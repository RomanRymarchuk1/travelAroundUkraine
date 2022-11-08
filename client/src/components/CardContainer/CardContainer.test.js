
import { render } from '@testing-library/react';
import CardContainer from './CardContainer';

jest.mock('@mui/material/Container', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/Typography', () => ({ children }) => <h2>{children}</h2>);

describe('CardContainer snapshot testing', () => {
    test('should render CardContainer component', () => {
        const { asFragment } = render(<CardContainer />);
        expect(asFragment()).toMatchSnapshot();
    });
});