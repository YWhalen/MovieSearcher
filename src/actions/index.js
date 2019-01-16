import * as actionTypes from '../utils/actionTypes';
import axios from 'axios' // API取得用

// 非同期取得操作
export const getAnimes = (year) => {
    return (dispatch) => {
      dispatch(getAnimesRequest());

      return axios.get('https://api.themoviedb.org/3/discover/movie?primary_release_year='  + year + '&api_key=1b5adf76a72a13bad99b8fc0c68cb085&sort_by=vote_average.desc')
        .then(response => dispatch(getAnimesSuccess(response.data.results)))
        .catch(error => dispatch(getAnimesFailure(error)))
    };
  };

//   export const getAnimes = (year) {
//       const response = await axios
//       .get('https://api.themoviedb.org/3/discover/movie?primary_release_year='  + year + '&api_key=1b5adf76a72a13bad99b8fc0c68cb085&sort_by=vote_average.desc', {
          
//       });
//       console.log(response.data.results);
//   };
  
  export const getAnimesRequest = () => ({
    type: actionTypes.GET_ANIMES_REQUEST,
  });
  
  export const getAnimesSuccess = (json) => ({
    type: actionTypes.GET_ANIMES_SUCCESS,
    payload: json,
  });
  
  export const getAnimesFailure = (error) => ({
    type: actionTypes.GET_ANIMES_FAILURE,
    error: error,
  });