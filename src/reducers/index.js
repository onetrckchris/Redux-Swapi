import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

// 3) ...for this example we're combining reducers despite only using one. Go to starWarsReducer.js.
export default combineReducers({
  charsReducer
});
