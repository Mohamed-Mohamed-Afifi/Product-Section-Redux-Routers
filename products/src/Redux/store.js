import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import productSlice from "./productSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        log: loginSlice
    }
})