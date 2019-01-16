import { combineReducers } from 'redux';
import AnimeListReducer from './AnimeListReducer';

const reducer = combineReducers({
  items: AnimeListReducer
});

export default reducer;