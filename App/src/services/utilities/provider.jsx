import axios from 'axios';
import { handleResponse, handleError } from './response'; 
import * as constants from '../constants/URLConstants';

let axiosRequestConfig = {
  headers: { 
    'x-access-token' : constants.AccessToken, 
  },
};

const getAll = (resource) => { 
  return axios 
    .get(`${resource}`, axiosRequestConfig) 
    .then(handleResponse) 
    .catch(handleError); 
};

const getSingle = (resource, id) => { 
  return axios 
    .get(`${resource}/${id}`, axiosRequestConfig) 
    .then(handleResponse) 
    .catch(handleError); 
};

export { getAll, getSingle };