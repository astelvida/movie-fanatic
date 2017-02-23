const getById = (state = {}, list) => {
  const nextState = { ...state };
  list.forEach((movie) => {
    nextState[movie.id] = movie;
  });
  return nextState;
};

export default getById;

export const getMovie = (state, id) => state[id];
