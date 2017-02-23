import { combineReducers } from 'redux';
// import idsListByGenre from './idsListByGenre';
import getById from './getById';

import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES_SUCCESS,
  RECEIVE_MOVIES_ERROR,
} from '../actions/types';

export const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES_SUCCESS:
      const movieObj = getById(state, action.movies);
      return Object.assign({}, state, movieObj);
    default:
      return state;
  }
};

export const listByGenre = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        [action.genre]: {
          ...state[action.genre],
          isFetching: true,
        }
      };
    case RECEIVE_MOVIES_SUCCESS:
      return {
        ...state,
        [action.genre]: {
          ...state[action.genre],
          ids: action.movies.map((movie) => movie.id),
          isFetching: false
        }
      };
    default:
      return state;
  }
};


const movies = combineReducers({
  byId,
  listByGenre,
});

export default movies;

export const getMovies = (state, genre) =>
  state.movies.listByGenre[genre].ids
  .map((id) => state.movies.byId[id])
  .filter((item) => item !== undefined);


export const getIsFetching = (state, genre) =>
  state.movies.listByGenre[genre].isFetching;
