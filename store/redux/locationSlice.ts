import { TimeType, LocationType } from "../../types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const locationSlice = createSlice({
    name: "location",
    initialState: {
        locationObj: undefined as LocationType | undefined,
        timeObj: undefined as TimeType | undefined,
        isCelsius: false,
    },
    reducers: {
        resetLocationObj: (state) => {
            state.locationObj = undefined
        },
        setLocationObj: (state, { payload }: PayloadAction<LocationType>) => {
            state.locationObj = payload
        },
        setTimeObj: (state, { payload }: PayloadAction<TimeType>) => {
            state.timeObj = payload
        },
        toggleTemperatureUnit: (state) => {
            state.isCelsius = !state.isCelsius
        },
    },
})

export default locationSlice
