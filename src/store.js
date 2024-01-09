import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './feautures/accounts/accountSlice';
import userReducer from './feautures/users/userSlice';

const store = configureStore({
  reducer: {
    account: accountReducer,
    user: userReducer,
  },
});

export default store;
