const INITIAL_STATE = {
  gridType: {}
};

const gridTypeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_GRID_DETAILS":
      return {
        ...state,
        gridType: action.payload
      };
    default:
      return state;
  }
};

export default gridTypeReducer;
