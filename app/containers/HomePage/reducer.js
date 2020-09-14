/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  GET_SPACE_DATA,
  SPACE_DATA_SUCCESS,
  SPACE_DATA_FAIL,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SPACE_DATA:
        draft.loading = true;
        break;
      case SPACE_DATA_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case SPACE_DATA_FAIL:
        draft.loading = false;
        break;
    }
  });

export default homePageReducer;
