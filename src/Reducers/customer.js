import { CREATE_CUSTOMER_FAILED, CREATE_CUSTOMER_SUCCESS } from '../Constants';

const customer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CUSTOMER_SUCCESS:
      return { isRegister: true };
    case CREATE_CUSTOMER_FAILED:
      return { isRegister: false };
    default:
      return state;
  }
};

export default customer;
