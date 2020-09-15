import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { spaceDataSuccess, spaceDataFail } from './actions';
import { GET_SPACE_DATA } from './constants';

// Individual exports for testing

function* getSpaceData({ params }) {
  const { launchSuccess, landSuccess, launchYear } = params;
  let link = `https://api.spacexdata.com/v3/launches?limit=100`;

  if (launchSuccess !== '') {
    link += `&launch_success=${launchSuccess}`;
  }
  if (landSuccess !== '') {
    link += `&land_success=${landSuccess}`;
  }

  if (launchYear) {
    link += `&launch_year=${launchYear}`;
  }

  try {
    const options = {
      method: 'get',
      url: link,
    };
    const response = yield call(request, options);
    yield put(spaceDataSuccess(response));
  } catch (e) {
    yield put(spaceDataFail(e));
  }
}
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_SPACE_DATA, getSpaceData);
}
