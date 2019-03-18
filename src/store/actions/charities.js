// importing the utility function for axios
import createRestApiClient from '../../utils/createRestApiClient';

// Importing constants for needed actions
import { 
  GET_ALL_CHARITIES_LOADING,
  GET_ALL_CHARITIES_SUCCESS,
  GET_ALL_CHARITIES_ERROR,
} from '../constants/charities';

// Creating an API client from axios
const apiClient = createRestApiClient().withConfig({
  baseURL: process.env.API_HOST + process.env.API_PORT,
}).client;

// Action Creator for fetching all Charities
export function fetchAllCharities() {
  return {
    types: [GET_ALL_CHARITIES_LOADING, GET_ALL_CHARITIES_SUCCESS, GET_ALL_CHARITIES_ERROR],
    promise: () => apiClient.get('/charities'),
  };
}