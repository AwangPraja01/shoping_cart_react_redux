import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import counterReducer from "./ducks/counter";
import itemInCartReducer from "./ducks/itemInCart";
import thunk from "redux-thunk";

const reducers = combineReducers({
  counter: counterReducer,
  itemInCart: itemInCartReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...middleware),
  )
);

export default store;
