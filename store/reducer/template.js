import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { api_url, config } from "../config";

//get templates
export const getTemplates = createAsyncThunk(
  "template/getAll",
  async (theParams, thunkAPI) => {
    const params = {};
    if (theParams?.company) params["company"] = theParams?.company;
    if (theParams?.branch) params["branch"] = theParams?.branch;
    if (theParams?.skip) params["skip"] = theParams?.skip;
    const res = await axios.get(
      `${api_url}/contract-template?total=true&limit=10`,
      { params: params }
    );
    // console.log(res);
    return res;
  }
);

//save templates
export const saveTemplates = createAsyncThunk(
  "template/saveTemplate",
  async (data, thunkAPI) => {
    const res = await axios.post(
      `${api_url}/contract-template?total=true&limit=10`,
      data
    );
    // console.log(res)
    return res;
  }
);

//update Templates
export const updateTemplate = createAsyncThunk(
  "template/updateTemplate",
  async ({ id, data }, thunkAPI) => {
    const res = await axios.patch(`${api_url}/contract-template/${id}`, data);
    // console.log(res)
    return res;
  }
);

//delete template
export const deleteTemplate = createAsyncThunk(
  "template/deleteTemplate",
  async ({ id, data }, thunkAPI) => {
    const res = await axios.patch(`${api_url}/contract-template/${id}`, data);
    // console.log(res)
    return res;
  }
);

//get contract by id
export const getContract = createAsyncThunk(
  "template/contract",
  async (id, thunkAPI) => {
    const res = await axios.get(`${api_url}/contract-template/${id}`);
    // console.log(res);
    return res;
  }
);

const templateSlice = createSlice({
  name: "template",
  initialState: { template: null },
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getTemplates.fulfilled, (state, action) => {
      state.template = action.payload;
    });
  },
});
