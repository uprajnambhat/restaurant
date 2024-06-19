const initialState = {
  mainDishDetails: [],
  breakFastItems: [],
  dessertMenu: [],
};

export const menuReducers = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MAINDISHES_DETAILS":
      return {
        ...state,
        mainDishDetails: action.payload,
      };
    case "UPDATE_BREAKFAST_ITEMS":
      return {
        ...state,
        breakFastItems: action.payload,
      };
    case "UPDATE_DESSERT_MENU":
      return {
        ...state,
        dessertMenu: action.payload,
      };
    default:
      return state;
  }
};
