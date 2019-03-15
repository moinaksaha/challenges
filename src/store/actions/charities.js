import createRestApiClient from '../../utils/createRestApiClient';

import { 
  GET_ALL_CHARITIES_LOADING,
  GET_ALL_CHARITIES_SUCCESS,
  GET_ALL_CHARITIES_ERROR,
} from '../constants/charities';

const apiClient = createRestApiClient().withConfig({
  baseURL: 'http://localhost:3001',
}).client;

export function fetchAllCharities() {
  return {
    types: [GET_ALL_CHARITIES_LOADING, GET_ALL_CHARITIES_SUCCESS, GET_ALL_CHARITIES_ERROR],
    promise: () => apiClient.get('/charities'),
  };
}