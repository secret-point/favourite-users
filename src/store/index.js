import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import memberReducer from "store/memberSlice";
import pageReducer from "store/pageSlice";
import filterReducer from "store/filterSlice";

const persistConfig = {
  key: "root",
  storage,
};

const memberPersistedReducer = persistReducer(persistConfig, memberReducer);

export const store = configureStore({
  reducer: {
    members: memberPersistedReducer,
    pageInfo: pageReducer,
    filterOption: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
