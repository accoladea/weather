import { useEffect, useRef } from "react"
import { LocationType } from "../../types"
import { useAppDispatch } from "../redux/hooks"
import locationSlice from "../redux/locationSlice"

export const useRetrieveLocation = (noLocation: boolean) => {
    let retrieved = useRef(false)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (noLocation) {
            let location: string | null | LocationType = localStorage.getItem("__loc__")
            if (location) {
                location = JSON.parse(location)
                dispatch(locationSlice.actions.setLocationObj(<LocationType>location))
                retrieved.current = true
            }
        }
    }, [dispatch, noLocation])

    return retrieved.current
}
