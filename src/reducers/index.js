import { combineReducers } from 'redux';
import genres from './genreReducer';
import movies from './moviesReducer';


export default combineReducers({
  genres,
  movies,
});
