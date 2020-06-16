import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import customer from './customer';

const appReducer = combineReducers({
  form: formReducer,
  user,
  customer,
});
export default appReducer;
