import { combineReducers, createStore } from "redux";
import { mainDishReducer } from "./reducers/mainDishReducer";

const foodItemsReducer = combineReducers({
  mainDishDetails: mainDishReducer,
});

const store = createStore(foodItemsReducer);
export default store;
