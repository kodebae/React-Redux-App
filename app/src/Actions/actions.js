import axios from 'axios';


export const FETCH_APOD_START = 'FETCH_APOD_START';
export const FETCH_APOD_SUCCESS = 'FETCH_APOD_SUCCESS';
export const FETCH_APOD_FAILURE = 'FETCH_APOD_FAILURE';

//how to write our thunk *line 7...

export const getApod = () => dispatch => {
    dispatch({type: FETCH_APOD_START})
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => dispatch({ type: FETCH_APOD_SUCCESS, payload: res.data}))
    .catch(error => dispatch ({ type: FETCH_APOD_FAILURE, payload: error.response }));
};