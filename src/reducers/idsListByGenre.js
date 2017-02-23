import { combineReducers } from 'redux';
import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES_SUCCESS,
  RECEIVE_MOVIES_ERROR,
} from '../actions/types';

const idsListByGenre = (genre) => {
  const ids = (state = [], action) => {
    if (action.genre !== genre) {
      return state;
    }
    switch (action.type) {
      case RECEIVE_MOVIES_SUCCESS:
        return action.movies.map((movie) => movie.id);
      case RECEIVE_MOVIES_ERROR:
        return state;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.genre !== genre) {
      return state;
    }
    switch (action.type) {
      case REQUEST_MOVIES:
        return true;
      case RECEIVE_MOVIES_SUCCESS:
        return false;
      case RECEIVE_MOVIES_ERROR:
        return false;
      default:
        return state;
    }
  };

  return { isFetching, ids };
  // return combineReducers({
  //     ids,
  //     isFetching,
  //   });
};

export default idsListByGenre;
