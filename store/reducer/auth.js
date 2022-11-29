import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CookiesProvider, useCookies } from "react-cookie";
import axios from "axios";

import { api_url } from "../config";

//signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (userInfo, thunkAPI) => {
    const res = await axios.post(`${api_url}/auth/sign-up`, userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
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
  return { res, value };
});

//login
export const Login = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    const res = await axios.post(`${api_url}/auth/otp`, userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(res)
    // localStorage.setItem("auth", JSON.stringify(res.data.data));
    console.log(res);
    return { res, userInfo };
  }
);

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
    valueOTP: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetOTP.fulfilled, (state, action) => {
      state.valueOTP = action.payload.value;
    });
  },
  // extraReducers: {
  //   [GetOTP.fulfilled]: (state, action) => {
  //     state.valueOTP = action.payload.value;
  //   },
  // },
});

export default authSlice.reducer;
