import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { api_url, config } from '../config';

//get profile
export const getProfile = createAsyncThunk('profile/get', async (_, thunkAPI) => {
		const res = await axios.get(`${api_url}/user/mine`,config);
		return res.data;
}
);

//update profile
export const updateProfile = createAsyncThunk('profile/get', async (data, thunkAPI) => {
	console.log(data)
	const res = await axios.patch(`${api_url}/user/mine`,data,config);
	console.log(res)
	return res.data;
}
);

const profileSlice = createSlice({
    name: 'profile',
	initialState: { userInfo: {}, isLoading: false, accessToken: null, refreshToken: null },
    extraReducers: {

    }
})

export default profileSlice.reducer