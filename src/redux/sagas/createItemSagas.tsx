import { call, put, select, takeLatest } from 'redux-saga/effects';
import createItemActions, { CREATE_ITEM_ACTIONS } from '../actions/createItemAction';
import globalActions from '../actions/globalAction';
import api from '../../util/api/apiFactory';
import { newItemSelector } from '../selectors/createItemSelector';
import { newItemSaveValidator } from '../../pages/NewItem/createItemHelpers';
import history from '../../common/components/Router/history';

function* saveItem(): Generator {
  try {
    yield put(globalActions.setLoadingTrue());
    const newItemState = yield select(newItemSelector);
    if (newItemSaveValidator(newItemState)) {
      yield call(api.post, '/item/save', newItemState);
      yield put(createItemActions.saveNewItemSuccess());
      history.push('/');
    }
    yield put(globalActions.setLoadingFalse());
  } catch (e) {}
}

function* getAllItems(): Generator {
  try {
    yield put(globalActions.setLoadingTrue());
    const allItems: any = yield call(api.get, '/item/all');
    yield put(createItemActions.getAllItemsSuccess(allItems.data.items));
    yield put(globalActions.setLoadingFalse());
  } catch (e) {}
}

function* myTestSaga(): Generator {
  yield takeLatest(CREATE_ITEM_ACTIONS.SAVE_ITEM, saveItem); // save item
  yield takeLatest(CREATE_ITEM_ACTIONS.GET_ALL_ITEMS, getAllItems); // get all items
}

export default myTestSaga;
