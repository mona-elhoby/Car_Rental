import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import authSlice from './reducer/auth'
import countrySlice from './reducer/constant/country'
import profileSlice from './reducer/profile'
import carSlice from "./reducer/cars"


const makeStore = () => {
	let store = configureStore({
		reducer: {
			auth: authSlice,
			country: countrySlice,
			profile: profileSlice,
			cars: carSlice
		},
		devTools: true,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
	});
  
	return store;
  }


export const storeWrapper = createWrapper(makeStore)

 