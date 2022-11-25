import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { api_url, config } from '../../config';

export const getCountry = createAsyncThunk('country/get', async (name, thunkAPI) => {
		const res = await axios.get(`${api_url}/country?total=true&name=${name}`,config);
		return res;
}
);


const countrySlice = createSlice({
    name: 'country',
	initialState: { allCountries: null },
    extraReducers: {
        [getCountry.fulfilled]: (state, action) => {
            state.allCountries = action.payload.data
        }
    }
})

export default countrySlice.reducer