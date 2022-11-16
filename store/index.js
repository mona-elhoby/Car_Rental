import { configureStore } from '@reduxjs/toolkit';

import {signup} from '../store/reducer/auth'

export const store = configureStore({
	reducer: {
		signup,
    },
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

 