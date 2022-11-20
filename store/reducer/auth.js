import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { api_url, config } from "../config";

//signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (userInfo, thunkAPI) => {
    console.log(userInfo);
    const res = await axios.post(`${api_url}/auth/sign-up`, userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }
);

//get otp
export const GetOTP = createAsyncThunk("auth/otp", async (value, thunkAPI) => {
  const res = await axios.post(`${api_url}/auth/sign-in`, value, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // localStorage.setItem('userInfo', JSON.stringify(res.data));
  return { res, value };
});

//get otp
export const Login = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => {
  const res = await axios.post(`${api_url}/auth/otp`, userInfo, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // localStorage.setItem('userInfo', JSON.stringify(res.data));
  return { res, userInfo };
});

//verify phone number
export const validatePhoneNumber = createAsyncThunk(
  "auth/phone",
  async (phoneNumber, thunkAPI) => {
    const res = await axios.get(`https://phonevalidation.abstractapi.com/v1`, {
      phone: phoneNumber,
      api_key: "d5b5b99719614ee6a31f2ea6cba66e07",
    });
    console.log(res);
    return res.data.valid;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: {},
    isLoading: false,
    accessToken: null,
    refreshToken: null,
    error: null,
    valueOTP: null,
  },
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      // console.log(state);
    },
    [GetOTP.fulfilled]: (state, action) => {
    //   console.log(action.payload);
      state.valueOTP = action.payload.value;
    },
  },
});

export default authSlice.reducer;
