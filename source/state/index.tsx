import React from 'react';
import {Provider, TypedUseSelectorHook, useSelector} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import {reducers, ReducersState} from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export const AppStateProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export const useTypedSelector: TypedUseSelectorHook<ReducersState> =
  useSelector;
