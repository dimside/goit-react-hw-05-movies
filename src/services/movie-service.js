import axios from 'axios';

const movieService = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmM3MDM0ZjQzZmMxMWRhZjUzOTY2NmIxNGU1YmVhMCIsInN1YiI6IjY0OTk4NTA1YjM0NDA5MDBlMjcyZTgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0M9W_VhYxYdCcevqQPPA792PMZPlCZIhzDoN3aG3W-M',
    accept: 'application/json',
  },
});

export const getTrending = async () => {
  const response = await movieService.get('trending/all/day?');
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await movieService.get(`search/movie?query=${query}`);
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await movieService.get(`movie/${movieId}?`);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await movieService.get(`movie/${movieId}/credits?`);
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
    const response = await movieService.get(`movie/${movieId}/reviews?`);
  return response.data.results;
};
