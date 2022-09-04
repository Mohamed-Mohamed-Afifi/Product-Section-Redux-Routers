import { createSlice } from "@reduxjs/toolkit";

export const getProjects = createSlice({
    name: 'projects',
    initialState: {
        data: [
            {},
            {}
        ]
    }
})
export default getProjects.reducer;