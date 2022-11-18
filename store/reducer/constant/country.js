import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { api_url, config } from '../../config';

export const getCountry = createAsyncThunk('country/get', async (userInfo, thunkAPI) => {
	console.log(userInfo)
		const res = await axios.get(`${api_url}/country?total=true`,config);
		// localStorage.setItem('userInfo', JSON.stringify(res.data));
        console.log("res: ", res)
		return { res, userInfo };
}
);


const countrySlice = createSlice({
    name: 'country',
	initialState: { allCountries: null },
    extraReducers: {

    }
})

export default countrySlice.reducer