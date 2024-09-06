import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login text', () => {
  render(<App />);
  const loginText = screen.getByText(/Login to access the full dashboard/i);
  expect(loginText).toBeInTheDocument();
});

describe('<App />', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should contain the header text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('School dashboard');
  });
});
