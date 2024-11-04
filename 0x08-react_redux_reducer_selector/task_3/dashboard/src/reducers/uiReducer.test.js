import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it('returns the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('returns the initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(undefined, action).toJS()).toEqual(initialState.toJS());
  });

  it('changes isNotificationDrawerVisible property to true on DISPLAY_NOTIFICATION_DRAWER action', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('changes isNotificationDrawerVisible property to false on HIDE_NOTIFICATION_DRAWER action', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const state = initialState.set('isNotificationDrawerVisible', true);
    const expectedState = state.set('isNotificationDrawerVisible', false);
    expect(uiReducer(state, action).toJS()).toEqual(expectedState.toJS());
  });

  it('changes isUserLoggedIn property to true on LOGIN_SUCCESS action', () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = initialState.set('isUserLoggedIn', true);
    expect(uiReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('changes isUserLoggedIn property to false on LOGIN_FAILURE action', () => {
    const action = { type: LOGIN_FAILURE };
    const state = initialState.set('isUserLoggedIn', true);
    const expectedState = state.set('isUserLoggedIn', false);
    expect(uiReducer(state, action).toJS()).toEqual(expectedState.toJS());
  });

  it('changes isUserLoggedIn property to false on LOGOUT action', () => {
    const action = { type: LOGOUT };
    const state = initialState.set('isUserLoggedIn', true);
    const expectedState = state.set('isUserLoggedIn', false);
    expect(uiReducer(state, action).toJS()).toEqual(expectedState.toJS());
  });
});
