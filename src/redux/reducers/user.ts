import {createAction, createReducer} from '@reduxjs/toolkit';
const initial$user: User = {
  firstname: '',
  email: '',
  lastname: '',
  username: '',
};

const action$setUser = createAction<any>('user|setUser');
const action$resetUser = createAction<any>('user|resetUser');

const reducer$user = createReducer(initial$user, (builder) => {
  builder.addCase(action$setUser, (state, {payload}) => ({
    ...state,
    ...payload
  })).addCase(action$resetUser,(state)=>({
    ...state,
    ...initial$user
  }))
});

export {reducer$user, action$setUser, action$resetUser};
