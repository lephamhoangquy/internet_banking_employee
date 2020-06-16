/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-catch */
import {
  USER,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILED,
} from '../Constants';
import { login, addCustomer } from '../Services';

export const loginEmployee = (email, password) => {
  return async (dispatch) => {
    try {
      const ret = await login(email, password);
      if (ret.status === 200) {
        const { accessToken, refreshToken } = ret.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        dispatch(loginEmployeeSuccess());
        window.location.href = '/';
      }
    } catch (error) {
      dispatch(loginEmployeeFailed());
      throw error;
    }
  };
  function loginEmployeeSuccess() {
    return {
      type: USER.LOGIN_SUCCESS,
    };
  }
  function loginEmployeeFailed() {
    return {
      type: USER.LOGIN_FAILED,
    };
  }
};

export const createCustomer = (body) => {
  return async (dispatch) => {
    try {
      const ret = await addCustomer(body);
      if (ret.status === 200) {
        dispatch(createCustomerSuccess());
      }
    } catch (error) {
      dispatch(createCustomerFailed());
      console.log(error);
    }
  };
  function createCustomerSuccess() {
    return {
      type: CREATE_CUSTOMER_SUCCESS,
    };
  }
  function createCustomerFailed() {
    return {
      type: CREATE_CUSTOMER_FAILED,
    };
  }
};
