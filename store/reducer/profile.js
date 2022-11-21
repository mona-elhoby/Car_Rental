import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { api_url, config } from '../config';

export const getProfile = createAsyncThunk('profile/get', async (_, thunkAPI) => {
		const res = await axios.get(`${api_url}/user/mine`,config);
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