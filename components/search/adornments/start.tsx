import { MyLocation as LocationIcon } from "@mui/icons-material"
import { CircularProgress, IconButton, InputAdornment, Tooltip } from "@mui/material"
import React, { memo, useState } from "react"
import { CoordType } from "../../../types"

type StartAdornmentProps = {
    onSetCoord: (coord: CoordType) => void
    onSetShowSuggestions: (bool: boolean) => void
}

export default memo(function StartAdornment({
    onSetCoord,
    onSetShowSuggestions,
}: StartAdornmentProps) {
    const [isLocationIconLoading, setIsLocationIconLoading] = useState(false)

    function locationButton_onClickHandler() {
        setIsLocationIconLoading(true)
        const onSuccess = (position: GeolocationPosition): void => {
            onSetCoord({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            })
            onSetShowSuggestions(true)
            setIsLocationIconLoading(false)
        }
        const onError = (error: GeolocationPositionError): void => {
            setIsLocationIconLoading(false)
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    return alert("User denied the request for Geolocation.")
                case error.POSITION_UNAVAILABLE:
                    return alert("Location information is unavailable.")
                case error.TIMEOUT:
                    return alert("The request to get user location timed out.")
                default:
                    return alert("An unknown error occurred.")
            }
        }

        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(onSuccess, onError)
        }
        alert("Geolocation is not supported by this browser.")
    }

    return (
        <InputAdornment position="start">
            {isLocationIconLoading ? (
                <CircularProgress color="inherit" />
            ) : (
                <Tooltip title="Detect my location" arrow placement="bottom">
                    <IconButton
                        sx={{ color: "text.secondary" }}
                        onClick={locationButton_onClickHandler}
                    >
                        <LocationIcon />
                    </IconButton>
                </Tooltip>
            )}
        </InputAdornment>
    )
})
