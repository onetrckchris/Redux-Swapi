import axios from 'axios';

// 5) Define some action types that we'll be referring to when deciding how to change state.
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// 6) Dispatch an object containing the action type and any potential data needed to affect state.
// In the example below we're making use of middleware called redux-thunk that allows us to 
// intercept the dispatching of the action to the reducer by returning a function within our
// function. Within this function we could do any kind of javascript including making an axios
// get request and then manually dispatching actions depending on whether we successfully "got"
// our data or not. -deep breathe-
export const getCharacters = () => dispatch => {
    dispatch({ type: FETCHING });
    axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            dispatch({ type: SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FAILURE, payload: error })
        })
}

// 7) ...go to whichever component is making use of these actions.
