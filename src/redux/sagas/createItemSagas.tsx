import axios from 'axios';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Action } from '../../common/types/Action';
import createItemActions, { CREATE_ITEM_ACTIONS } from '../actions/createItemAction';
import api from '../../util/api/apiFactory';

type mockApiReturnObject = any;
// test watcher
function* testing(action: Action): Generator {
  try {
    yield delay(800);
    const res: any = yield call(
      api.get,
      'tr4velapp.azurewebsites.net/api/itinerary/607a55049279d5001bb7e4c5'
    ) as mockApiReturnObject;

    console.log(res.data);
    yield put(createItemActions.setSagaFetchedTrue());
  } catch (e) {
    console.log('Failed');
  }
}

function* myTestSaga() {
  yield takeLatest(CREATE_ITEM_ACTIONS.BEGIN_MOCK_FETCH, testing);
}

export default myTestSaga;
