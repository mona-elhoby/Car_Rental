import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { api_url, config } from '../config';

//signup
export const signup = createAsyncThunk('auth/signup', async (userInfo, thunkAPI) => {
	console.log(userInfo)
		const res = await axios.post(`${api_url}/auth/sign-up`,userInfo, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		// localStorage.setItem('userInfo', JSON.stringify(res.data));
        console.log("res: ", res)
		return { res, userInfo };
});

//login
export const login = createAsyncThunk('auth/signin', async (userInfo, thunkAPI) => {
	console.log(userInfo)
		const res = await axios.post(`${api_url}/auth/sign-in`,userInfo, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		// localStorage.setItem('userInfo', JSON.stringify(res.data));
        console.log("res: ", res)
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