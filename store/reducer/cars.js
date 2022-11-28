import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { api_url, config } from "../config";

//get cars
export const getCars = createAsyncThunk(
  "cars/get",
  async ({ theParams }, thunkAPI) => {
    const params ={}
    if (theParams?.company) params['company'] = theParams?.company;
    if (theParams?.branch) params['branch'] = theParams?.branch;
    const res= axios.get(`${api_url}/vehicle?total=true`,{params: params})
    // console.log(res)
    return res
  });


const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCars.fulfilled, (state, action) => {
            // console.log(action)
            state.cars = action.payload?.data
        })
    }, 
    // extraReducers: {
    //   [getCars.fulfilled]: (state, action) => {
    //     state.cars = action.payload?.data
    //   }
    // }
})

export default carSlice.reducer;