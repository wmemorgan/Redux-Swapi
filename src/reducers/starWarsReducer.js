import { LOADING, SUCCESS, ERROR } from '../actions'
const initialState = {
  characters: [],
  loading: false,
  error: ''
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state, loading: true, characters: [], error: ''
      }

    case SUCCESS:
      return {
        ...state, loading: false, characters: action.payload, error: ''
      }

    case ERROR:
      return {
        ...state, loading: false, characters: [], error: action.payload
      }

    default:
      return state
  }
}
