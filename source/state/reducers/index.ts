import {combineReducers} from 'redux';

import {commentsReducer} from './commentsReducer';

export const reducers = combineReducers({comments: commentsReducer});

export type ReducersState = ReturnType<typeof reducers>;
