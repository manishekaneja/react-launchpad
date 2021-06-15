import {createAction, createReducer} from '@reduxjs/toolkit';
const initial$application:StateType$application = {
  isLoggedIn:false
};

const action$login = createAction<undefined>('application|login');
const action$logout = createAction<undefined>('application|logout');

const reducer$application = createReducer(initial$application, (builder) => {
  builder
    .addCase(action$login, (state, action) => ({
      ...state,
      isLoggedIn:true,
    }))
    .addCase(action$logout, (state, action) => ({
      ...state,
      isLoggedIn:false
    }));
});

export {reducer$application, action$logout,action$login};
