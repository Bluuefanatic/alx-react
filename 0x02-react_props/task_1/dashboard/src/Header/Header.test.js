import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders without crashing', () => {
  render(<Header />);
});

test('renders img and h1 tags', () => {
  render(<Header />);
  const img = screen.getByRole('img');
  const heading = screen.getByRole('heading');
  expect(img).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
});
