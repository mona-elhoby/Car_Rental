import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { api_url } from "../config";

//signup
export const getCars = createAsyncThunk(
  "cars/get",
  async (_, thunkAPI) => {
    const res= axios.get(`${api_url}/vehicle?total=true`)
    console.log(res)
    return res
  })


const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCars.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.resp = payload
        })
    }, 
})

export default carSlice.reducer;