import { call, delay, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { Action } from '../../common/types/Action';
import createItemActions, { CREATE_ITEM_ACTIONS } from '../actions/createItemAction';
import api from '../../util/api/apiFactory';
import { newItemSelector } from '../selectors/createItemSelector';
import { newItemSaveValidator } from '../../pages/NewItem/createItemHelpers';

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

// Fork test
function* forkMaster(): Generator {
  try {
    yield delay(1000);
    yield fork(forkWorker);
    yield fork(forkWorker);
  } catch (e) {
    console.log('Failed');
  }
}

function* forkWorker(): Generator {
  try {
    yield put(createItemActions.setSagaFetchedTrue());
    console.log('Fork worker done');
  } catch (e) {}
}

// future actions test
function* watchTwoButtonClicks() {
  for (let i = 0; i < 3; i++) {
    yield take(CREATE_ITEM_ACTIONS.SAVE_ITEM_SUCCESS);
  }
  yield put(createItemActions.setSagaFetchedTrue());
}

function* saveItem(action: Action): Generator {
  try {
    const newItemState = yield select(newItemSelector);
    if (newItemSaveValidator(newItemState)) {
      console.log('Fields validated');
      // api save call
    }
  } catch (e) {}
}

function* myTestSaga() {
  yield takeLatest(CREATE_ITEM_ACTIONS.BEGIN_MOCK_FETCH, forkMaster);
  yield takeLatest(CREATE_ITEM_ACTIONS.SAVE_ITEM, saveItem);

  // watch for future actions
  yield takeEvery('*', watchTwoButtonClicks);
}

export default myTestSaga;
