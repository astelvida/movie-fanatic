import axios from 'axios';
import {
  RECEIVE_RANDOM_MOVIE,
  REQUEST_GENRES,
  RECEIVE_GENRES_SUCCESS,
  REQUEST_MOVIES,
  RECEIVE_MOVIES_SUCCESS,
  RECEIVE_ERROR,
} from './types';

const API_KEY = '?api_key=098ef741ec7e8e640602af30376f5d86';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getGenres = () => (dispatch) => {
  dispatch({ type: REQUEST_GENRES, isFetching: true });
  return axios.get(`${BASE_URL}/genre/movie/list${API_KEY}`)
  .then((response) => {
    dispatch({
      type: RECEIVE_GENRES_SUCCESS,
      genres: response.data.genres
    });
  })
  .catch(() => dispatch({ type: RECEIVE_ERROR }));
};


export const selectGenre = (genre, genreId) =>
  (dispatch) => {
    dispatch({ type: REQUEST_MOVIES, genre, genreId });
    return axios.get(`${BASE_URL}/discover/movie${API_KEY}&language\
      =en-US&sort_by=popularity.desc&with_genres=${genreId}&page=1&\
      vote_average.gte=7`)
      .then((resp) => {
        dispatch({
          type: RECEIVE_MOVIES_SUCCESS,
          movies: resp.data.results,
          genre,
          genreId
        });
      });
  };


const receiveRandomMovie = (randomMovie) => ({
  type: RECEIVE_RANDOM_MOVIE,
  randomMovie
});

export const getRandomMovie = () => (
  (dispatch) => (
    axios.get(`${BASE_URL}/genre/movie/list${API_KEY}`)
    .then(({ data }) => {
      dispatch(receiveRandomMovie(data));
    })
    .catch(() => dispatch({ type: RECEIVE_ERROR }))
  )
);




// const receiveSearchGiphs = (list, query) => ({
//   type: RECEIVE_SEARCH_GIPHS,
//   list,
//   query
// });


// export const searchInputChange = (query) => ({
//   type: SEARCH_TYPING,
//   query
// });

// export const searchGiph = (query) => (
//   (dispatch) => {
//     dispatch(searchInputChange(query));
//     axios.get(`${BASE_URL}search?q=${query}&limit=${LIMIT}&api_key=${API_KEY}`)
//     .then((resp) => dispatch(receiveSearchGiphs(resp.data.data, query)))
//     .catch(() => dispatch({ type: RECEIVE_ERROR }));
//   }
// );
