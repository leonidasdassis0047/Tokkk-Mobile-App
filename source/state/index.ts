import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {commentsReducer} from './comments/reducer';

const reducers = combineReducers({comments: commentsReducer});

export const store = createStore(reducers, applyMiddleware(thunk));

export type ReducersState = ReturnType<typeof reducers>;

export const useTypedSelector: TypedUseSelectorHook<ReducersState> =
  useSelector;
