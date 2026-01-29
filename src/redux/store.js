import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import itemsReducer from "./itemsSlice";
import wishlistReducer from "./wishlistSlice";




export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer,
    wishlist: wishlistReducer,
  }
});
