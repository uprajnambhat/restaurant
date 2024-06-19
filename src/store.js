import { combineReducers, createStore } from "redux";
import { menuReducers } from "./reducers/menuReducers.js";

const foodItemsReducer = combineReducers({
  menuDetails: menuReducers,
});

const store = createStore(foodItemsReducer);
export default store;
