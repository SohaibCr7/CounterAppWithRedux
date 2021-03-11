import { type } from "../Action/actiontype";

const initialState = {
  counter: 0,
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case type.inc: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case type.dec: {
      return { ...state, counter: state.counter - 1 };
    }
    default:
      return state;
  }
};
