import produce from 'immer';
import { Action } from '../../common/types/Action';
import { GLOBAL_ACTIONS } from '../actions/globalAction';

const globalItem = {
  loading: false,
};

export const globalReducer = produce((state, action: Action) => {
  switch (action.type) {
    case GLOBAL_ACTIONS.SET_LOADING_TRUE:
      state.loading = true;
      break;
    case GLOBAL_ACTIONS.SET_LOADING_FALSE:
      state.loading = false;
      break;
    default:
      break;
  }
}, globalItem);
