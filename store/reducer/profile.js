import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
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
    console.log("attachedFile: ", attachedFile);
    // const blob= dataURItoBlob(attachedFile)
    // attachedFile.toBlob(async (blob) => {
    //   const file = new File([blob], "filename.png", {
    //     type: blob.type,
    //     lastModified: new Date().getTime(),
    //     lastModifiedDate: new Date(),
    //     size: blob.size,
    //     name: "filename.png",
    //   });
    //   console.log(file);
    const formData = new FormData();
    formData.append("avatar", attachedFile, "image.png");
    console.log(formData);
    for (var key of formData.entries()) {
      console.log("key: ", key[0] + ", " + key[1]);
    }

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

//get image
export const getImage = createAsyncThunk("profile/image",
async(id, thunkAPI) => {
  const res = await axios.get(`${api_url}/static/${id}`)
  return res
})


const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userInfo: {},
    isLoading: false,
    accessToken: null,
    refreshToken: null,
    profile: null
  },
  extraReducers: {
    [getProfile.fulfilled]: (state, action) => {
      state.profile = action.payload
    },
    [HYDRATE]: (state, action) => {
      return state = {
          ...state,
          ...action.payload
      };
  },
  },
});

export default profileSlice.reducer;
