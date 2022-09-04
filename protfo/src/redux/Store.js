import { configureStore } from "@reduxjs/toolkit";
import getProjects from "./projectSlice";

export const Store = configureStore({
    reducer: {
        projects: getProjects,
    }
})