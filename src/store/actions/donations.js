import createRestApiClient from '../../utils/createRestApiClient';

import { 
  FETCH_ALL_DONATIONS_LOADING,
  FETCH_ALL_DONATIONS_SUCCESS,
  FETCH_ALL_DONATIONS_ERROR,
} from '../constants/charities';

const apiClient = createRestApiClient().withConfig({
  baseURL: 'http://localhost:3001',
}).client;

export function fetchAllDonations() {
  return {
    types: [FETCH_ALL_DONATIONS_LOADING, FETCH_ALL_DONATIONS_SUCCESS, FETCH_ALL_DONATIONS_ERROR],
    promise: () => apiClient.get('/payments'),
  };
}