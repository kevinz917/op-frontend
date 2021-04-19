import { Action } from '../../common/types/Action';
import actionCreator from '../actionCreator';

export const GLOBAL_ACTIONS = {
  SET_LOADING_TRUE: 'SET_LOADING_TRUE',
  SET_LOADING_FALSE: 'SET_LOADING_FALSE',
};

export default {
  setLoadingTrue(): Action {
    return actionCreator(GLOBAL_ACTIONS.SET_LOADING_TRUE);
  },
  setLoadingFalse(): Action {
    return actionCreator(GLOBAL_ACTIONS.SET_LOADING_FALSE);
  },
};
