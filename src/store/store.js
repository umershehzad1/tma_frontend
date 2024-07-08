'use client'

import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from "../app/redux/reducers/userReducer";

export const store = configureStore({
  reducer: {
    getUserData : userReducer
  }
});
