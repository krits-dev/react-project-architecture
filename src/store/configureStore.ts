import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export const rootPersistConfig = {
  key: 'root',
  storage,
  // You can add reducers to persist whitelist to save appropriate store in localStrorage
  whitelist: ['authProvider'],
}

export default function configureAppStore() {
  const sagaMiddleware = createSagaMiddleware()

  const reducer = combineReducers({
    ...rootReducer,
  })

  const persistedReducer = persistReducer(rootPersistConfig, reducer)

  const store: any = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
  })

  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
