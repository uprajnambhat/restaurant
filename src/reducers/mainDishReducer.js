const initialState = {
  mainDishDetails: [],
};

export const mainDishReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MAINDISHES_DETAILS":
      return {
        ...state,
        mainDishDetails: action.payload,
      };
    default:
      return state;
  }
};
