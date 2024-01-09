import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  createdAt: '',
  nationalId: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    create: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toDateString(),
          },
        };
      },
      reducer(state, action) {
        console.log(action.payload);
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    update(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { create, update } = userSlice.actions;

console.log(userSlice);

export default userSlice.reducer;

/*export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'user/create':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.date,
      };
    case 'user/update':
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

export function userCreate(fullName, nationalId) {
  return {
    type: 'user/create',
    payload: { fullName, nationalId, date: new Date().toISOString() },
  };
}
export function userUpdate(fullName) {
  return { type: 'user/update', payload: fullName };
}
*/
