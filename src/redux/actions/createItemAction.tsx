import { Action } from '../../common/types/Action';
import actionCreator from '../actionCreator';

export const CREATE_ITEM_ACTIONS = {
  IS_SAVING_TRUE: 'IS_SAVING_TRUE',
  IS_SAVING_FALSE: 'IS_SAVING_FALSE',
  SAGA_FETCHED: 'SAGA_FETCHED',
  BEGIN_MOCK_FETCH: 'BEGIN_MOCK_FETCH',
};

export default {
  setSavingTrue(): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.IS_SAVING_TRUE);
  },
  setSagaFetchedTrue(): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.SAGA_FETCHED);
  },
  beginMockFetch(): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.BEGIN_MOCK_FETCH);
  },
};
