// Type
const ADD_ITEM = "addItem";
const REMOVE_ITEM = "removeItem";
const TOTAL_PRICE = "totalPrice";

// Action
export const addItem = (itemData) => ({
  type: ADD_ITEM,
  payload: itemData,
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  itemId,
});

export const totalPrice = (totalPrice) => ({
  type: TOTAL_PRICE,
  payload: totalPrice,
});

// InitialState
const initialState = {
  items: [],
  totalPrice: 0,
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.itemId),
      };
    case TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};
