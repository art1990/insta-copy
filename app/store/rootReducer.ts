// redux
import { combineReducers } from 'redux';
import post from './post';

export const rootReducer = combineReducers({ post });

export type RootState = ReturnType<typeof rootReducer>;
