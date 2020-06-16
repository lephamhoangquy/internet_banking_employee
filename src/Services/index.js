import { urlApi } from '../Config';
import callApi from '../Utils/apiCaller';
import authHeader from '../Helpers/AuthHeader';

export const login = (email, password) =>
  callApi(urlApi, `auth/employee/login`, 'POST', null, { email, password });

export const addCustomer = (body) =>
  callApi(urlApi, `employee/create-customer`, 'POST', authHeader(), body);
