import { Action } from '../../common/types/Action';
import actionCreator from '../../redux/actionCreator';

export const TEST_ACTIONS = {
  SET_LOADING_TRUE: 'SET_LOADING_TRUE',
  SET_LOADING_FALSE: 'SET_LOADING_FALSE',
};

export default {
  setLoadingTrue(): Action {
    return actionCreator(TEST_ACTIONS.SET_LOADING_TRUE);
  },
  setLoadingFalse(): Action {
    return actionCreator(TEST_ACTIONS.SET_LOADING_FALSE);
  },
};
