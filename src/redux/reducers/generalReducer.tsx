const SET_VAL = (field: any, val: any) => {
  return {
    type: "SET_VAL",
    field,
    val,
  };
};

const generalReducer = (
  state = {
    isLoading: true,
    auth: 0,
  },
  action: any
) => {
  switch (action.type) {
    case "SET_VAL":
      return { ...state, [action.field]: action.val };
    default:
      return state;
  }
};

export { SET_VAL, generalReducer };
