import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  const expectedCoursesWithSelection = [
    { id: 1, name: "ES6", credit: 60, isSelected: false },
    { id: 2, name: "Webpack", credit: 20, isSelected: false },
    { id: 3, name: "React", credit: 40, isSelected: false },
  ];

  it('returns the default state as an empty array', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('handles FETCH_COURSE_SUCCESS and initializes isSelected to false for each course', () => {
    const action = { type: FETCH_COURSE_SUCCESS, data: initialCourses };
    expect(courseReducer(undefined, action)).toEqual(expectedCoursesWithSelection);
  });

  it('handles SELECT_COURSE and updates isSelected for the specified course', () => {
    const actionFetch = { type: FETCH_COURSE_SUCCESS, data: initialCourses };
    const actionSelect = { type: SELECT_COURSE, index: 2 };

    const stateAfterFetch = courseReducer(undefined, actionFetch);
    const stateAfterSelect = courseReducer(stateAfterFetch, actionSelect);

    expect(stateAfterSelect).toEqual([
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: true },
      { id: 3, name: "React", credit: 40, isSelected: false },
    ]);
  });

  it('handles UNSELECT_COURSE and updates isSelected for the specified course', () => {
    const actionFetch = { type: FETCH_COURSE_SUCCESS, data: initialCourses };
    const actionSelect = { type: SELECT_COURSE, index: 2 };
    const actionUnselect = { type: UNSELECT_COURSE, index: 2 };

    const stateAfterFetch = courseReducer(undefined, actionFetch);
    const stateAfterSelect = courseReducer(stateAfterFetch, actionSelect);
    const stateAfterUnselect = courseReducer(stateAfterSelect, actionUnselect);

    expect(stateAfterUnselect).toEqual(expectedCoursesWithSelection);
  });
});
