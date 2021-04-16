import produce from 'immer';
import { Action } from '../../common/types/Action';
import { CREATE_ITEM_ACTIONS } from '../actions/createItemAction';

const createItemPageDefaultState = {
  isSaving: false,
};

const createItemReducer = produce((state, action: Action) => {
  switch (action.type) {
    case CREATE_ITEM_ACTIONS.IS_SAVING_TRUE:
      state.isSaving = true;
      break;
    case CREATE_ITEM_ACTIONS.IS_SAVING_FALSE:
      state.isSaving = false;
      break;
    default:
      break;
  }
}, createItemPageDefaultState);

export { createItemReducer };
