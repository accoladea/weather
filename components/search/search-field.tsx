import { Box, InputBase, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { ChangeEvent, memo, useRef, useState } from "react"
import SuggestionsList from "./suggestions/list"

import { SuggestType, CoordType, LocationType } from "../../types"
import StartAdornment from "./adornments/start"
import EndAdornment from "./adornments/end"
import { customInputValidator } from "../../utils"
import { useAppDispatch } from "../../store/redux/hooks"
import locationSlice from "../../store/redux/locationSlice"

export default function SearchInput() {
    const theme = useTheme()
    const tablet = useMediaQuery(theme.breakpoints.up("md"))
    const desktop = useMediaQuery(theme.breakpoints.up("lg"))

    const searchRef = useRef<HTMLInputElement>()
    const [inputText, setInputText] = useState("")
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [coord, setIsCoord] = useState<CoordType>()
    const dispatch = useAppDispatch()

    function inputChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        let searchString = event.target.value.trim()

        if (searchString.length === 0) {
            setShowSuggestions(false)
            return
        }
        const passed = customInputValidator(searchString)
        if (!passed) {
            setShowSuggestions(false)
            return
        }
        if (coord) setIsCoord(undefined)

        setInputText(searchString)
        setShowSuggestions(true)
    }

    function inputResetHandler() {
        setInputText("")
    }

    function suggestionSelectHandler(selected: string, suggest: SuggestType) {
        setInputText(selected)
        searchRef.current!.value = selected
        setShowSuggestions(false)
        if (coord) setIsCoord(undefined)

        const city: LocationType = {
            name: suggest.name,
            country: suggest.country,
            state: suggest.state,
            coord: {
                lat: suggest.lat,
                lon: suggest.lon,
            },
        }
        dispatch(locationSlice.actions.setLocationObj(city))
        localStorage.setItem("__loc__", JSON.stringify(city))
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
            }}
        >
            <InputBase
                placeholder={
                    desktop
                        ? "Search for weather anywhere on the globe:"
                        : tablet
                        ? "Search for weather anywhere:"
                        : "Search for weather:"
                }
                onChange={inputChangeHandler}
                inputRef={searchRef}
                startAdornment={
                    <StartAdornment
                        onSetCoord={(coord) => setIsCoord(coord)}
                        onSetShowSuggestions={setShowSuggestions}
                    />
                }
                endAdornment={
                    <EndAdornment
                        showSuggestions={showSuggestions}
                        onInputReset={inputResetHandler}
                        searchRef={searchRef}
                        onSetShowSuggestions={(bool) => setShowSuggestions(bool)}
                    />
                }
            />
            {showSuggestions && (
                <SuggestionsList
                    searchTerm={inputText}
                    onSuggestionSelect={suggestionSelectHandler}
                    coord={coord}
                />
            )}
        </Box>
    )
}
