import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import accountReducer from './feautures/accounts/accountSlice';
import userReducer from './feautures/users/userSlice';

const reducers = combineReducers({
  account: accountReducer,
  user: userReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
