import * as actionTypes from '../utils/actionTypes';
import axios from 'axios' // API取得用

// 非同期取得操作
export const getMovies = (year, category) => {
    return (dispatch) => {
      dispatch(getMoviesRequest());

      return axios.get('https://api.themoviedb.org/3/discover/movie?primary_release_year='  + year + '&api_key=1b5adf76a72a13bad99b8fc0c68cb085&sort_by=' + category + '.desc&language=en-US&certification_country=US&external_source=twitter_id')
        .then(response => dispatch(getMoviesSuccess(response.data.results)))
        .catch(error => dispatch(getMoviesFailure(error)))
    };
  };
  
  export const getMoviesRequest = () => ({
    type: actionTypes.GET_MOVIES_REQUEST,
  });
  
  export const getMoviesSuccess = (json) => ({
    type: actionTypes.GET_MOVIES_SUCCESS,
    payload: json,
  });
  
  export const getMoviesFailure = (error) => ({
    type: actionTypes.GET_MOVIES_FAILURE,
    error: error,
  });