import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import bannerSlice from "../features/bannerSlice";
import userSlice from "../features/userSlice";
export const store = configureStore({
    reducer:{
        productSlice,
        userSlice
        // bannerSlice
    }
})