import { createSlice } from "@reduxjs/toolkit";

const cache = createSlice({
    name: 'cache',
    initialState: {},
    reducers:{
        cacheResults  :(state, action) =>{
            state = Object.assign(state, action.payload)
        }
    }

})

export const {cacheResults} = cache.actions
export default cache.reducer