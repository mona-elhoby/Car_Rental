import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { api_url, config } from '../config';

export const getProfile = createAsyncThunk('profile/get', async (userInfo, thunkAPI) => {
	console.log(userInfo)
		const res = await axios.get(`${api_url}/user/mine`,config);
		// localStorage.setItem('userInfo', JSON.stringify(res.data));
        console.log("res: ", res)
		return { res, userInfo };
}
);


const profileSlice = createSlice({
    name: 'profile',
	initialState: { userInfo: {}, isLoading: false, accessToken: null, refreshToken: null },
    extraReducers: {

    }
})

export default profileSlice.reducer