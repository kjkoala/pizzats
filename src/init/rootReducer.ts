
// Core
import { combineReducers } from 'redux';

// Reducers
import { AppReducer } from '../store/reducer';

export const rootReducer = combineReducers({
  AppReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
