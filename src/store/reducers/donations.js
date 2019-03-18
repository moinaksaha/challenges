import { 
  FETCH_ALL_DONATIONS_LOADING,
  FETCH_ALL_DONATIONS_SUCCESS,
  FETCH_ALL_DONATIONS_ERROR,
  MAKE_PAYMENT_LOADING,
  MAKE_PAYMENT_SUCCESS,
  MAKE_PAYMENT_ERROR,
  CLEAR_PAYMENT_IN_PROGRESS_DATA,
} from '../constants/donations';
  
const initialState = {
  donations: {
    loading: false,
    data: null,
    error: null,
  },
  paymentStatus: {
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
          error: action.error,
        },
      };
    
    case MAKE_PAYMENT_LOADING:
      return {
        ...state,
        paymentStatus: {
          ...state.paymentStatus,
          loading: true,
        },
      };
        
    case MAKE_PAYMENT_SUCCESS:
      // update the all donation data on success payment response [updated the total donations data in the UI]
      const donationsData = state.donations.data;
      return {
        ...state,
        paymentStatus: {
          ...state.paymentStatus,
          loading: false,
          data: action.result.data,
        },
        donations:{
          ...state.donations,
          data: [...donationsData, action.result.data],
        },
      };
  
    case MAKE_PAYMENT_ERROR:
      return {
        ...state,
        paymentStatus: {
          ...state.paymentStatus,
          loading: false,
          error: action.error,
        },
      };
    
    case CLEAR_PAYMENT_IN_PROGRESS_DATA:
      return {
        ...state,
        paymentStatus: {
          ...initialState.paymentStatus,
        },
      }
          
    default:
      return {
        ...state,
      };
  }
}