import { FETCHING, SUCCESS, FAILURE } from "../actions";

// 3) Initialize state.
const initialState = {
  characters: [],
  fetching: false,
  error: null
};

// 4) Create the reducer that will return a new state depending on the action dispatched.
// What actions do we need?
export const charsReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
        error: ''
      };
    case SUCCESS:
      return {
        ...state,
        characters: action.payload.results
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

// 5) ...go to our actions.
