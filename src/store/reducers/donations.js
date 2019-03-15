import { 
  FETCH_ALL_DONATIONS_LOADING,
  FETCH_ALL_DONATIONS_SUCCESS,
  FETCH_ALL_DONATIONS_ERROR,
} from '../constants/donations';
  
const initialState = {
  donations: {
    loading: false,
    data: null,
    error: null,
  },
}
  
export default function reducer( state=initialState, action = {}) {
  switch (action.type) {
    case FETCH_ALL_DONATIONS_LOADING:
      return {
        ...state,
        donations: {
          ...state.donations,
          loading: true,
        },
      };
        
    case FETCH_ALL_DONATIONS_SUCCESS:
      return {
        ...state,
        donations: {
          ...state.donations,
          loading: false,
          data: action.result.data,
        },
      };
  
    case FETCH_ALL_DONATIONS_ERROR:
      return {
        ...state,
        donations: {
          ...state.donations,
          loading: false,
          data: action.result.data,
        },
      };
      
          
    default:
      return {
        ...state,
      };
  }
}