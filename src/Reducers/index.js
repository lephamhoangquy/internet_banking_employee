import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import customer from './customer';
import transaction from './transaction';

const appReducer = combineReducers({
  form: formReducer,
  user,
  customer,
  transaction,
});
export default appReducer;
