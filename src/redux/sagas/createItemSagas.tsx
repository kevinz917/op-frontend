import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import createItemActions, { CREATE_ITEM_ACTIONS } from '../actions/createItemAction';

// test watcher
function* testing(action: any) {
  try {
    yield delay(1000);
    // call action
    yield put(createItemActions.setSagaFetchedTrue());
    console.log(action);
  } catch (e) {
    // console.log('Mock event failure');
  }
}

function* myTestSaga() {
  yield takeLatest(CREATE_ITEM_ACTIONS.BEGIN_MOCK_FETCH, testing);
}

export default myTestSaga;
