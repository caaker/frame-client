import { configureStore }           from '@reduxjs/toolkit';
import rootReducer                  from './store-reducers';
import { logger, errorMiddleware }  from './store-middleware';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger, errorMiddleware),
});

// use for debugging
window.store = store;
export default store;