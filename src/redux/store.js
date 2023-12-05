import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composedEnhancer=composeWithDevTools(applyMiddleware(thunk))

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store=createStore(persistedReducer,composedEnhancer)
export const persistor = persistStore(store)

export default store;
