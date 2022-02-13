import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const imageSlice = createSlice({
    name: "image",
    initialState: {
        light: undefined as string[] | undefined,
        dark: undefined as string[] | undefined,
        showImage: true,
    },
    reducers: {
        setLightPics(state, { payload }: PayloadAction<string[]>) {
            state.light = payload
        },
        setDarkPics(state, { payload }: PayloadAction<string[]>) {
            state.dark = payload
        },
        toggleShowImage(state) {
            state.showImage = !state.showImage
        },
    },
})

export default imageSlice
