import createRestApiClient from '../../utils/createRestApiClient';

import { 
  FETCH_ALL_DONATIONS_LOADING,
  FETCH_ALL_DONATIONS_SUCCESS,
  FETCH_ALL_DONATIONS_ERROR,
  MAKE_PAYMENT_LOADING,
  MAKE_PAYMENT_SUCCESS,
  MAKE_PAYMENT_ERROR,
  CLEAR_PAYMENT_IN_PROGRESS_DATA,
} from '../constants/donations';

const apiClient = createRestApiClient().withConfig({
  baseURL: 'http://localhost:3001',
}).client;

export function fetchAllDonations() {
  return {
    types: [FETCH_ALL_DONATIONS_LOADING, FETCH_ALL_DONATIONS_SUCCESS, FETCH_ALL_DONATIONS_ERROR],
    promise: () => apiClient.get('/payments'),
  };
}

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

export function clearPaymentInProgressData() {
  return {
    type : CLEAR_PAYMENT_IN_PROGRESS_DATA,
  }
}