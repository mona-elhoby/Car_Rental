import { configureStore } from '@reduxjs/toolkit';

import authSlice from './reducer/auth'
import countrySlice from './reducer/constant/country'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		country: countrySlice,
    },
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

 