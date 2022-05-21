import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import continentReducer from './continent';

export default configureStore({
  reducer: continentReducer,
  middleware: [thunk, logger],
});
