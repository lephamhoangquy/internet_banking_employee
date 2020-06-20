/* eslint-disable no-param-reassign */
import {
  CREATE_CUSTOMER_FAILED,
  CREATE_CUSTOMER_SUCCESS,
  UPDATE_STATE_CUSTOMER,
  FIND_CUSTOMER_SUCCESS,
  FIND_CUSTOMER_FAILED,
  CHARGE_MONEY_SUCCESS,
} from '../Constants';

const customer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CUSTOMER_SUCCESS:
      return { isRegister: true };
    case CREATE_CUSTOMER_FAILED:
      return { isRegister: false };
    case UPDATE_STATE_CUSTOMER:
      return {};
    case FIND_CUSTOMER_SUCCESS:
      state = action.payload;
      return { ...state, isFind: true };
    case CHARGE_MONEY_SUCCESS:
      state = action.payload;
      return { ...state, isCharge: true, isFind: true };
    case FIND_CUSTOMER_FAILED:
      return { isFind: false };
    default:
      return state;
  }
};

export default customer;
