import { configureStore } from "@reduxjs/toolkit"
import imageSlice from "./imageSlice"
import locationSlice from "./locationSlice"

export const store = configureStore({
    reducer: {
        location: locationSlice.reducer,
        image: imageSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
