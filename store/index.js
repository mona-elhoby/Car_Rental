import { configureStore } from '@reduxjs/toolkit';

import authSlice from './reducer/auth'
import countrySlice from './reducer/constant/country'
import profileSlice from './reducer/profile'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		country: countrySlice,
		profile: profileSlice
    },
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

 