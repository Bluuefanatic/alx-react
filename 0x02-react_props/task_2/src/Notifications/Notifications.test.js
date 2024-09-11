import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('first NotificationItem renders correct html', () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.prop('type')).toBe('default');
    expect(firstItem.prop('value')).toBe('New course available');
  });
});
