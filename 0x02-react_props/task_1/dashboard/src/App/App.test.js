import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders Notifications component', () => {
  render(<App />);
  expect(screen.getByText(/notifications/i)).toBeInTheDocument(); // Adjust to your Notifications text
});

test('renders Header component', () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument(); // If Header is wrapped in a <header> tag
});

test('renders Login component', () => {
  render(<App />);
  expect(screen.getByText(/login/i)).toBeInTheDocument(); // Adjust to your login text
});

test('renders Footer component', () => {
  render(<App />);
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});
