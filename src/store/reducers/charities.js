import { 
  GET_ALL_CHARITIES_LOADING,
  GET_ALL_CHARITIES_SUCCESS,
  GET_ALL_CHARITIES_ERROR,
} from '../constants/charities';

const initialState = {
  charities: {
    loading: false,
    data: null,
    error: null,
  },
}

export default function reducer( state=initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_CHARITIES_LOADING:
      return {
        ...state,
        charities: {
          ...state.charities,
          loading: true,
        },
      };
      
    case GET_ALL_CHARITIES_SUCCESS:
      return {
        ...state,
        charities: {
          ...state.charities,
          loading: false,
          data: action.result.data,
        },
      };

    case GET_ALL_CHARITIES_ERROR:
      return {
        ...state,
        charities: {
          ...state.charities,
          loading: false,
          error: action.error,
        },
      };
    
        
    default:
      return {
        ...state,
      };
  }
}