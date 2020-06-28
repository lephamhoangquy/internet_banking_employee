/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-catch */
import { trackPromise } from 'react-promise-tracker';
import {
  USER,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILED,
  UPDATE_STATE_CUSTOMER,
  FIND_CUSTOMER_SUCCESS,
  FIND_CUSTOMER_FAILED,
  CHARGE_MONEY_SUCCESS,
  GET_TRANSACTION_SUCCESS,
  GET_TRANSACTION_FAILED,
} from '../Constants';
import {
  login,
  addCustomer,
  findCustomerByAccNum,
  chargeMoney,
  getTransactionLog,
} from '../Services';

export const loginEmployee = (email, password) => {
  return async (dispatch) => {
    try {
      const ret = await trackPromise(login(email, password));
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
      const ret = await trackPromise(addCustomer(body));
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

export const updateStateCustomer = () => ({
  type: UPDATE_STATE_CUSTOMER,
});

export const findCustomerByAcc = (accNumber) => {
  return async (dispatch) => {
    try {
      const customer = await trackPromise(findCustomerByAccNum(accNumber));
      if (customer.status === 200) {
        dispatch(findCustomerByAccSuccess(customer.data.customer));
      } else {
        alert('Không tìm thấy thông tin tài khoản');
        dispatch(findCustomerByAccFailed());
      }
    } catch (error) {
      alert('Không tìm thấy thông tin tài khoản');
      dispatch(findCustomerByAccFailed());
      throw error;
    }
  };
  function findCustomerByAccSuccess(data) {
    return {
      type: FIND_CUSTOMER_SUCCESS,
      payload: data,
    };
  }
  function findCustomerByAccFailed() {
    return {
      type: FIND_CUSTOMER_FAILED,
    };
  }
};

export const chargeMoneyByAccNumber = (accNumber, amount) => {
  return async (dispatch) => {
    try {
      const ret = await trackPromise(chargeMoney(accNumber, amount));
      if (ret.status === 200) {
        dispatch(chargeMoneyByAccNumberSuccess(ret.data.customer));
        alert('Nạp tiền thành công');
      }
    } catch (error) {
      throw error;
    }
  };
  function chargeMoneyByAccNumberSuccess(data) {
    return {
      type: CHARGE_MONEY_SUCCESS,
      payload: data,
    };
  }
};

export const fetchTransaction = (
  accNumber,
  page,
  isReceiver,
  isSender,
  isRemind,
  isBeRemind,
) => {
  return async (dispatch) => {
    try {
      const transactions = await trackPromise(
        getTransactionLog(
          accNumber,
          page,
          isReceiver,
          isSender,
          isRemind,
          isBeRemind,
        ),
      );
      if (transactions.status === 200) {
        dispatch(fetchTransactionSuccess(transactions.data));
      } else {
        alert('Không tìm thấy.');
        dispatch(fetchTransactionFailed());
      }
    } catch (error) {
      alert('Không tìm thấy.');
      dispatch(fetchTransactionFailed());
      throw error;
    }
  };
  function fetchTransactionSuccess(data) {
    return {
      type: GET_TRANSACTION_SUCCESS,
      payload: data,
    };
  }
  function fetchTransactionFailed() {
    return {
      type: GET_TRANSACTION_FAILED,
    };
  }
};
