// we'll need axios
import axios from 'axios'

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const ERROR = "ERROR"
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: LOADING })
    axios
      .get('https://swapi.co/api/people/')
      .then(resp => {
        console.log(`fetchData response: `, resp.data)
        dispatch({ type: SUCCESS, payload: resp.data.results })
      })
      .catch(err => dispatch({type: ERROR, payload: `Error fetching data: ${err}`}))
  }
}

