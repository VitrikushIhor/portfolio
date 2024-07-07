import {configureStore} from '@reduxjs/toolkit';
import {rtkApi} from '@/service/rtkApi';

export function createReduxStore() {
	const rootReducers = {

		[rtkApi.reducerPath]: rtkApi.reducer,
	};


	const store = configureStore({
		reducer: rootReducers,
		devTools: true,
		middleware: (getDefaultMiddleware) =>
			 getDefaultMiddleware()
					.concat(rtkApi.middleware),
	});

	return store;
}

