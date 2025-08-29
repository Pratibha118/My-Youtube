import { configureStore } from "@reduxjs/toolkit";
import appSlice from '../utils/slices/appSlice'

const store = configureStore({
    reducer: {
        app: appSlice
    }
})

export default store;