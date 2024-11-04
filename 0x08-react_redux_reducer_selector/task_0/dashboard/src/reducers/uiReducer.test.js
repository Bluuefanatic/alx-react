import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('returns the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('returns the initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(undefined, action)).toEqual(initialState);
  });

  it('changes isNotificationDrawerVisible property to true on DISPLAY_NOTIFICATION_DRAWER action', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = { ...initialState, isNotificationDrawerVisible: true };
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

});
