import {FETCH_START, FETCH_FAIL, FETCH_SUCCESS} from '../actions'

const initialState = {
    dog: {
        message: "https://images.dog.ceo/breeds/terrier-dandie/n02096437_287.jpg",
        status: "success"
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                dog:{},
                isFetching:true,
                error:''
            };
        case FETCH_FAIL:
            return {
                ...state,
                dog:{},
                isFetching: false,
                error: action.payload
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                dog:action.payload,
                isFetching:false,
                error:''
            };
        default:
            return state;               
    }
}