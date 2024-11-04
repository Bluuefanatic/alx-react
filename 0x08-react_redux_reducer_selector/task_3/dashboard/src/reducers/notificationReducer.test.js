import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" },
  ];

  const expectedNotificationsWithReadStatus = [
    { id: 1, type: "default", value: "New course available", isRead: false },
    { id: 2, type: "urgent", value: "New resume available", isRead: false },
    { id: 3, type: "urgent", value: "New data available", isRead: false },
  ];

  it('returns the default state with empty notifications and filter "DEFAULT"', () => {
    expect(notificationReducer(undefined, {})).toEqual({
      notifications: [],
      filter: 'DEFAULT',
    });
  });

  it('handles FETCH_NOTIFICATIONS_SUCCESS and initializes isRead to false for each notification', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: initialNotifications };
    expect(notificationReducer(undefined, action)).toEqual({
      notifications: expectedNotificationsWithReadStatus,
      filter: 'DEFAULT',
    });
  });

  it('handles MARK_AS_READ and updates isRead for the specified notification', () => {
    const actionFetch = { type: FETCH_NOTIFICATIONS_SUCCESS, data: initialNotifications };
    const actionMarkAsRead = { type: MARK_AS_READ, index: 2 };

    const stateAfterFetch = notificationReducer(undefined, actionFetch);
    const stateAfterMarkAsRead = notificationReducer(stateAfterFetch, actionMarkAsRead);

    expect(stateAfterMarkAsRead).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: true },
        { id: 3, type: "urgent", value: "New data available", isRead: false },
      ],
    });
  });

  it('handles SET_TYPE_FILTER and updates the filter value', () => {
    const actionFetch = { type: FETCH_NOTIFICATIONS_SUCCESS, data: initialNotifications };
    const actionSetFilter = { type: SET_TYPE_FILTER, filter: "URGENT" };

    const stateAfterFetch = notificationReducer(undefined, actionFetch);
    const stateAfterSetFilter = notificationReducer(stateAfterFetch, actionSetFilter);

    expect(stateAfterSetFilter).toEqual({
      filter: 'URGENT',
      notifications: expectedNotificationsWithReadStatus,
    });
  });
});
