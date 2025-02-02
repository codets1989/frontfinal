import { INCREMENT, DECREMENT, RESET } from './action';

// Initial state for counter
const initialState = {
  counter: 0,
};

// Reducer function to handle actions
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default counterReducer;