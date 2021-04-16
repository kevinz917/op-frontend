import { Action } from "../../common/types/Action";
import actionCreator from "../actionCreator";

export const CREATE_ITEM_ACTIONS = {
  IS_SAVING_TRUE: "IS_SAVING_TRUE",
  IS_SAVING_FALSE: "IS_SAVING_FALSE",
};

export default {
  setSavingTrue(): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.IS_SAVING_TRUE);
  },
};
