const INCREMENT = "increment";
const DECREMENT = "decrement";

// Action
export const incrementCount = () => ({
  type: INCREMENT,
});
export const decrementCount = () => ({
  type: DECREMENT,
});

// Initial State
const initialState = {
  count: 0,
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
