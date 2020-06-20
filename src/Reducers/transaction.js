/* eslint-disable no-param-reassign */
import { GET_TRANSACTION } from '../Constants';

const transaction = (state = {}, action) => {
  switch (action.type) {
    case GET_TRANSACTION:
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default transaction;
