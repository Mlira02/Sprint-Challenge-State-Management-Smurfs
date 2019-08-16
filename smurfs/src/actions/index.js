import axios from 'axios';

export const RETRIEVE_API = 'RETRIEVE_API';
export const RETRIEVE_API_SUCCESS = 'RETRIEVE_API_SUCCESS';
export const RETRIEVE_API_FAIL = 'RETRIEVE_API_FAIL';
export const POST_TO_API = 'POST_TO_API';
export const CREATE_SMURF = 'CREATE_SMURF';

export const getSmurfs = () => {
    return dispatch => {
        dispatch({ type: RETRIEVE_API });
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res.data);
                dispatch({ type: RETRIEVE_API_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log('Sorry there was an error', err)
                dispatch({ type: RETRIEVE_API_FAIL, payload: err.response })
            })
    }
}

export const createSmurf = ({name, height, age}) => {
    return dispatch => {
       return axios.post('http://localhost:3333/smurfs', {name, height, age})
        .then(res => {
            console.log(res.data)
            dispatch(addSmurf(res.data));
        })
        .catch(err => {
            console.log('error has occured', err)
        })
    }
}

const addSmurf = thing => ({
    type: CREATE_SMURF,
    payload: { name: thing.name,
        age: thing.age,
        height: thing.height,
        }
});