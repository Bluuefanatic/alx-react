import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders without crashing', () => {
  render(<Footer />);
});

test('renders copyright text', () => {
  render(<Footer />);
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});
