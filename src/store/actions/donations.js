// importing the utility function for axios
import createRestApiClient from '../../utils/createRestApiClient';

// Importing constants for needed actions
import { 
  FETCH_ALL_DONATIONS_LOADING,
  FETCH_ALL_DONATIONS_SUCCESS,
  FETCH_ALL_DONATIONS_ERROR,
  MAKE_PAYMENT_LOADING,
  MAKE_PAYMENT_SUCCESS,
  MAKE_PAYMENT_ERROR,
  CLEAR_PAYMENT_IN_PROGRESS_DATA,
} from '../constants/donations';

// Creating an API client from axios
const apiClient = createRestApiClient().withConfig({
  baseURL: process.env.API_HOST + ':' + process.env.API_PORT,
}).client;

// Action Creator for fetching all Donations
export function fetchAllDonations() {
  return {
    types: [FETCH_ALL_DONATIONS_LOADING, FETCH_ALL_DONATIONS_SUCCESS, FETCH_ALL_DONATIONS_ERROR],
    promise: () => apiClient.get('/payments'),
  };
}

// Action Creator for making payments
export function makePayment({charitiesId, amount, currency, id}) {
  return {
    types: [ MAKE_PAYMENT_LOADING, MAKE_PAYMENT_SUCCESS, MAKE_PAYMENT_ERROR ],
    promise: () => apiClient.post('/payments', {
      charitiesId, 
      amount, 
      currency,
      id,
    }),
  };
}

// Action Creator for clearing payment data in store
export function clearPaymentInProgressData() {
  return {
    type : CLEAR_PAYMENT_IN_PROGRESS_DATA,
  }
}