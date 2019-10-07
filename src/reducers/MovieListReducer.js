import * as actionTypes from '../utils/actionTypes';

const initialState = {
    isFetching: false,
    items: []
};

const MovieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MOVIES_REQUEST:
            return {
                ...state,
                isFetching: true,
                items: [],
            };
        case  actionTypes.GET_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.payload,                
            };
        case actionTypes.GET_MOVIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default MovieListReducer;