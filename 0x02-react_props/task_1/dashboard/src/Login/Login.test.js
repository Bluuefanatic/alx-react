import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders without crashing', () => {
  render(<Login />);
});

test('renders 2 input and 2 label tags', () => {
  render(<Login />);
  const inputs = screen.getAllByRole('textbox');
  const labels = screen.getAllByLabelText(/./); // Match any label text
  expect(inputs.length).toBe(2);
  expect(labels.length).toBe(2);
});
