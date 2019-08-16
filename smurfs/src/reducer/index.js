import {
RETRIEVE_API,
RETRIEVE_API_SUCCESS,
RETRIEVE_API_FAIL,
POST_TO_API,
CREATE_SMURF
} from '../actions'

const iState = {
    smurfs: [],
    gotSmurfs: false,
}

export const reducer = (state = iState, action) => {
    switch(action.type){
        case RETRIEVE_API_SUCCESS :
        return{
            ...state,
            smurfs: action.payload,
            gotSmurfs: true
        }
        case CREATE_SMURF :
        return{
            ...state,
             smurfs: [...state.smurfs, action.payload],
        };
        default:
            return state
    }
}

