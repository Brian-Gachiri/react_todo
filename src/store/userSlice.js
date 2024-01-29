import { createSlice } from "@reduxjs/toolkit";
import {postData} from "../adapters/axios-index"


export const userSlice = createSlice({
  name: 'user',
  initialState: {
       loggedIn: false,
       user: null,
       loading: false,
       error: null,
  },
  reducers: {
      checkLoginStatus: (state) => {
           const user = localStorage.getItem('user');
           if (user) {
               state.loggedIn = true;
               state.user = JSON.parse(user);
               state.loading = false;
               state.error = null
           }
      },
      loginStart: (state) => {
           state.loading = true;
           state.error = null;
      },
      loginSuccess: (state, action) => {
           state.loggedIn = true;
           state.user = action.payload;
           state.loading = false;
           state.error = null
           localStorage.setItem('user', JSON.stringify(action.payload))
      },
      loginFailure: (state, action) => {
           state.loading = false
           state.error = action.payload
      },
      logout: (state) => {
           state.loggedIn = false;
           state.user = null;
           state.loading = false;
           state.error = null;
           localStorage.removeItem('user');
       }
  }
});


export const { checkLoginStatus, loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;


export const loginUser = (data) => async (dispatch) => {
    dispatch(loginStart());
    try {
      const res = await postData('login', data);
   
      dispatch(loginSuccess(res.data));
    } catch (err) {
        console.log(err.message)
        dispatch(loginFailure(err.message));

    }
   };


export default userSlice.reducer;