/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_SPACE_DATA,
  SPACE_DATA_SUCCESS,
  SPACE_DATA_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const requestSpaceData = params => ({
  type: GET_SPACE_DATA,
  params,
});

export const spaceDataSuccess = payload => ({
  type: SPACE_DATA_SUCCESS,
  payload,
});

export const spaceDataFail = error => ({
  type: SPACE_DATA_FAIL,
  error,
});
