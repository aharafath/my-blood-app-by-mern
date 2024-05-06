import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../utils/API";

// Patient Register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data) => {
    try {
      const response = await API.post(`/auth/register`, data);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Donor Register
export const donorRegister = createAsyncThunk(
  "auth/donorRegister",
  async (data) => {
    try {
      const response = await API.post(`/auth/register`, data);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//User Login
export const userLogin = createAsyncThunk("auth/userLogin", async (data) => {
  try {
    const response = await API.post(`/auth/login`, data);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//User Log Out
export const userLogOut = createAsyncThunk("auth/userLogOut", async () => {
  try {
    const response = await API.post(`/auth/logout`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//Check User Log In Or Log Out
export const checkUserLogInOrNot = createAsyncThunk(
  "auth/checkUserLogInOrNot",
  async () => {
    try {
      const response = await API.get(`/auth/me`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//User Pass Change
export const passwordChange = createAsyncThunk(
  "auth/passwordChange",
  async (data) => {
    try {
      const response = await API.post(`/auth/password-change`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//User Pass Change
export const uploadProfilePhoto = createAsyncThunk(
  "auth/uploadProfilePhoto",
  async (data) => {
    try {
      const response = await API.post(`/auth/upload-profile-photo`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
