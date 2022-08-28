import { createSlice } from "@reduxjs/toolkit"
export const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [
            {
                id: 1,
                title: 'pc',
                description: 'this is pc'
            },
            {
                id: 2,
                title: 'phone',
                description: 'this is phone'
            },
            {
                id: 3,
                title: 'HeadPhone',
                description: 'this is HeadPhone'
            },
        ]
    }
})
export default productSlice.reducer;