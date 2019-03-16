import createRestApiClient from '../../utils/createRestApiClient';

import { 
  FETCH_ALL_DONATIONS_LOADING,
  FETCH_ALL_DONATIONS_SUCCESS,
  FETCH_ALL_DONATIONS_ERROR,
  MAKE_PAYMENT_LOADING,
  MAKE_PAYMENT_SUCCESS,
  MAKE_PAYMENT_ERROR,
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

export function makePayment({id, amount, currency}) {
  return {
    types: [ MAKE_PAYMENT_LOADING, MAKE_PAYMENT_SUCCESS, MAKE_PAYMENT_ERROR ],
    promise: () => client.client.post('/payments', {
      charitiesId: id, 
      amount, 
      currency,
    }),
  };
}