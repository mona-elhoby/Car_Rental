import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { api_url, config } from "../config";

//get profile
export const getProfile = createAsyncThunk(
  "profile/get",
  async (_, thunkAPI) => {
    const res = await axios.get(`${api_url}/user/mine`, config);
    return res.data;
  }
);

//update profile
export const updateProfile = createAsyncThunk(
  "profile/get",
  async (data, thunkAPI) => {
    console.log(data);
    const res = await axios.patch(`${api_url}/user/mine`, data, config);
    console.log(res);
    return res.data;
  }
);

//update profile files
export const updateProfileFiles = createAsyncThunk(
  "profile/uploadSignature",
  async (attachedFile, thunkAPI) => {
    // const blob= dataURItoBlob(attachedFile)
    // attachedFile.toBlob(async (blob) => {
      const formData = new FormData();
    //   const file = new File([blob], "filename.png", {
    //     type: blob.type,
    //     lastModified: new Date().getTime(),
    //     lastModifiedDate: new Date(),
    //     size: blob.size,
    //     name: "filename.png",
    //   });
    //   console.log(file);
      formData.append("eSignature", attachedFile);
      console.log(formData);
      const res = await axios.post(`${api_url}/user/mine/file`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(res);
      return res;
    // }, "image/png");
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userInfo: {},
    isLoading: false,
    accessToken: null,
    refreshToken: null,
  },
  extraReducers: {},
});

export default profileSlice.reducer;
