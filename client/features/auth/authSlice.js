import { createSlice } from "@reduxjs/toolkit";
import {
  checkUserLogInOrNot,
  donorRegister,
  passwordChange,
  registerUser,
  uploadProfilePhoto,
  userLogOut,
  userLogin,
} from "./authApiSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("loginUser")
      ? JSON.parse(localStorage.getItem("loginUser"))
      : null,
    message: null,
    error: null,
    loader: false,
  },
  reducers: {
    setMessageEmty: (state) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Register Patient Slice
      .addCase(registerUser.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
      })
      //Register Donor Slice
      .addCase(donorRegister.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(donorRegister.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(donorRegister.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
      })
      //User Login Slice
      .addCase(userLogin.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
        state.user = action.payload.user;
        localStorage.setItem("loginUser", JSON.stringify(action.payload.user));
      })
      //User Log Out Slice
      .addCase(userLogOut.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(userLogOut.fulfilled, (state, action) => {
        state.loader = false;
        localStorage.removeItem("loginUser");
        state.message = action.payload.message;
        state.user = null;
      })
      //Check User Loged In Or Not
      .addCase(checkUserLogInOrNot.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(checkUserLogInOrNot.rejected, (state, action) => {
        state.loader = false;
        state.user = null;
        localStorage.removeItem("loginUser");
        state.error = action.error.message;
      })
      .addCase(checkUserLogInOrNot.fulfilled, (state, action) => {
        state.loader = false;
        state.user = action.payload.user;
        localStorage.setItem("loginUser", JSON.stringify(action.payload.user));
      })
      //User Password Change
      .addCase(passwordChange.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(passwordChange.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(passwordChange.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
      }) //User Profile photo update
      .addCase(uploadProfilePhoto.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(uploadProfilePhoto.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(uploadProfilePhoto.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
        state.user = action.payload.user;
      });
  },
});

// selectors
export const authSelect = (state) => state.auth;
//Action
export const { setMessageEmty } = authSlice.actions;
//Export Default Reducer
export default authSlice.reducer;
