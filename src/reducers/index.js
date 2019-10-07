import { combineReducers } from 'redux';
import MovieListReducer from './MovieListReducer';

const reducer = combineReducers({
  items: MovieListReducer
});

export default reducer;