import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { api_url } from '../config';

//signup
export const signup = createAsyncThunk('auth/signup', async (userInfo, thunkAPI) => {
	console.log(userInfo)
		const res = await axios.post(`${api_url}/auth/sign-up`,userInfo, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		localStorage.setItem('userInfo', JSON.stringify(res.data));
		return { res, userInfo };
});


const authSlice = createSlice({
	name: 'auth',
	initialState: { userInfo: {}, isLoading: false, accessToken: null, refreshToken: null },
	extraReducers: {
		[signup.fulfilled]: (state, action) => {
			console.log(state);
		},
    }
})

export default authSlice.reducer;