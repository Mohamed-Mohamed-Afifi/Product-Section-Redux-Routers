import { createSlice } from "@reduxjs/toolkit"
export const loginSlice = createSlice({
    name: 'log',
    initialState: {
        data: {
            username: "",
            password: ""
        },
    },
    reducers: {
        setInfo: (state, { payload }) => {
            state.data = payload
        }
    }
})
export const { setInfo } = loginSlice.actions;
export default loginSlice.reducer