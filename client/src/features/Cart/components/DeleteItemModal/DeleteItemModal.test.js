/* eslint-disable react/prop-types */
import { render } from '@testing-library/react';
import DeleteItemModal from './DeleteItemModal';

jest.mock('@mui/material/Button', () => ({ children }) => <button type="button">{children}</button>);
jest.mock('@mui/material/Dialog', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/DialogActions', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/DialogContent', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/Typography', () => ({ children }) => <p>{children}</p>);
jest.mock('@mui/material/DialogContentText', () => ({ children }) => <div>{children}</div>);
jest.mock('@mui/material/DialogTitle', () => ({ children }) => <h3>{children}</h3>);

describe('DeleteItemModal snapshot test', () => {
  test('should DeleteItemModal match snapshot', () => {
    const onClose = jest.fn();
    const onDelete = jest.fn();

    const { asFragment } = render(<DeleteItemModal open onClose={onClose} onDelete={onDelete} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
