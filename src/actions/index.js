import axios from 'axios'
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';


export const getDog = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(resp => {
        dispatch(fetchSuccess(resp.data.message))
    })
    .catch(err => {
        dispatch(fetchFail(err))
    })
}


export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (dog) => {
    return({type: FETCH_SUCCESS, payload: dog});
}

export const fetchFail = (errorMessage) => {
    return({type: FETCH_FAIL, payload:errorMessage});
}